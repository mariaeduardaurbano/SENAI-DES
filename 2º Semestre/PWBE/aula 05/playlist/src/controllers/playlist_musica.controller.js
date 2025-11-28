const playlist_musicas = require("../data/playlist_musica.data");


const listar = (req, res) => {
    res.status(200).send(playlist_musicas).end();
};

const buscar =(req, res) => {

    const idPlaylist_m = req.params.id;
   
    var pl_m = "não encontrado";

    
    playlist_musicas.forEach((playlist_musica, index) => {
        if(playlist_musica.id === idPlaylist_m){
            pl_m = playlist;
        }
    });

    res.send(pl_m).end();
};

const cadastrar = (req, res) =>{
    const novaPlaylist_m = req.body; 
    playlist_musicas.push(novaPlaylist_m);
    res.status(201).send("Cadastrado com Sucesso!").end();
};

const apagar = (req, res) => {

    const idPlaylists_m = req.params.id;

    var indice = -1;

    playlist_musicas.forEach((playlist_musica, index) => {
        if(playlist_musica.id == idPlaylists_m){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else{
        playlist_musicas.splice(indice, 1);
        res.status(204).end();
    }
};

const alterar = (req, res) => {
    const playlistmAlterada = req.body;

    var encontrei = false;

    playlist_musicas.forEach((playlist_musica, index) => {
        if(playlist_musica.id === playlistmAlterada.id){
            playlist_musicas[index] = playlistmAlterada;
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
    const idPlaylistM = req.params.id;
    const novosDados = req.body;

    var indice = -1;

    playlist_musicas.forEach((playlist_musicas, index) => {
        if(playlist_musicas.id === idPlaylistM) indice = index;
    });

    if (indice === -1){
        res.status(404).end();
    }else{
        Object.keys(novosDados).forEach((key) => {
            playlist_musicas
            [indice][key] = novosDados[key];
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