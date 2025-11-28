const db = require("../data/connection");

const listarClientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM clientes");
    res.json(lista[0]).end();
}

const buscarClientes = async (req, res) => {
    const idCliente = req.params.id;
    const cliente = await db.query("SELECT * FROM clientes WHERE id = " + idCliente);
    res.json(cliente[0][0]).end();
}

const cadastrarClientes = async (req, res) => {
    const {nome, email} = req.body;

    const novoCliente = await db.query("INSERT INTO clientes VALUES (DEFAULT, ?, ?)",[nome, email]);

    const cliente = {
        id: novoCliente[0].insertId,
        nome: nome
    }
    res.json(cliente).status(201).end();
}

const excluirCliente = async (req, res) => {
    const idCliente = req.params.id;

    try{
        const delCli = await db.query("DELETE FROM clientes WHERE id = ?", [idCliente]);

        const info = {msg:""};

        if(delCli[0].affectedRows === 1){
            info.msg = "Excluído com sucesso";
        }else if(delCli[0].affectedRows === 0){
            info.msg = "Cliente não encontrado";
        }

        res.status(200).json(info).end();
    }catch(error){
        const info = {msg:""};

        if(error.errno === 1451) {
            info.msg = "Cliente com locação";
        }

        res.status(500).json(info).end();
    }
};

const atualizarCliente = async (req, res) => {
    const {id, nome, email} = req.body;

    try{
        const atualiza =  await db.query("UPDATE clientes SET nome = ?, email= ? WHERE id = ? ", [nome, email, id]);

        const info = {msg: ""};

        if(atualiza[0].affectedRows === 0){
            info.msg = "Nenhum cliente encontrado";
        }else if(atualiza[0].affectedRows === 1) {
            info.msg = "Cliente atualizado com sucesso";
        }

        res.status(200).json(info).end();
    }catch(error){
        console.log(error);

        res.status(500).end();
    }
};

module.exports = {
    listarClientes,
    buscarClientes,
    cadastrarClientes,
    excluirCliente, 
    atualizarCliente
}