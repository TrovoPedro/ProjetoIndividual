var database = require("../database/config");

function buscarEstatisticas() {

    // var idUser = sessionStorage.ID_USUARIO;
    
    var instrucaoSql = `SELECT pesoUsuario, metaPeso FROM estatistica
    WHERE fkUsuario = 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarEstatisticas
}