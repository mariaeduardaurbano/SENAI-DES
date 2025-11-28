const clientes = require("../data/clientes.data");

const buscar =(req, res) => {

    const idCliente = req.params.cpf;
   
    var client = "não encontrado";

    
    clientes.forEach((cliente, index) => {
        if(cliente.cpf === idCliente){
            client = cliente;
        }
    });

    res.send(client).end();
};

module.exports = { 
    buscar
};