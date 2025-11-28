const express = require('express')

const adocaoController = require("../controllers/adocao");
const validate = require("../middlewares/auth");

// const {validaGerente, validaSupervisor} = require("../middlewares/validaCargo");

const adocaoRoutes = express.Router();

adocaoRoutes.get('/listar', validate, validaGerente, adocaoController.listarAdocao);
adocaoRoutes.post('/cadastrar/adocao', validate, validaGerente, adocaoController.cadastraradocao);
adocaoRoutes.delete('/excluir/adocao/:id', validate, validaSupervisor, adocaoController.excluiradocao);
adocaoRoutes.put('/atualizar/adocao', validate, validaSupervisor, adocaoController.atualizaradocao);

module.exports = adocaoRoutes;