const express = require("express");
const router = express.Router();

const UsuariosController = require("../controllers/usuarios.controller");

router.get("/usuarios", UsuariosController.listar);
router.get("/usuarios/:id", UsuariosController.buscar);
router.post("/usuario", UsuariosController.cadastrar);
router.delete("/usuario/:id", UsuariosController.apagar);
router.put("/usuario", UsuariosController.alterar);
router.patch("/usuario/:id", UsuariosController.atualizar);

module.exports = router;