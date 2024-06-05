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
    qtdHoras float,
	dtEstatistica datetime default current_timestamp,
	fkUsuario int,
	constraint fkUserEstatistica foreign key(fkUsuario)
	references usuario(idUsuario),
    constraint fkComposta primary key(idEstatistica, fkUsuario)
);

insert into medida values
	(default, 'Primeira medida');
    
select * from medida;

select * from estatistica;	