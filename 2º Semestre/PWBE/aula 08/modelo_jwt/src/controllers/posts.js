const db = require("../data/connection");

const listarposts = async (req, res) => {
    const posts = await db.query("SELECT * FROM posts")
    res.status(200).send(posts[0]).end();
};

const cadastrarpost = async (req, res) => {
    const { titulo, conteudo } = req.body;
    const id_usuario = req.headers['user'].id;

    const novopost = await db.query("INSERT INTO posts VALUES (DEFAULT, ?, ?, ?);", [titulo, conteudo, id_usuario]);

    res.send({
        id: novopost[0].insertId,
        titulo: titulo,
        conteudo: conteudo
    }).end();
};

const excluirPosts = async (req, res) => {
    const idPosts = req.params.id;

    try {
        const delPost = await db.query("DELETE FROM posts WHERE id = ?", [idPosts]);

        const info = { msg: "" };

        if (delPost[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else if (delPost[0].affectedRows === 0) {
            info.msg = "Locação não encontrada";
        }

        res.status(200).json(info).end();
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Locação em uso";
        }

        res.status(500).json(info).end();
    }
};

const atualizarPosts = async (req, res) => {
    const { titulo, conteudo, id } = req.body;

    try {
        const atualiza = await db.query("UPDATE posts SET titulo = ?, conteudo = ? WHERE id = ? ", [titulo, conteudo, id]);

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhuma locação encontrada";
        } else if (atualiza[0].affectedRows === 1) {
            info.msg = "Locação atualizada com sucesso";
        }

        res.status(200).json(info).end();
    } catch (error) {
        console.log(error);

        res.status(500).end();
    }
};

module.exports = {
    listarposts,
    cadastrarpost,
    excluirPosts,
    atualizarPosts

}