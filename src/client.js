import { validate } from '../src/validation.js';
var socket = io.connect();
socket.on('connect', () => {
        console.log("client connection");
        //отправляем данные с "Войти" на сервер
        $('.signin__button').on('click', event =>{
                event.preventDefault();
                let userLogin = $('input[name=login]').val();
                let userPassword = $('input[name=password]').val();
                if(!validate.validation(userLogin, userPassword))
                        return;
                socket.emit('user_signin', {
                        login: userLogin,
                        password: userPassword,
                });
        });
        //отправляем данные с "Зарегистрироваться" на сервер
        $('.signup__button').on('click', event =>{
                event.preventDefault();
                let userLogin = $('input[name=login]').val();
                let userPassword = $('input[name=password]').val();
                let userPasswordConfirm = $('input[name=password_correct]').val();
                let userName = $('input[name=name]').val();
                if(!validate.registerValidation(userLogin, userPassword, userPasswordConfirm, userName))
                        return;
                socket.emit('user_signup', {
                        username: userName,
                        login: userLogin,
                        password: userPassword,
                        correct_password: userPasswordConfirm,
                });
        })
});