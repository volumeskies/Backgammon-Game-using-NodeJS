/*------------------------LOGIN REGISTER--------------------------*/
DELIMITER //
CREATE PROCEDURE LOGIN(login_ varchar(50), password_ varchar(50))
BEGIN
    IF(check_password(login_, password_))
    THEN
        SELECT "TRUE";
    ELSE
        SELECT "FALSE";
    END IF;
END //

DELIMITER //
CREATE PROCEDURE REGISTER(login_ varchar(50), password_ varchar(50), name_ varchar(50))
BEGIN
    IF (!user_exist(login_))
    THEN
        INSERT INTO users(login, password, username) VALUES(login_, password_, name_);
        SELECT "TRUE";
    ELSE
        SELECT "FALSE";
    END IF;
END //

/*---------------------------GAME---------------------------------*/
DELIMITER //
CREATE PROCEDURE CREATE_GAME(login_1 VARCHAR(50), login_2 VARCHAR(50))
game: BEGIN
    DECLARE g_id INT;
    IF(login_1 = login_2) THEN
        SELECT "ERROR! Same logins!";
        LEAVE game;
    END IF;
    IF(!user_exist(login_1) OR !user_exist(login_2)) THEN
        SELECT "ERROR! User not found!";
        LEAVE game;
    END IF;
    INSERT INTO games(id_game) VALUES(NULL);
    SET g_id = (SELECT MAX(id_game) FROM Games);
    IF(RAND() > 0.5) THEN
        INSERT INTO players(id_player, id_user, id_game, color) VALUES(NULL, get_id(login_1), g_id, 'w');
        INSERT INTO players(id_player, id_user, id_game, color) VALUES(NULL, get_id(login_2), g_id, 'b');
    ELSE 
        INSERT INTO players(id_player, id_user, id_game, color) VALUES(NULL, get_id(login_2), g_id, 'w');
        INSERT INTO players(id_player, id_user, id_game, color) VALUES(NULL, get_id(login_1), g_id, 'b');
    END IF;
END //

DELIMITER //
CREATE PROCEDURE SET_VALUES(game_id int)
setvalues: BEGIN
    DECLARE player_1 INT;
    DECLARE player_2 INT;
    DECLARE white INT;
    DECLARE black INT;
    SET player_1 = (SELECT MIN(id_player) FROM players WHERE id_game = game_id);
    SET player_2 = (SELECT MAX(id_player) FROM players WHERE id_game = game_id);
    IF(player_1 = player_2) THEN
        SELECT "ERROR! Same player!";
        LEAVE setvalues;
    END IF;
    IF(player_1 IS NULL OR player_2 IS NULL) THEN
        SELECT "ERROR! Player not found!";
        LEAVE setvalues;
    END IF;
    IF(!game_exists(game_id)) THEN
        SELECT "ERROR! Game do not exist!";
        LEAVE setvalues;
    END IF;
    IF((SELECT color FROM players WHERE id_player = player_1) = 'w') THEN
        SET white = player_1;
        SET black = player_2;
    ELSE
        SET white = player_2;
        SET black = player_1;
    END IF;
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (black, 1, 2);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (black, 12, 5);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (black, 17, 3);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (black, 19, 5);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (white, 6, 5);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (white, 8, 3);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (white, 18, 5);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (white, 24, 2);
        SELECT id_player, id_game, color FROM players WHERE id_player = get_id(login_1) AND id_game = g_id;
END //

DELIMITER //
CREATE PROCEDURE GAMESTATE(login_1 VARCHAR(50), login_2 VARCHAR(50))
gamestate: BEGIN
    DECLARE player_1 INT DEFAULT get_player_id(get_id(login_1));
    DECLARE player_2 INT DEFAULT get_player_id(get_id(login_2));
    IF((SELECT id_game FROM players WHERE id_player = player_1) IS NULL OR (SELECT id_game FROM players WHERE id_player = player_2) IS NULL) THEN
        CALL CREATE_GAME(login_1, login_2);
        LEAVE gamestate;
    ELSE
        SELECT id_player, point_number, checkers_count FROM points WHERE id_player = player_1 OR id_player = player_2;
    END IF;
