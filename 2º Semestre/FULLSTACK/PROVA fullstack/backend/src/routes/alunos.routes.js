const express = require('express');
const router = express.Router();

const alunosController = require("../controllers/alunos.controller");

router.post('/aluno', alunosController.cadastroAluno);
router.get('/alunos', alunosController.listarAluno);
router.delete('/aluno/:id', alunosController.excluirAluno);
router.put('/aluno/:id', alunosController.atualizarAluno);
router.get('/aluno/total', alunosController.totalResAluno);


module.exports = router;