const express = require("express");
const router = express.Router();

const QuartosController = require("../controllers/quartos.controller");

router.get("/quartos", QuartosController.listar);
router.get("/quarto/:id", QuartosController.buscar);
router.post("/quarto", QuartosController.cadastrar);
router.delete("/quarto/:id", QuartosController.apagar);
router.put("/quarto", QuartosController.alterar);
router.patch("/quarto/:id", QuartosController.atualizar);

module.exports = router;