END //


DELIMITER //
CREATE PROCEDURE GETCOLOR(p_id int, game_id int)
BEGIN
    SELECT color FROM players WHERE id_game = game_id and id_player = p_id;
END //

DELIMITER //
CREATE PROCEDURE CHECKWINNER(game_id int)
winner: BEGIN
    DECLARE player_1;
    DECLARE player_2;
    DECLARE color_1;
    DECLARE color_2;
    SET player_1 = (SELECT MIN(id_player) FROM players WHERE id_game = game_id);
    SET player_2 = (SELECT MAX(id_player) FROM players WHERE id_game = game_id);
    SET color_1 = CALL GETCOLOR(player_1, game_id);
    SET color_2 = CALL GETCOLOR(player_2, game_id);
    IF(((SELECT COUNT(checkers_count) FROM points WHERE id_player = player_1 AND point_number BETWEEN 19 AND 24) = 15) AND color_1 = 'b') THEN
        SELECT player_1;
        LEAVE winner;
    ELSE IF(((SELECT COUNT(checkers_count) FROM points WHERE id_player = player_2 AND point_number BETWEEN 1 AND 6) = 15) AND color_1 = 'W') THEN
        SELECT player_2;
        LEAVE winner;
    END IF;
        SELECT "FALSE";
END //

DELIMITER //
CREATE PROCEDURE FREE_POINTS(login_ varchar(50), from_point int, dice_1 int, dice_2 int)
free: BEGIN 
	DECLARE point_1 INT;
    DECLARE point_2 INT;
    DECLARE multipoint INT;
    DECLARE player_id INT;
    DECLARE game_id INT;
    DECLARE i INT;
    DECLARE k INT;
    DECLARE color VARCHAR(50);
    SET player_id = get_player_id(get_id(login_));
    SET game_id = (SELECT id_game FROM players WHERE id_player = player_id);
    SET color = get_color(player_id, game_id);
    IF(color = 'white') THEN
        SET point_1 = from_point - dice_1;
        SET point_2 = from_point - dice_2;
        SET multipoint = from_point - (dice_1 + dice_2);
    ELSE IF(color = 'black') THEN
            SET point_1 = from_point + dice_1;
            SET point_2 = from_point + dice_2;
            SET multipoint = from_point + dice_1 + dice_2;
        END IF;
    END IF;
    IF(from_point > multipoint AND color = 'white') THEN
        SET i = multipoint;
        SET k = from_point;
    ELSE
        SELECT 'ERROR! WRONG MOVE WHITE';
        LEAVE free;
    END IF;
    IF(from_point < multipoint AND color = 'black') THEN
        SET i = from_point;
        SET k = multipoint;
    ELSE
        SELECT 'ERROR! WRONG MOVE BLACK';
        LEAVE free;
    END IF;
    points: WHILE(i < k) DO
        IF(!is_point_free(i))
        THEN LEAVE points;
            SELECT "LEAVE";
        END IF;
        SET i = i + 1;
    END WHILE points;
    IF(!is_point_free(i)) THEN 
        SET i = NULL;
    END IF;
    IF(!is_point_free(point_1)) THEN
        SET point_1 = NULL;
    END IF;
    IF(!is_point_free(point_2)) THEN
        SET point_2 = NULL;
    END IF;
    SELECT i, point_1, point_2;
END //

