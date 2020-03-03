var socket = io.connect();
var id = 0;
socket.on('connect', () => {
        console.log("client connection");
        //отправляем данные с "Войти" на сервер
        $('.signin__button').on('click', event =>{
                console.log('user_signin');
                event.preventDefault();
                socket.emit('user_signin', {
                        login: $('input[name=login]').val(),
                        password: $('input[name=password]').val(),
                });
        });
        //отправляем данные с "Зарегистрироваться" на сервер
        $('.signup__button').on('click', event =>{
                event.preventDefault();
                console.log('user signup');
                socket.emit('user_signup', {
                        username: $('input[name=name]').val(),
                        login: $('input[name=login]').val(),
                        password: $('input[name=password]').val(),
                        correct_password: $('input[name=pasword_correct]').val(),
                });
        })
});