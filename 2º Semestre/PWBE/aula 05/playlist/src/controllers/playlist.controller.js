const playlists = require("../data/playlists.data");

const listar = (req, res) => {
    res.status(200).send(playlists).end();
};

const buscar =(req, res) => {

    const idPlaylists = req.params.id;
   
    var pl = "não encontrado";

    
    playlists.forEach((playlist, index) => {
        if(playlist.id === idPlaylists){
            pl = playlist;
        }
    });

    res.send(pl).end();
};

const cadastrar = (req, res) =>{
    const novaPlaylist = req.body; 
    playlists.push(novaPlaylist);
    res.status(201).send("Cadastrado com Sucesso!").end();
};

const apagar = (req, res) => {

    const idPlaylists = req.params.id;

    var indice = -1;

    playlists.forEach((playlist, index) => {
        if(playlist.id == idPlaylists){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        playlists.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const playlistAlterada = req.body;

    var encontrei = false;

    playlists.forEach((playlist, index) => {
        if(playlist.id === playlistAlterada.id){
            playlists[index] = playlistAlterada;
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
    const idPlaylist = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    playlists.forEach((playlists, index) => {
        if(playlists.id === idPlaylist) indice = index;
    });

    if (indice === -1){
        res.status(404).end();
    }else{
        Object.keys(novosDados).forEach((key) => {
            playlists[indice][key] = novosDados[key];
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