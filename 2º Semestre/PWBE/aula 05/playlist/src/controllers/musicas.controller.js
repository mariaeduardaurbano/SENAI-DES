const musicas = require("../data/musicas.data");

const listar = (req, res) => {
    res.status(200).send(musicas).end();
};

const buscar =(req, res) => {

    const idmusicas = req.params.id;
   
    var music = "não encontrado";

    
    musicas.forEach((musica, index) => {
        if(musica.id === idmusicas){
            music = musica;
        }
    });

    res.send(music).end();
};

const cadastrar = (req, res) =>{
    const novaMusica = req.body; 
    musicas.push(novaMusica);
    res.status(201).send("Cadastrado com Sucesso!").end();
};

const apagar = (req, res) => {

    const idmusicas = req.params.id;

    var indice = -1;

    musicas.forEach((musica, index) => {
        if(musica.id == idmusicas){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        musicas.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const musicaAlterada = req.body;

    var encontrei = false;

    musicas.forEach((musica, index) => {
        if(musica.id === musicaAlterada.id){
            musicas[index] = musicaAlterada;
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
    const idMusica = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    musicas.forEach((musicas, index) => {
        if(musicas.id === idMusica) indice = index;
    });

    if (indice === -1){
        res.status(404).end();
    }else{
        Object.keys(novosDados).forEach((key) => {
            musicas[indice][key] = novosDados[key];
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