const express = require("express"); 
const cors = require("cors"); 

UsuariosRoutes = require("./src/routes/usuarios.routes");
MusicasRoutes = require("./src/routes/musicas.routes");
PlaylistsRoutes = require("./src/routes/playlists.routes");
Playlist_musicaRoutes = require("./src/routes/playlist_musica.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(UsuariosRoutes);
app.use(MusicasRoutes);
app.use(PlaylistsRoutes);
app.use(Playlist_musicaRoutes);

app.listen(3000, () => {
    console.log("Servidor online na porta 3000")
});