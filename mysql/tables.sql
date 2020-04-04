CREATE TABLE users(
    id_user int unsigned AUTO_INCREMENT primary key,
    login varchar(50), 
    password varchar(50), 
    username varchar(50)
);

CREATE TABLE players(
	id_player int unsigned AUTO_INCREMENT primary key,
    id_user int unsigned,
    id_game int unsigned,
    color varchar(50)
);

CREATE TABLE games(
	id_game int unsigned AUTO_INCREMENT primary key
);

CREATE TABLE points(
	id_player int unsigned,
    point_number int unsigned,
    checkers_count int unsigned
);

CREATE TABLE moves(
	id_player int unsigned,
    point_from int unsigned,
    point_to int unsigned
);

CREATE TABLE invites(
    id_inviting int unsigned,
    id_invited int unsigned,
    confirmation tinyint(1)
);

ALTER TABLE Players ADD COLUMN d1 INT;
ALTER TABLE Players ADD COLUMN d2 INT;
ALTER TABLE Players ADD COLUMN rolled INT;