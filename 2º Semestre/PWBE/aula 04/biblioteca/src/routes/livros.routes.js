const express = require("express");
const router = express.Router();

const LivrosController = require("../controllers/livros.controller");

router.get("/livros", LivrosController.listar);
router.get("/livro/:id", LivrosController.buscar);
router.post("/livro", LivrosController.cadastrar);
router.delete("/livro/:id", LivrosController.apagar);
router.put("/livro", LivrosController.alterar);
router.patch("/livro/:id", LivrosController.atualizar);

module.exports = router;