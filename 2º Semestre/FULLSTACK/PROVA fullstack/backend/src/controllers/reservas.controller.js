const db = require("../data/connection");

const cadastroReserva = async (req, res) => {
    const { id_sala, id_aluno, data_reserva, horario } = req.body;

    if (!id_sala || !id_aluno || !data_reserva || !horario) {
        return res.status(400).json({ msg: "Preencha todos os campos" });
    }

    const novaReserva = await db.query(
        "INSERT INTO reservas VALUES (DEFAULT, ?, ?, ?, ?)",
        [id_sala, id_aluno, data_reserva, horario]
    );

    const reserva = {
        id: novaReserva[0].insertId,
        id_sala,
        id_aluno,
        data_reserva,
        horario
    };

    res.status(201).json(reserva);
};

const listarReserva = async (req, res) => {
    const lista = await db.query("SELECT * FROM reservas;");
    res.json(lista[0]);
};

const atualizarReserva = async (req, res) => {
    const id_reserva = req.params.id;
    const { id_sala, id_aluno, data_reserva, horario } = req.body;

    if (!id_sala || !id_aluno || !data_reserva || !horario) {
        return res.status(400).json({ msg: "Preencha todos os campos" });
    }

    try {
        const atualiza = await db.query(
            "UPDATE reservas SET id_sala = ?, id_aluno = ?, data_reserva = ?, horario = ? WHERE id_reserva = ?", [id_sala, id_aluno, data_reserva, horario, id_reserva]
        );

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhuma reserva encontrada";
        } else {
            info.msg = "Reserva atualizada com sucesso";
        }

        res.status(200).json(info);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const excluirReserva = async (req, res) => {
    const idReserva = req.params.id;

    try {
        const delReserva = await db.query(
            "DELETE FROM reservas WHERE id_reserva = ?", [idReserva]
        );

        const info = { msg: "" };

        if (delReserva[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else {
            info.msg = "Reserva não encontrada";
        }

        res.status(200).json(info);
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Reserva em uso";
        }

        res.status(500).json(info);
    }
};

const totalReservas = async (req, res) => {
    try {
        const total = await db.query(
            `SELECT nome, COUNT(*) AS total
             FROM salas s
             JOIN reservas r ON r.id_sala = s.id_sala
             GROUP BY nome;`
        );

        res.status(200).json(total[0]);
    } catch (error) {
        console.error("Erro ao buscar total de reservas", error);
        res.status(500).json({ msg: "" });
    }
};


module.exports = {
    cadastroReserva,
    listarReserva,
    atualizarReserva,
    excluirReserva,
    totalReservas
};
