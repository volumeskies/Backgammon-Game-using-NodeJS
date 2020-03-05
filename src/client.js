import {default as notificator} from '../src/notifications';
var socket = io.connect();
socket.on('connect', () => {
        console.log("client connection");
        //отправляем данные с "Войти" на сервер
        $('.signin__button').on('click', event =>{
                console.log('user_signin');
                event.preventDefault();
                let userLogin = $('input[name=login]').val();
                let userPassword = $('input[name=password]').val();
                socket.emit('user_signin', {
                        login: userLogin,
                        password: userPassword,
                });
        });
        //отправляем данные с "Зарегистрироваться" на сервер
        $('.signup__button').on('click', event =>{
                event.preventDefault();
                console.log('user signup');
                let userLogin = $('input[name=login]').val();
                let userPassword = $('input[name=password]').val();
                let userPasswordConfirm = $('input[name=pasword_correct]').val();
                let userName = $('input[name=name]').val();
                socket.emit('user_signup', {
                        username: userName,
                        login: userLogin,
                        password: userPassword,
                        correct_password: userPasswordConfirm,
                });
        })
});