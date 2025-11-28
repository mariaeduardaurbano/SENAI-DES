const db = require("../data/connection");

const login = async (req, res) => {
    const { user, psw } = req.body;

    try {
        const senhahash = crypto.createHash("MD5").update(psw).digest("hex").toString();

        const usuario = await db.query("SELECT * FROM usuario WHERE email = ? AND senha = ?;", [user, senhahash]);

        if (usuario[0].length == 0) res.status(401).send({ message: 'E-mail or Password incorrect !' });

        const token = jsonwebtoken.sign(
            {
                id: usuario[0][0].id,
                name: usuario[0][0].nome,
                email: usuario[0][0].email,
                cargo: usuario[0][0].cargo
            },
            process.env.SECRET_JWT,
            { expiresIn: "60min" }
        );

        res.status(200).json({ token: token }).end();
    } catch (err) {
        res.status(500).send(err).end();
    }

    res.status(200).end();
};

const listarAdotante = async (req, res) => {
    const adotante = await db.query("SELECT * FROM adotante")
    res.status(200).send(adotante[0]).end();
};

const cadastrarAdotante = async (req, res) => {
    const { nome, telefone, email } = req.body;
    const id_adotante = req.headers['adocao'].id;

    const novaAdocao = await db.query("INSERT INTO adocao VALUES (DEFAULT, ?, ?, ?);", [id_adotante, nome, telefone, email]);

    res.send({
        id_adotante: novoAdotante[0].insertId,
        nome: nome,
        telefone: telefone,
        email: email
    }).end();
};

const excluirAdotante = async (req, res) => {
    const idAdotante = req.params.id;

    try {
        const delAdotante = await db.query("DELETE FROM adotante WHERE id = ?", [idAdotante]);

        const info = { msg: "" };

        if (delAdotante[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else if (delAdotante[0].affectedRows === 0) {
            info.msg = "Adotante não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Adotante em andamento";
        }

        res.status(500).json(info).end();
    }
};

const atualizarAdotante = async (req, res) => {
    const { id_adotante, nome, telefone, email } = req.body;

    try {
        const atualiza = await db.query("UPDATE adotante SET nome = ?, telefone = ?, email = ?, WHERE id_adotante = ? ", [id_adotante, nome, telefone, email]);

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhum adotante encontrado";
        } else if (atualiza[0].affectedRows === 1) {
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
    cadastrarAdotante,
    excluirAdotante,
    atualizarAdotante,
    login
}