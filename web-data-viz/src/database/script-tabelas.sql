create database S4L;
use S4L;

create table usuario(
	idUsuario int primary key auto_increment,
	nomeUsuario varchar(45),
	email varchar(256),
	senha varchar(45)
);

create table medida(
	idMedida int primary key auto_increment,
    nomeMedida varchar(45)
);

create table estatistica(
	idEstatistica int auto_increment,
	pesoUsuario decimal(6,3),
	metaPeso decimal(6,3),
	fkUsuario int,
    fkMedida int,
	constraint fkUserEstatistica foreign key(fkUsuario)
	references usuario(idUsuario),
    constraint fkMedidaEstatistica foreign key(fkMedida)
    references medida(idMedida),
    constraint fkComposta primary key(idEstatistica, fkUsuario, fkMedida)
);