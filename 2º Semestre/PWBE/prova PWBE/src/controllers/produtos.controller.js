const produtos = require("../data/produtos.data");

const buscar =(req, res) => {

    const idProduto = req.params.id;
   
    var product = "não encontrado";

    
    produtos.forEach((produto, index) => {
        if(produto.id === idProduto){
            product = produto;
        }
    });

    res.send(product).end();
};

const apagar = (req, res) => {

    const idProduto = req.params.id;

    var indice = -1;

    produtos.forEach((produtos, index) => {
        if(produtos.id == idProduto){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        produtos.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const produtoAlterado = req.body;

    var encontrei = false;

    produtos.forEach((produto, index) => {
        if(produto.id === produtoAlterado.id){
            produtos[index] = produtoAlterado;
            encontrei = true;
        }
    });

    if(encontrei === false){
        res.status(404).end();
    }else{
        res.status(201).end();
    }
};

module.exports = {
    buscar,
    apagar,
    alterar
};