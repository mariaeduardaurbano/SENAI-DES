const db = require("../data/connection");

const listarComidas = async (req, res) => {
    try {
        const lista = await db.query("SELECT * FROM comidas");
        res.json(lista[0]).end();
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Não é possível listar esse conteúdo agora.";
        }

        res.status(500).json(info).end();
    }

};

const buscarComidas = async (req, res) => {
    const idComida = req.params.id;

    try {
        const comida = await db.query("SELECT * FROM comidas WHERE id = " + idComida);
        res.json(comida[0]).end();
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }

}

const cadastrarComida = async (req, res) => {
    const { ingressos_id, pedido } = req.body;

    try {
        const novaComida = await db.query("INSERT INTO comidas VALUES (DEFAULT, ?, ?)", [ingressos_id, pedido]);
        const comida = {
            id: novaComida[0].insertId,
            ingressos_id: ingressos_id,
            pedido: pedido
        }
        res.json(comida).status(201).end();
    } catch (error) {
        console.log(error)
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Não é possível fazer esse cadastro agora.";
        }

        res.status(500).json(info).end();
    }

};

const excluirComida = async (req, res) => {
    const idComida = req.params.id;

    try {
        const delComida = await db.query("DELETE FROM comidas WHERE id = ?", [idComida]);

        const info = { msg: "" };

        if (delComida[0].affectedRows === 1) {
            info.msg = "Excluído com sucesso";
        } else if (delComida[0].affectedRows === 0) {
            info.msg = "Comida não encontrada";
        }

        res.status(200).json(info).end();
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "A comida ainda está sendo produzida, aguarde para excluí-la";
        }

        res.status(500).json(info).end();
    }
};

const atualizarComida = async (req, res) => {
    const { id, ingressos_id, pedido } = req.body;

    try {
        const atualiza = await db.query("UPDATE comidas SET ingressos_id = ?, pedido = ? WHERE id = ?", [ingressos_id, pedido, id]);

        const info = { msg: "" };

        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhuma comida encontrado";
        } else if (atualiza[0].affectedRows === 1) {
            info.msg = "Comida atualizado com sucesso";
        }

        res.status(200).json(info).end();

    } catch (error) {
        console.log(error);

        res.status(500).end();
    }
};

const listarComidasID = async (req, res) => {
    const id = req.params.id;

    try {
        const buscarComidas = await db.query("SELECT * FROM comidas WHERE id = ?", [id]);

        res.status(200).json(buscarComidas[0]).end();
    } catch (error) {
        const info = { msg: "" };

        if (error.errno === 1451) {
            info.msg = "Não foi possível listar o conteúdo no momento";
        }

        res.status(500).json(info).end();
    }
};

module.exports = {
    listarComidas,
    buscarComidas,
    cadastrarComida,
    excluirComida,
    atualizarComida,
    listarComidasID
}
