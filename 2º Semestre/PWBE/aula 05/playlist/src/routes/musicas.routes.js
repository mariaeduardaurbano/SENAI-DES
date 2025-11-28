const express = require("express");
const router = express.Router();

const MusicasController = require("../controllers/musicas.controller");

router.get("/musicas", MusicasController.listar);
router.get("/musica/:id", MusicasController.buscar);
router.post("/musica", MusicasController.cadastrar);
router.delete("/musica/:id", MusicasController.apagar);
router.put("/musicas", MusicasController.alterar);
router.patch("/musica/:id", MusicasController.atualizar);

module.exports = router;