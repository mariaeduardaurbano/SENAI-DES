const db = require("../data/connection");

const listarAdocao = async (req, res) => {
    const lista = await db.query("SELECT * FROM adocao");
    res.json(lista[0]).end();
};

const buscarAdocao = async (req, res) => {
    const idAdocao = req.params.id;

    const adocao = await db.query( "SELECT * FROM adocao WHERE id_adocao = ?", [idAdocao]);

    res.json(adocao[0][0]).end();
};

const cadastrarAdocao = async (req, res) => {
    const { id_adotante, id_animal, data_adocao } = req.body;

    const novoAdocao = await db.query("INSERT INTO adocao VALUES (DEFAULT, ?, ?, ?)", [id_adotante, id_animal, data_adocao]);

    const adocao = {
        id: novoAdocao[0].insertId,
        id_adotante,
        id_animal,
        data_adocao
    };

    res.status(201).json(adocao).end();
};

const excluirAdocao = async (req, res) => {
    const idAdocao = req.params.id_adocao;

    try {
        const delAdo = await db.query("DELETE FROM adocao WHERE id_adocao = ?", [idAdocao]);

        
        const info = { msg: "" };

        if (delAdo[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else if(delAdo[0].affectedRows === 0){
            info.msg = "Adoção não encontrada";
        }

        res.status(200).json(info).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Adoção vinculado a adoção";
        }

        res.status(500).json(info).end();
    }
};

const atualizarAdocao = async (req, res) => {
    const { id_adocao, id_adotante, id_animal, data_adocao } = req.body;

    try {
        const atualiza = await db.query(
            "UPDATE adocao SET id_adotante = ?, id_animal = ?, data_adocao = ? WHERE id_adocao = ?", [ id_adotante, id_animal, data_adocao, id_adocao]);

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhuma adoção encontrada";
        } else {
            info.msg = "Adoção atualizada com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

module.exports = {
    listarAdocao,
    buscarAdocao,
    cadastrarAdocao,
    excluirAdocao,
    atualizarAdocao
};
