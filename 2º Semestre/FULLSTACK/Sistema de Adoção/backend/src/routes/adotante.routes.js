const express = require('express')

const adotanteController = require("../controllers/adotante");
const validate = require("../middlewares/auth");

// const {validaGerente, validaSupervisor} = require("../middlewares/validaCargo");

const adotanteRoutes = express.Router();

adotanteRoutes.get('/adocao', validate, validaGerente, adotanteController.listarAdocao);
adotanteRoutes.post('/cadastrar/adotante', validate, validaGerente, adotanteController.cadastrarpost);
adotanteRoutes.delete('/excluir/adotante/:id', validate, validaSupervisor, adotanteController.excluiradocao);
adotanteRoutes.put('/atualizar/adotante', validate, validaSupervisor, adotanteController.atualizaradocao);

module.exports = adotanteRoutes;