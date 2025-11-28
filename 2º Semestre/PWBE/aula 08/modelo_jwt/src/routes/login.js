const loginController = require('../controllers/login');

const express = require('express');

const loginRoutes = express.Router();

loginRoutes.post('/login', loginController.Login);
loginRoutes.post('/cadastrar', loginController.cadastrarusuario);

module.exports = loginRoutes;