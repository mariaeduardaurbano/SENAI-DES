const db = require("../data/connection");

const listarAnimal = async (req, res) => {
    const lista = await db.query("SELECT * FROM animal");
    res.json(lista[0]).end();
};

const buscarAnimal = async (req, res) => {
    const idAnimal = req.params.id;

    const animal = await db.query( "SELECT * FROM animal WHERE id_animal = ?", [idAnimal]);

    res.json(animal[0][0]).end();
};

const cadastrarAnimal = async (req, res) => {
    const { nome, especie, raca, idade, status } = req.body;

    const novoAnimal = await db.query("INSERT INTO animal VALUES (DEFAULT, ?, ?, ?, ?, ?)", [nome, especie, raca, idade, status]);

    const animal = {
        id: novoAnimal[0].insertId,
        nome,
        especie,
        raca,
        idade, 
        status
    };

    res.status(201).json(animal).end();
};

const excluirAnimal = async (req, res) => {
    const idAnimal = req.params.id_animal;

    try {
        const delAni = await db.query("DELETE FROM Animal WHERE id_animal = ?", [idAnimal]);

        
        const info = { msg: "" };

        if (delAni[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else if(delAni[0].affectedRows === 0){
            info.msg = "Animal não encontrado";
        }

        res.status(200).json(info).end();

    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Animal vinculado a adoção";
        }

        res.status(500).json(info).end();
    }
};

const atualizarAnimal = async (req, res) => {
    const { id_animal, nome, especie, raca, idade, status } = req.body;

    try {
        const atualiza = await db.query(
            "UPDATE Animal SET nome = ?, especie = ?, raca = ?, idade = ?, status = ? WHERE id_animal = ?", [nome, especie, raca, idade, status, id_animal]);

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhum Animal encontrado";
        } else {
            info.msg = "Animal atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

module.exports = {
    listarAnimal,
    buscarAnimal,
    cadastrarAnimal,
    excluirAnimal,
    atualizarAnimal
};
