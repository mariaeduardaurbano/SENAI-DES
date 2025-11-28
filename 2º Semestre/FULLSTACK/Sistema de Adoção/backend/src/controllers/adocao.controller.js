const db = require("../data/connection");

const listarAdocao = async (req, res) => {
    const adocao = await db.query("SELECT * FROM adocao")
    res.status(200).send(adocao[0]).end();
};

const cadastrarAdocao = async (req, res) => {
    const { titulo, conteudo } = req.body;
    const id_adocao = req.headers['adocao'].id;

    const novaAdocao = await db.query("INSERT INTO adocao VALUES (DEFAULT, ?, ?, ?, ?);", [id_adocao, id_adotante, id_animal, data_adocao]);

    res.send({
        id_adocao: novaAdocao[0].insertId,
        id_adotante: id_adotante,
        id_animal: id_animal,
        data_adocao: data_adocao

    }).end();
};

const excluirAdocao = async (req, res) => {
    const idAdocao = req.params.id;

    try {
        const delAdocao = await db.query("DELETE FROM adocao WHERE id = ?", [idAdocao]);

        const info = { msg: "" };

        if (delAdocao[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else if (delAdocao[0].affectedRows === 0) {
            info.msg = "Adoção não encontrada";
        }

        res.status(200).json(info).end();
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Adoção em andamento";
        }

        res.status(500).json(info).end();
    }
};

const atualizarAdocao = async (req, res) => {
    const { id_adocao, id_adotante, id_animal, data_adocao } = req.body;

    try {
        const atualiza = await db.query("UPDATE adocao SET id_adotante = ?, id_animal = ?, data_adocao = ?, WHERE id_adocao = ? ", [id_adocao, id_adotante, id_animal, data_adocao]);

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhuma adoção encontrada";
        } else if (atualiza[0].affectedRows === 1) {
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
    cadastrarAdocao,
    excluirAdocao,
    atualizarAdocao

}