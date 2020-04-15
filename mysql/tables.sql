CREATE TABLE users(
    id_user int unsigned,
    login varchar(50), 
    password varchar(50), 
    username varchar(50)
);
ALTER TABLE `users` ADD CONSTRAINT pk PRIMARY KEY(id_user);
ALTER TABLE `users` modify column id_user INT NOT NULL AUTO_INCREMENT;

CREATE TABLE games(
	id_game int unsigned
);
ALTER TABLE `games` ADD CONSTRAINT pk PRIMARY KEY(id_game);
ALTER TABLE `games` modify column id_game INT NOT NULL AUTO_INCREMENT;
ALTER TABLE `games` ADD COLUMN d1 INT;
ALTER TABLE `games` ADD COLUMN d2 INT;

CREATE TABLE players(
	id_player int unsigned,
    id_user int unsigned,
    id_game int unsigned,
    color varchar(1)
);
ALTER TABLE `players` ADD CONSTRAINT pk PRIMARY KEY(id_player);
ALTER TABLE `players` modify column id_player INT NOT NULL AUTO_INCREMENT;
ALTER TABLE `players` ADD CONSTRAINT fk_u FOREIGN KEY(id_user) REFERENCES users(id_user);
ALTER TABLE `players` ADD CONSTRAINT fk_g FOREIGN KEY(id_game) REFERENCES games(id_game);

CREATE TABLE points(
	id_player int unsigned,
    point_number int unsigned,
    checkers_count int unsigned
);
ALTER TABLE `points` ADD CONSTRAINT pk PRIMARY KEY(id_player, point_number);
ALTER TABLE `points` modify column id_player INT NOT NULL;
ALTER TABLE `points` ADD CONSTRAINT fk_pp FOREIGN KEY(id_player) REFERENCES players(id_player);

CREATE TABLE moves(
	id_player int unsigned,
    point_from int unsigned,
    point_to int unsigned
);
ALTER TABLE `moves` ADD CONSTRAINT pk PRIMARY KEY(id_player, point_from, point_to);
ALTER TABLE `moves` modify column id_player INT NOT NULL;
ALTER TABLE `moves` ADD CONSTRAINT fk_mp FOREIGN KEY(id_player) REFERENCES players(id_player);

CREATE TABLE invites(
    id_inviting int unsigned,
    id_invited int unsigned,
    confirmation tinyint(1)
);
ALTER TABLE `invites` ADD CONSTRAINT pk PRIMARY KEY(id_inviting, id_invited);