DELIMITER //
CREATE PROCEDURE MAKE_MOVE(login_ VARCHAR(50), psw VARCHAR(50), from_point int, to_point int)
makemove: BEGIN
    DECLARE p_id INT DEFAULT get_player_id(get_id(login_));
    DECLARE g_id INT DEFAULT (SELECT id_game FROM players WHERE id_player = p_id);
    IF(!check_password(login_, psw)) THEN
        SELECT "ERROR! User password is not correct";
        LEAVE makemove;
    END IF;
    IF(!game_exists(g_id)) THEN
        SELECT "ERROR! Game do not exists!";
        LEAVE makemove;
    END IF;
    IF(!turn(p_id)) THEN
        SELECT "ERROR! Not your turn!";
        LEAVE makemove;
    ELSE 
        INSERT INTO moves(id_player, point_from, point_to) VALUES(p_id, from_point, to_point);
    END IF;
END //

DELIMITER //
CREATE PROCEDURE ROLL(login_ VARCHAR(50), psw VARCHAR(50))
roll: BEGIN
    DECLARE p_id INT DEFAULT get_player_id(get_id(login_));
    DECLARE g_id INT DEFAULT (SELECT id_game FROM players WHERE id_player = p_id);
    DECLARE dice_1 INT DEFAULT ((SELECT FLOOR(RAND() * 6)) + 1);
    DECLARE dice_2 INT DEFAULT ((SELECT FLOOR(RAND() * 6)) + 1);
    DECLARE cnt INT DEFAULT(SELECT COUNT(*) FROM moves WHERE id_player = p_id);
    IF(!check_password(login_, psw)) THEN
        SELECT "ERROR! User password is not correct";
        LEAVE roll;
    END IF;
    IF(!game_exists(g_id)) THEN
        SELECT "ERROR! Game do not exists!";
        LEAVE roll;
    END IF;
    IF(!turn(p_id)) THEN
        SELECT "ERROR! Not your turn!";
        LEAVE roll;
    ELSE IF((SELECT rolled FROM players WHERE id_player = p_id) = (cnt + 1)) THEN
        SELECT "ERROR! You can't roll twice!";
        LEAVE roll;
    END IF;
    UPDATE players SET d1 = dice_1, d2 = dice_2, rolled = cnt + 1 WHERE id_player = p_id;
    SELECT d1, d2 FROM players WHERE id_player = p_id;
    END IF;
END //
/*----------------------------INVITATION PROCESS----------------------------*/
DELIMITER //
CREATE PROCEDURE INVITE(u_login VARCHAR(50), i_login VARCHAR(50))
invitation: BEGIN
    IF(u_login = i_login) THEN
        SELECT "ERROR! You're inviting yourself!";
        LEAVE invitation;
    END IF;
    IF(!user_exist(i_login)) THEN
        SELECT "ERROR! Invited user do not exist!";
        LEAVE invitation;
    END IF;
    IF(getid(i_login) IS NULL) THEN
        SELECT "ERROR! NULL invited!";
        LEAVE invitation;
    END IF;
        INSERT INTO invites(id_inviting, id_invited, confirmation) VALUES(u_id, i_id, false);
        SELECT "TRUE";
        LEAVE invitation;
END //

DELIMITER //
CREATE PROCEDURE CONFIRM(u_login VARCHAR(50), i_login VARCHAR(50), conf BOOLEAN)
confirm: BEGIN
    IF(!invitation_exist(u_login, i_login)) THEN
        SELECT "ERROR! Invitation do not exist!";
        LEAVE confirm;
    END IF;
    UPDATE invites SET confirmation = conf WHERE id_inviting = get_id(u_login) AND id_invited = get_id(i_login);
    SELECT "TRUE";
    LEAVE confirm;
END //

DELIMITER //
CREATE PROCEDURE INV_ANSWER(u_login VARCHAR(50), i_login VARCHAR(50))
answ: BEGIN
    IF(!invitation_exist(u_login, i_login)) THEN
        SELECT "ERROR! Invitation do not exist!";
        LEAVE answ;
    END IF;
    IF(invitation_answer(u_login, i_login)) THEN
        SELECT "TRUE";
        LEAVE answ;
    ELSE
        SELECT "FALSE";
        LEAVE answ;
    END IF;
END //