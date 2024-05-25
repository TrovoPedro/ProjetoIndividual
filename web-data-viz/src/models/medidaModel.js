var database = require("../database/config");

function buscarUltimasMedidas(idUser) {

    var instrucaoSql = `SELECT * from estatistica
                    WHERE fkUser = ${idUser}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
}
