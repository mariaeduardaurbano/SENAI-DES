const db = require("../data/connection");

const cadastroAluno = async (req, res) => {
    const { nome, turma } = req.body;

    if (!nome || !turma) {
        return res.status(400).json({ msg: "Preencha todos os campos" });
    }

    try {
        const novoAluno = await db.query(
            "INSERT INTO alunos VALUES (DEFAULT, ?, ?)",
            [nome, turma]
        );

        const aluno = {
            id: novoAluno[0].insertId,
            nome,
            sala
        };

        res.status(201).json(aluno);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const listarAluno = async (req, res) => {
    const lista = await db.query("SELECT * FROM alunos;");
    res.json(lista[0]);
};

const atualizarAluno = async (req, res) => {
    const id_aluno = req.params.id;
    const { nome, turma } = req.body;

    try {
        const atualiza = await db.query(
            "UPDATE alunos SET nome = ?, turma = ? WHERE id_aluno = ?", [nome, turma, id_aluno]
        );

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhum aluno encontrado";
        } else {
            info.msg = "Aluno atualizado com sucesso";
        }

        res.status(200).json(info);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const excluirAluno = async (req, res) => {
    const idAluno = req.params.id;

    try {
        const delAlu = await db.query(
            "DELETE FROM alunos WHERE id_aluno = ?", [idAluno]
        );

        const info = { msg: "" };

        if (delAlu[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else {
            info.msg = "Aluno não encontrado";
        }

        res.status(200).json(info);
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Aluno com reserva";
        }

        res.status(500).json(info);
    }
};

const totalResAluno = async (req, res) => {
    const { nome } = req.query;

    try {
        const total = await db.query(
            `SELECT nome, COUNT(*) AS total
             FROM alunos a
             JOIN reservas r ON r.id_aluno = a.id_aluno
             GROUP BY nome;`,
        );

        res.status(200).json(total[0]);
    } catch (error) {
        console.error("Erro ao buscar total de reservas", error);
        res.status(500).json({ msg: "" });
    }
};


module.exports = {
    cadastroAluno,
    listarAluno,
    atualizarAluno,
    excluirAluno,
    totalResAluno
};