const express = require('express');
const router = express.Router();

const comidasController = require("../controllers/comidas.controller");

router.get("/comidas",comidasController.listarComidas);
router.get("/comidas/:id",comidasController.buscarComidas);
router.post("/comida",comidasController.cadastrarComida);
router.delete("/comida/:id",comidasController.excluirComida);
router.put("/comida",comidasController.atualizarComida);
router.get("/comidas/comida/:id",comidasController.listarComidasID);

module.exports = router;