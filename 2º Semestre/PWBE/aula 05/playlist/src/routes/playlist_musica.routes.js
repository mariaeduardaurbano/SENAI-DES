const express = require("express");
const router = express.Router();

const Playlist_musicasController = require("../controllers/playlist_musica.controller");

router.get("/p_musica", Playlist_musicasController.listar);
router.get("/p_musica/:id", Playlist_musicasController.buscar);
router.post("/p_musica", Playlist_musicasController.cadastrar);
router.delete("/p_musica/:id", Playlist_musicasController.apagar);
router.put("/p_musica", Playlist_musicasController.alterar);
router.patch("/p_musica/:id", Playlist_musicasController.atualizar);

module.exports = router;