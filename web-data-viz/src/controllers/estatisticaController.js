var estatisticaModel = require("../models/estatisticaModel");

function buscarEstatisticas(req, res) {

    console.log(`Recuperando todas as estatisticas do usuario`);

    estatisticaModel.buscarEstatisticas()
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as estatisticas", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarEstatisticas
}