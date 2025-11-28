const express = require("express");
const router = express.Router();

const ProdutosController = require("../controllers/produtos.controller");

router.get("/produto/:id", ProdutosController.buscar);
router.delete("/produto/:id", ProdutosController.apagar);
router.put("/produto", ProdutosController.alterar);

module.exports = router;