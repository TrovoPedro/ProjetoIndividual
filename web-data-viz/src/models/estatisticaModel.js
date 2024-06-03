var database = require("../database/config");

function cadastrarEstatistica(peso, metaPeso, qtdHoras, idUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", peso, metaPeso, qtdHoras, idUser);
    
    var instrucaoSql = `
        INSERT INTO estatistica (pesoUsuario, metaPeso, qtdHoras, fkUsuario, fkMedida) VALUES ('${peso}', '${metaPeso}', '${qtdHoras}', '${idUser}', ${1});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEstatisticas() {

    // var idUser = sessionStorage.ID_USUARIO;
    
    var instrucaoSql = `SELECT pesoUsuario, metaPeso, DATE(dtEstatistica) FROM estatistica
    WHERE fkUsuario = 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarEstatistica,
    buscarEstatisticas
}