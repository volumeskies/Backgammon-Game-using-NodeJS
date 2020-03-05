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
CREATE PROCEDURE SET_DEFAULT_VALUES(login_1 varchar(50), login_2 varchar(50), game_id int)
BEGIN
    DECLARE user_1 INT UNSIGNED DEFAULT get_id(login_1);
    DECLARE user_2 INT UNSIGNED DEFAULT get_id(login_2);
        /* user: 1, color: black */
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (user_1, 1, 2);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (user_1, 12, 5);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (user_1, 17, 3);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (user_1, 19, 5);
        /* user: 2, color: white */
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (user_2, 6, 5);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (user_2, 8, 3);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (user_2, 18, 5);
        INSERT INTO points(id_player, point_number, checkers_count) VALUES (user_2, 24, 2);
END //

DELIMITER ///* если пункт свободен */
CREATE PROCEDURE IS_POINT_FREE(number)
BEGIN 
    IF(is_point_free(number))
    THEN
        SELECT "TRUE";
    ELSE
        SELECT "FALSE";
END //

DELIMITER ///* если не встречается занятого пункта */
CREATE PROCEDURE IS_MULTIPOINT_FREE(from, number)
BEGIN 
	DECLARE i INT DEFAULT from_point + 1;
    points: WHILE(i <= number + from_point) DO
        IF(!is_point_free(i))
        THEN LEAVE points;
        SELECT "LEAVE";
        END IF;
        SET i = i + 1;
    END WHILE points;
    IF(is_point_free(i))
    THEN 
        SELECT "TRUE";
    ELSE
        SELECT "FALSE";
    END IF;
END //

DELIMITER //
CREATE PROCEDURE MAKE_MOVE(p_id int, from int, to int)
BEGIN
    INSERT INTO moves(id_player, point_from, point_to) VALUES(p_id, from, to);
END //
/*----------------------------GETTERS----------------------------*/
DELIMITER //
CREATE PROCEDURE get_color(p_id int, game_id int)
BEGIN
    SELECT color FROM players WHERE id_game = game_id and id_player = p_id;
END //

DELIMITER //
CREATE PROCEDURE get_id(login_ VARCHAR(50))
BEGIN
    SELECT id_user FROM users WHERE login = login_;
END //