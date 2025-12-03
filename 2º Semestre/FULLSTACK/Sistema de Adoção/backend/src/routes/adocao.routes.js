const express = require('express')

const adocaoController = require("../controllers/adocao.controller");

const router = express.Router();

router.get('/adocao', adocaoController.listarAdocao);
router.post('/cadastrar/adocao', adocaoController.cadastrarAdocao);
router.delete('/excluir/adocao/:id_adocao', adocaoController.excluirAdocao);
router.put('/atualizar/adocao', adocaoController.atualizarAdocao);

module.exports = router;