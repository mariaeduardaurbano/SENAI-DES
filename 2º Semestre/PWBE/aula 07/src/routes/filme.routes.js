const express = require('express');
const router = express.Router();

const filmeController = require("../controllers/filme.controller");

router.get("/filmes",filmeController.listarFilmes);
router.get("/filmes/:id",filmeController.buscarFilmes);
router.post("/filme",filmeController.cadastrarFilme);
router.delete("/filme/:id",filmeController.excluirFilme);
router.put("/filme",filmeController.atualizarFilme);

module.exports = router;