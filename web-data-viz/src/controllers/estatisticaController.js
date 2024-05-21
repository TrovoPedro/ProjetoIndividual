var estatisticaModel = require("../models/estatisticaModel");

function cadastrarEstatistica(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pesoAtual = req.body.PesoServer;
    var qtdHoras = req.body.qtdHorasServer;
    var metaPeso = req.body.metaPesoServer;

    // Faça as validações dos valores
    if (pesoAtual == undefined) {
        res.status(400).send("Seu peso está undefined!");
    } else if (qtdHoras == undefined) {
        res.status(400).send("A quantidade de horas está undefined!");
    } else if (metaPeso == undefined) {
        res.status(400).send("Resultado de calorias andadas está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        estatisticaModel.cadastrarEstatistica(pesoAtual, qtdHoras, metaPeso)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao gravar! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarEstatistica
}