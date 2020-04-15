export class ConfirmModal{
    constructor(){
        this.acceptButton = '';
        this.declineButton = '';
    }

    render(data){
        let modal = document.createElement('div');
        modal.className = 'elements modal';
        let container = [...document.getElementsByClassName('confirm')];
        container[0].className = container[0].className.replace(/\bhide\b/ig, '');
        container[0].appendChild(modal);
        modal.innerHTML = `<span>Приглашение в игру от: ${data.login_1}</span>`;
        let acceptButton = document.createElement('button');
        acceptButton.className = 'confirm__accept-button';
        acceptButton.textContent = 'Принять';
        let declineButton = document.createElement('button');
        declineButton.className = 'confirm__decline-button';
        declineButton.textContent = 'Отклонить';
        modal.appendChild(acceptButton);
        modal.appendChild(declineButton);
        this.acceptButton = acceptButton;
        this.declineButton = declineButton;
    }

    accept(callback){
        acceptButton.addEventListener('click', event=>{
            event.preventDefault();
            callback();
        })
    }

    decline(callback){
        declineButton.addEventListener('click', event=>{
            event.preventDefault();
            callback();
        })
    }
}

export let Confirm = new ConfirmModal(); 