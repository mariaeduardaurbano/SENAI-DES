const express = require('express');
const router = express.Router();

const salasControllers = require("../controllers/salas.controller");

router.post('/sala', salasControllers.cadastroSala);
router.get('/salas', salasControllers.listarSala);
router.delete('/sala/:id', salasControllers.excluirSala);
router.put('/sala/:id', salasControllers.atualizarSala);
router.get('/salatotal', salasControllers.totalSalas);


module.exports = router;