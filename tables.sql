CREATE TABLE users(
    id_user int unsigned not null AUTO_INCREMENT primary key,
    login varchar(50), 
    password varchar(50), 
    username varchar(50)
);

CREATE TABLE players(
	id_player int unsigned not null AUTO_INCREMENT primary key,
    id_user int unsigned not null,
    id_game int unsigned not null,
    color varchar(50)
);

CREATE TABLE games(
	id_game int unsigned not null AUTO_INCREMENT primary key,
    id_player int unsigned not null
);

CREATE TABLE points(
	id_player int unsigned not null,
    point_number int unsigned not null,
    checkers_count int unsigned not null
);

CREATE TABLE moves(
	id_player int unsigned not null,
    move_count int unsigned not null,
    point_from int unsigned not null,
    point_to int unsigned not null
);