const db = require("../data/connection");

const listarAnimal = async (req, res) => {
    const animal = await db.query("SELECT * FROM animal")
    res.status(200).send(animal[0]).end();
};

const cadastrarAnimal = async (req, res) => {
    const {nome, especie, raca, status, idade } = req.body;
    const id_animal = req.headers['adocao'].id;

    const novoAnimal = await db.query("INSERT INTO animal VALUES (DEFAULT, ?, ?, ?, ?, ?);", [id_animal, nome, especie, raca, status, idade]);

    res.send({
        id_animal: novoAnimal[0].insertId,
        nome: nome,
        especie: especie,
        raca: raca,
        status: status,
        idade: idade
    }).end();
};

const excluirAnimal = async (req, res) => {
    const idAnimal = req.params.id;

    try {
        const delAnimal = await db.query("DELETE FROM animal WHERE id = ?", [idAnimal]);

        const info = { msg: "" };

        if (delAnimal[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else if (delAnimal[0].affectedRows === 0) {
            info.msg = "Animal não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Animal em andamento";
        }

        res.status(500).json(info).end();
    }
};

const atualizarAnimal = async (req, res) => {
    const { id_animal, nome, especie, raca, status, idade } = req.body;

    try {
        const atualiza = await db.query("UPDATE animal SET nome = ?, especie = ?, raca = ?, status = ?, idade = ?, WHERE id_adotante = ? ", [id_animal, nome, especie, raca, status, idade]);

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhum animal encontrado";
        } else if (atualiza[0].affectedRows === 1) {
            info.msg = "animal atualizado com sucesso";
        }

        res.status(200).json(info).end();
    } catch (error) {
        console.log(error);

        res.status(500).end();
    }
};

module.exports = {
    listarAnimal,
    cadastrarAnimal,
    excluirAnimal,
    atualizarAnimal

}