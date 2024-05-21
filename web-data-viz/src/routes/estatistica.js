var express = require("express");
var router = express.Router();

var estatisticaController = require("../controllers/estatisticaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarEstatistica", function (req, res) {
    estatisticaController.cadastrarEstatistica(req, res);
})

module.exports = router;