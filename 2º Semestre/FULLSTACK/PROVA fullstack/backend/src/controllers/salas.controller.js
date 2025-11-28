const db = require("../data/connection");

const cadastroSala = async (req, res) => {
    const { nome, capacidade } = req.body;

    if (!nome || !capacidade) {
        return res.status(400).json({ msg: "Preencha todos os campos" });
    }

    try {
        const novaSala = await db.query(
            "INSERT INTO salas VALUES (DEFAULT, ?, ?)", [nome, capacidade]
        );

        const sala = {
            id: novaSala[0].insertId,
            nome,
            capacidade
        };

        res.status(201).json(sala);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const listarSala = async (req, res) => {
    const lista = await db.query("SELECT * FROM salas;");
    res.json(lista[0]).end();
};

const atualizarSala = async (req, res) => {
    const id_sala = req.params.id;
    const { nome, capacidade } = req.body;

    if (!nome || !capacidade) {
        return res.status(400).json({ msg: "Preencha todos os campos" });
    }

    try {
        const atualiza = await db.query(
            "UPDATE salas SET nome = ?, capacidade = ? WHERE id_sala = ?", [nome, capacidade, id_sala]
        );

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhuma sala encontrada";
        } else {
            info.msg = "Sala atualizada com sucesso";
        }

        res.status(200).json(info);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const excluirSala = async (req, res) => {
    const idSala = req.params.id;

    try {
        const delSala = await db.query(
            "DELETE FROM salas WHERE id_sala = ?", [idSala]
        );

        const info = { msg: "" };

        if (delSala[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else {
            info.msg = "Sala não encontrada";
        }

        res.status(200).json(info);
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Sala reservada";
        }

        res.status(500).json(info);
    }
};

const totalSalas = async (req, res) => {

    try {
        const total = await db.query(
            `SELECT capacidade, COUNT(*) AS total
             FROM salas s 
             JOIN reservas r ON s.id_sala = r.id_sala
             GROUP BY capacidade;`
        );

        res.status(200).json(total[0]);
    } catch (error) {
        console.error("Erro ao buscar salas", error);
        res.status(500).json({ msg: "" });
    }
};

module.exports = {
    cadastroSala,
    listarSala,
    atualizarSala,
    excluirSala,
    totalSalas
};
