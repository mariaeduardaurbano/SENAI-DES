const quartos = require("../data/quartos.data");

const listar = (req, res) => {
    res.status(200).send(quartos).end();
};

const buscar =(req, res) => {

    const idQuarto = req.params.id;
   
    var room = "não encontrado";

    
    quartos.forEach((quarto, index) => {
        if(quarto.id === idQuarto){
            room = quarto;
        }
    });

    res.send(room).end();
};

const cadastrar = (req, res) =>{
    const novoQuarto = req.body; 
    quartos.push(novoQuarto);
    res.status(201).send("Cadastrado com Sucesso!").end();
};

const apagar = (req, res) => {

    const idQuarto = req.params.id;

    var indice = -1;

    quartos.forEach((quartos, index) => {
        if(quartos.id == idQuarto){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        quartos.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const quartoAlterado = req.body;

    var encontrei = false;

    quartos.forEach((quarto, index) => {
        if(quarto.id === quartoAlterado.id){
            quartos[index] = quartoAlterado;
            encontrei = true;
        }
    });

    if(encontrei === false){
        res.status(404).end();
    }else{
        res.status(201).end();
    }
};

const atualizar = (req, res) =>{
    const idQuarto = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    quartos.forEach((quartos, index) => {
        if(quartos.id === idQuarto) indice = index;
    });

    if (indice === -1){
        res.status(404).end();
    }else{
        Object.keys(novosDados).forEach((key) => {
            quartos[indice][key] = novosDados[key];
    });
    res.status(204).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    alterar,
    atualizar
};