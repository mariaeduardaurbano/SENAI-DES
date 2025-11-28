const express = require ('express');
const router = express.Router();

const IngressosController = require("../controllers/ingressos.controller");

router.post("/ingresso", IngressosController.CadastrarIngresso);
router.get("/ingresso/:id", IngressosController.BuscarIngresso);
router.get("/ingressos", IngressosController.ListarIngresso);
router.put("/ingresso", IngressosController.AtualizarIngresso);
router.patch("/ingresso", IngressosController.AlterarIngresso);
router.delete("/ingresso/:id", IngressosController.ExcluirIngresso);

module.exports = router;