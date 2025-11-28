const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/clientes.controller");

router.get("/cliente/:cpf", clientesController.buscar);

module.exports = router;