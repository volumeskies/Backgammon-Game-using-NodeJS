DELIMITER //
CREATE FUNCTION check_password(login_ VARCHAR(50), password_ VARCHAR(50))
RETURNS BOOLEAN
BEGIN
    RETURN EXISTS (SELECT 1 FROM users WHERE login = login_ AND password = password_);
END //

DELIMITER //
CREATE FUNCTION user_exist(login_ VARCHAR(50))
RETURNS BOOLEAN
BEGIN
    RETURN EXISTS (SELECT 1 FROM users WHERE get_id(login) = get_id(login_));
END //

DELIMITER //
CREATE FUNCTION is_point_free(p_number int)
RETURNS BOOLEAN
BEGIN
    RETURN EXISTS (SELECT 1 FROM points WHERE point_number = p_number AND checkers_count = 0);
END //

DELIMITER //
CREATE FUNCTION get_color(p_id int, game_id int)
RETURNS VARCHAR
BEGIN
    SELECT color FROM players WHERE id_game = game_id and id_player = p_id;
END //

DELIMITER //
CREATE FUNCTION get_id(login_ VARCHAR(50))
RETURNS INT
BEGIN
    SELECT id_user FROM users WHERE login = login_;
END //

DELIMITER //
CREATE FUNCTION get_player_id(u_id INT)
RETURNS INT
BEGIN
    SELECT id_player FROM players WHERE id_user = u_id;
END //

DELIMITER //
CREATE FUNCTION invitation_exist(u_login int, i_login int)
RETURNS BOOLEAN
BEGIN
    RETURN EXISTS (SELECT 1 FROM invites WHERE id_inviting = get_id(u_login) AND id_invited = get_id(i_login));
END //

DELIMITER //
CREATE FUNCTION invitation_answer(u_login int, i_login int)
RETURNS BOOLEAN
BEGIN
    RETURN (SELECT confirm FROM invites WHERE id_inviting = get_id(u_login) AND id_invited = get_id(i_login));
END //

DELIMITER //
CREATE FUNCTION game_exists(game_id int)
RETURNS BOOLEAN
BEGIN
    RETURN EXISTS (SELECT 1 FROM Games WHERE id_game = game_id);
END //

DELIMITER //
CREATE FUNCTION turn(player_id int)
RETURNS BOOLEAN
BEGIN
    DECLARE g_id INT DEFAULT (SELECT id_game FROM Players WHERE id_player = player_id);
    DECLARE player_2 INT DEFAULT (SELECT id_player FROM Players WHERE id_game = g_id AND id_player <> player_id);
    DECLARE cnt INT DEFAULT (SELECT COUNT(*) FROM Moves WHERE id_player = player_id OR id_player = player_2);
    IF(((cnt % 2 = 0) AND (SELECT color FROM Players WHERE id_player = player_id) = 'b') OR ((cnt % 2 <> 0) AND (SELECT color FROM Players WHERE id_player = player_id) = 'w')) THEN
       RETURN FALSE;
    ELSE RETURN TRUE;
    END IF;
END //
