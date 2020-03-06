import { Notify } from './notifications.js';
export class Validation {
    constructor(){
        this.login = true;
        this.password = true;
        this.confirm_password = true;
        this.username = true;
    }
    
    resetFields(){
        let fields = [...document.getElementsByTagName('input')];
        fields.forEach((elem)=>{elem.style.border = 0});
    }

    highlightFields(){
        if(!this.login){
            let field = [...document.getElementsByName('login')];
            field[0].style.border = '2px solid rgb(228, 143, 152)';
        }
        if(!this.password){
            let field = [...document.getElementsByName('password')];
            field[0].style.border = '2px solid rgb(228, 143, 152)';
        }
        if(!this.confirm_password){
            let field = [...document.getElementsByName('password_correct')];
            field[0].style.border = '2px solid rgb(228, 143, 152)';
        }
        if(!this.username){
            let field = [...document.getElementsByName('name')];
            field[0].style.border = '2px solid rgb(228, 143, 152)';
        }
    }

    validation(login_, password_){
        this.loginValidation(login_);
        this.passwordValidation(password_);
        this.resetFields();
        this.highlightFields();
        return (this.login && this.password);
    }

    registerValidation(login_, password_, confirm_, username_){
        this.loginValidation(login_);
        this.passwordValidation(password_);
        this.userNameValidation(username_);
        this.confirmPasswordValidation(password_, confirm_);
        this.resetFields();
        this.highlightFields();
        return (this.login && this.password && this.username && this.confirm);
    }

    loginValidation(login_){
        if(login_.length > 255){
            Notify.error('Слишком длинный логин!');
            this.login = false;
            return;
        }
        if(login_ === ''){
            Notify.error('Введите логин!');
            this.login = false;
            return;
        }
        this.login = true;
    }

    passwordValidation(password_){
        if(password_.length > 255){
            Notify.error('Слишком длинный пароль!');
            this.password = false;
            return;
        }
        if(password_ === ''){
            Notify.error('Введите пароль!');
            this.password = false;
            return;
        }
        this.password = true;
    }

    userNameValidation(username_){
        if(username_.length > 255){
            Notify.error('Слишком длинное имя пользователя!');
            this.username = false;
            return;
        }
        if(username_ === ''){
            Notify.error('Введите имя пользователя!');
            this.username = false;
            return;
        }
        this.username = true;
    }

    confirmPasswordValidation(password_, confirm_){
        if(confirm_ === ''){
            Notify.error('Подтвердите пароль!');
            this.confirm = false;
            return;
        }
        if(password_ !== confirm_)
        {
            Notify.error('Пароли не совпадают!');
            this.confirm = false;
            return;
        }
        this.password = true;
        this.confirm_password = true;
    }

}
export let validate = new Validation();