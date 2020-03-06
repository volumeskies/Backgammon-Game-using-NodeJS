export class Notifications {
    constructor(){
    }
    
    error(message_){
        let popup = document.createElement('div');
        popup.className = 'popup__error';
        popup.innerHTML = `<span>${message_}</span>`;
        let container = [...document.getElementsByClassName('notifications')];
        container[0].appendChild(popup);
        setTimeout(()=> {popup.remove();}, 7000);
    }
    success(message_){
        console.log(message_)
        let popup = document.createElement('div');
        popup.className = 'popup__success';
        popup.innerHTML = `<span>${message_}</span>`;
        let container = [...document.getElementsByClassName('notifications')];
        container[0].appendChild(popup);
        setTimeout(()=> {popup.remove();}, 7000);
    }
}
export let Notify = new Notifications();