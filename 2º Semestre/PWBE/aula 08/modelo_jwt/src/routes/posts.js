const express = require('express')

const postsController = require("../controllers/posts");
const validate = require("../middlewares/auth");

const {validaGerente, validaSupervisor} = require("../middlewares/validaCargo");

const postsRoutes = express.Router();

postsRoutes.get('/posts', validate, validaGerente, postsController.listarposts);
postsRoutes.post('/cadastrar/post', validate, validaGerente, postsController.cadastrarpost);
postsRoutes.delete('/excluir/post/:id', validate, validaSupervisor, postsController.excluirPosts);
postsRoutes.put('/atualizar/posts', validate, validaSupervisor, postsController.atualizarPosts);

module.exports = postsRoutes;