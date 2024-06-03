var express = require("express");
var router = express.Router();

var estatisticaController = require("../controllers/estatisticaController");

router.get("/estatisticasUsuario", function (req, res) {
  estatisticaController.buscarEstatisticas(req, res);
})

module.exports = router;