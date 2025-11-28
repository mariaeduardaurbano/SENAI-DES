const express = require("express");
const router = express.Router();

const ReservasController = require("../controllers/reserva.controller");

router.get("/reservas", ReservasController.buscar);
router.post("/reserva", ReservasController.cadastrar);
router.delete("/reserva/:id", ReservasController.apagar);
router.put("/reserva", ReservasController.alterar);
router.patch("/reserva/:id",ReservasController.atualizar);

module.exports = router;