create database S4L;
use S4L;

create table usuario(
	idUsuario int primary key auto_increment,
	nomeUsuario varchar(45),
	email varchar(256),
	senha varchar(45)

);

create table estatistica(
	idEstatistica int primary key auto_increment,
	pesoUsuario decimal(3,3),
	metaPeso decimal(3,3),
	fkUsuario int,
	constraint fkUserEstatistica foreign key(fkUsuario)
	references usuario(idUsuario)
);

create table medidas(



	
);
