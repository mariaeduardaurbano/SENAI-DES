const express = require("express");
const router = express.Router();

const ComprasController = require("../controllers/compras.controller");

router.get("/compra/:id", ComprasController.buscar);
router.post("/compra", ComprasController.cadastrar);
router.patch("/compra/:id", ComprasController.atualizar);
router.get("/compra", ComprasController.listar);

module.exports = router;