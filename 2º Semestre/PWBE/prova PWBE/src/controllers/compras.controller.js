const compras = require("../data/compras.data");

const buscar =(req, res) => {

    const idCompra = req.params.id;
   
    var shop = "não encontrado";

    
    compras.forEach((compra, index) => {
        if(compra.id === idCompra){
            shop = compra;
        }
    });

    res.send(shop).end();
};


const cadastrar = (req, res) =>{
    const novaCompra = req.body; 
    compras.push(novaCompra);
    res.status(201).send("Cadastrado com Sucesso!").end();

    if (novaCompra.quantidade >= 0) {
        res.status(201).send("Não foi possível cadastrar o seu pedido!")
    }else{
        res.status(201).send("Pedido cadastrado com sucesso!");
    }
    //corrige essa parte com carinho reenye, passei 40 minutos nela e mesmo assim não consegui resolver =(
};

const atualizar = (req, res) =>{
    const idCompra = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    compras.forEach((compras, index) => {
        if(compras.id === idCompra) indice = index;
    });

    if (indice === -1){
        res.status(404).end();
    }else{
        Object.keys(novosDados).forEach((key) => {
            compras[indice][key] = novosDados[key];
    });
    res.status(204).end();
    }
};

const listar = (req, res) => {
    res.status(200).send(compras).end();
};

module.exports = {
    cadastrar,
    atualizar,
    listar,
    buscar
};