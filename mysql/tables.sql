CREATE TABLE Users(
    id_user int unsigned AUTO_INCREMENT primary key,
    login varchar(50), 
    password varchar(50), 
    username varchar(50)
);

CREATE TABLE Players(
	id_player int unsigned AUTO_INCREMENT primary key,
    id_user int unsigned,
    id_game int unsigned,
    color varchar(50)
);

CREATE TABLE Games(
	id_game int unsigned AUTO_INCREMENT primary key
);

CREATE TABLE Points(
	id_player int unsigned,
    point_number int unsigned,
    checkers_count int unsigned
);

CREATE TABLE Moves(
	id_player int unsigned,
    point_from int unsigned,
    point_to int unsigned
);

CREATE TABLE Invites(
    id_inviting int unsigned,
    id_invited int unsigned,
    confirmation tinyint(1)
);

ALTER TABLE Players ADD COLUMN d1 INT;
ALTER TABLE Players ADD COLUMN d2 INT;
ALTER TABLE Players ADD COLUMN rolled INT;

ALTER TABLE `Points` ADD CONSTRAINT pk PRIMARY KEY(id_player, point_number);
ALTER TABLE `Moves` ADD CONSTRAINT pk PRIMARY KEY(id_player, point_from, point_to);
ALTER TABLE `Invites` ADD CONSTRAINT pk PRIMARY KEY(id_inviting, id_invited);

ALTER TABLE `Players` ADD CONSTRAINT FOREIGN KEY(id_user) REFERENCES Users(id_user);
ALTER TABLE `Players` ADD CONSTRAINT FOREIGN KEY(id_game) REFERENCES Users(id_game);
ALTER TABLE `Points` ADD CONSTRAINT FOREIGN KEY(id_player) REFERENCES Players(id_player);
ALTER TABLE `Moves` ADD CONSTRAINT FOREIGN KEY(id_player) REFERENCES Players(id_player);