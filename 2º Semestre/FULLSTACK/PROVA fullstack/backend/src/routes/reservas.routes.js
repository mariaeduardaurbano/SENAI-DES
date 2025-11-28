const express = require('express');
const router = express.Router();

const reservasControllers = require("../controllers/reservas.controller");

router.post('/reserva', reservasControllers.cadastroReserva);
router.get('/reservas', reservasControllers.listarReserva);
router.delete('/reserva/:id', reservasControllers.excluirReserva);
router.put('/reserva/:id', reservasControllers.atualizarReserva);
router.get('/reservatotal', reservasControllers.totalReservas);


module.exports = router;