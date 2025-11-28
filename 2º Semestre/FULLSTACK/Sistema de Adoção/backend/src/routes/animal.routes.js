const express = require('express')

const animalController = require("../controllers/adotante");
const validate = require("../middlewares/auth");

// const {validaGerente, validaSupervisor} = require("../middlewares/validaCargo");

const adotanteRoutes = express.Router();

adotanteRoutes.get('/adocao', validaGerente, animalController.listarAdocao);
// adotanteRoutes.post('/cadastrar/animal', validate, validaGerente, animalController.cadastrarpost);
// adotanteRoutes.delete('/excluir/animal/:id', validate, validaSupervisor, animalController.excluiradocao);
// adotanteRoutes.put('/atualizar/animal', validate, validaSupervisor, animalController.atualizaradocao);

module.exports = adotanteRoutes;