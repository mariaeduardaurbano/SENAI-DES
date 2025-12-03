const db = require("../data/connection");

const listarAdotante = async (req, res) => {
    const lista = await db.query("SELECT * FROM adotante");
    res.json(lista[0]).end();
};

const buscarAdotante = async (req, res) => {
    const idAdotante = req.params.id;

    const adotante = await db.query( "SELECT * FROM adotante WHERE id_adotante = ?", [idAdotante]);

    res.json(adotante[0][0]).end();
};

const cadastrarAdotante = async (req, res) => {
    const { nome, telefone, email } = req.body;

    const novoAdotante = await db.query("INSERT INTO adotante VALUES (DEFAULT, ?, ?, ?)", [nome, telefone, email]);

    const adotante = {
        id: novoAdotante[0].insertId,
        nome,
        telefone,
        email
    };

    res.status(201).json(adotante).end();
};

const excluirAdotante = async (req, res) => {
    const idAdotante = req.params.id_adotante;

    try {
        const delAdo = await db.query("DELETE FROM adotante WHERE id_adotante = ?", [idAdotante]);

        
        const info = { msg: "" };

        if (delAdo[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else if(delAdo[0].affectedRows === 0){
            info.msg = "Adotante não encontrado";
        }

        res.status(200).json(info).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Adotante vinculado a adoção";
        }

        res.status(500).json(info).end();
    }
};

const atualizarAdotante = async (req, res) => {
    const { id_adotante, nome, telefone, email } = req.body;

    try {
        const atualiza = await db.query(
            "UPDATE adotante SET nome = ?, telefone = ?, email = ? WHERE id_adotante = ?", [nome, telefone, email, id_adotante]);

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhum adotante encontrado";
        } else {
            info.msg = "Adotante atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

module.exports = {
    listarAdotante,
    buscarAdotante,
    cadastrarAdotante,
    excluirAdotante,
    atualizarAdotante
};
