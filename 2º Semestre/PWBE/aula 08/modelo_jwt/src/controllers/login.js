const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const cadastrarusuario = async (req, res) => {
    const { email, nome, senha, cargo } = req.body;

    //cria uma hash MD5 em hexadecimal
    const novasenha = crypto.createHash("md5").update(senha).digest("hex").toString();

    const novousuario = await db.query("INSERT INTO usuario VALUES (DEFAULT, ?, ?, ?, ?);", [nome, email, novasenha, cargo]);

    res.send({
        id: novousuario[0].insertId,
        nome: nome,
        email: email,
        cargo: cargo
    }).end();
};

const Login = async (req, res) => {
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

module.exports = {
    Login,
    cadastrarusuario
}