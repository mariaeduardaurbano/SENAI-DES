const express = require('express');
const router = express.Router();

const locacaoController = require("../controllers/locacoes.controller");

router.get("/locacoes",locacaoController.listarLocacoes);
router.get("/locacoes/:id",locacaoController.buscarLocacoes);
router.post("/locacao",locacaoController.cadastrarLocacoes);
router.delete("/locacao/:id",locacaoController.excluirLocacoes);
router.put("/locacao",locacaoController.atualizarLocacoes);
router.get("/locacoes/cliente/:id",locacaoController.listarLocacoesID);
router.get("/locacoes/status/:status",locacaoController.listarLocacoesStatus);
router.get("/faturamento",locacaoController.faturamento);

module.exports = router;