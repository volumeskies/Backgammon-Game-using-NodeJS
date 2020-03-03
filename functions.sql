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
    RETURN EXISTS (SELECT 1 FROM users WHERE login = login_);
END //

DELIMITER //
CREATE FUNCTION is_point_free(p_number int)
RETURNS BOOLEAN
BEGIN
    RETURN EXISTS (SELECT 1 FROM points WHERE point_number = p_number AND checkers_count = 0);
END //