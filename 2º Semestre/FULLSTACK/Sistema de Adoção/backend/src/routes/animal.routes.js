const express = require('express')

const animalController = require("../controllers/animal.controller");

const router = express.Router();

router.get('/animal', animalController.listarAnimal);
router.post('/cadastrar/animal', animalController.cadastrarAnimal);
router.delete('/excluir/animal/:id_animal', animalController.excluirAnimal);
router.put('/atualizar/animal',  animalController.atualizarAnimal);

module.exports = router;