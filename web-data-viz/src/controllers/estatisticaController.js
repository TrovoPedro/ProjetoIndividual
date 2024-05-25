var estatisticaModel = require("../models/estatisticaModel");

function cadastrarEstatistica(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pesoAtual = req.body.PesoServer;
    var qtdHoras = req.body.qtdHorasServer;
    var metaPeso = req.body.metaPesoServer;
    var idUser = req.body.idUserServer;

    // Faça as validações dos valores
    if (pesoAtual == undefined) {
        res.status(400).send("Seu peso está undefined!");
    } else if (qtdHoras == undefined) {
        res.status(400).send("A quantidade de horas está undefined!");
    } else if (metaPeso == undefined) {
        res.status(400).send("Resultado de calorias andadas está undefined!");
    } else if (idUser == undefined) {
        res.status(400).send("id do usuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        estatisticaModel.cadastrarEstatistica(pesoAtual, qtdHoras, metaPeso, idUser)
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

function buscarEstatistica(req, res) {
    var idUsuario = req.params.idUsuario;
  
    estatisticaModel.buscarEstatistica(idUsuario).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar as estatisticas: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }

  function buscarEstatisticasEmTempoReal(req, res) {

    console.log(`Recuperando estatisticas em tempo real`);

    estatisticaModel.buscarEstatisticasEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas estatisticas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrarEstatistica,
    buscarEstatistica,
    buscarEstatisticasEmTempoReal
}