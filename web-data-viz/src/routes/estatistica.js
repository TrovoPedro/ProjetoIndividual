var express = require("express");
var router = express.Router();

var estatisticaController = require("../controllers/estatisticaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarEstatistica", function (req, res) {
    estatisticaController.cadastrarEstatistica(req, res);
})

router.get("/:idUser", function (req, res) {
  estatisticaController.buscarEstatistica(req, res);
});

router.get("/ultimas/:idUser", function (req, res) {
    estatisticaControllerController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUser", function (req, res) {
    estatisticaControllerController.buscarEstatisticasEmTempoReal(req, res);
})

module.exports = router;