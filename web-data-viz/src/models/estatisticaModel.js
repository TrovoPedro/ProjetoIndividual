var database = require("../database/config");

function cadastrarEstatistica(peso, metaPeso, qtdHoras, idUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", peso, metaPeso, qtdHoras, idUser);
    
    var instrucaoSql = `
        INSERT INTO estatistica (pesoUsuario, metaPeso, qtdHoras, fkUsuario) VALUES ('${peso}', '${metaPeso}', '${qtdHoras}', '${idUser}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasEstatisticas(limite) {

    var instrucaoSql = `SELECT nomeUsuario, pesoUsuario, metaPeso 
                        FROM usuario
                        JOIN estatistica
                        ON estatistica.fkUsuario = usuario.idUsuario
                        ORDER BY pesoUsuario
                        LIMIT ${limite};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEstatisticas(idUser) {
    
    var instrucaoSql = `SELECT pesoUsuario, metaPeso,  DATE_FORMAT(dtEstatistica, '%d/%m/%y') as dtEstatistica FROM estatistica`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarEstatistica,
    buscarEstatisticas,
    buscarUltimasEstatisticas
}