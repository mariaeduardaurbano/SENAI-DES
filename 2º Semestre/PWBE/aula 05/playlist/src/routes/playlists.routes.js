const express = require("express");
const router = express.Router();

const PlaylistsController = require("../controllers/playlist.controller");

router.get("/playlists", PlaylistsController.listar);
router.get("/playlist/:id", PlaylistsController.buscar);
router.post("/playlist", PlaylistsController.cadastrar);
router.delete("/playlist/:id", PlaylistsController.apagar);
router.put("/playlist", PlaylistsController.alterar);
router.patch("/playlist/:id", PlaylistsController.atualizar);

module.exports = router;