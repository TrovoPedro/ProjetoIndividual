var estatisticaModel = require("../models/estatisticaModel");

function cadastrarEstatistica(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var peso = req.body.pesoServer;
    var qtdHoras = req.body.qtdHorasServer;
    var metaPeso = req.body.metaPesoServer;
    var idUser = req.body.idUserServer;

    // Faça as validações dos valores
    if (peso == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (qtdHoras == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (metaPeso == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }  else if (idUser == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        estatisticaModel.cadastrarEstatistica(peso, metaPeso, qtdHoras, idUser)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

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
    cadastrarEstatistica,
    buscarEstatisticas
}