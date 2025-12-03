const express = require('express')

const adotanteController = require("../controllers/adotante.controller");

const router = express.Router();

router.get('/adotante', adotanteController.listarAdotante);
router.post('/cadastrar/adotante', adotanteController.cadastrarAdotante);
router.delete('/adotanteexcluir/:id_adotante', adotanteController.excluirAdotante);
router.put('/atualizar/adotante', adotanteController.atualizarAdotante);

module.exports = router;