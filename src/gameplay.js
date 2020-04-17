import { Notify } from './notifications.js';
var socket = io.connect();
const pointsTop = [...document.getElementById('points_top').children];
const pointsBottom = [...document.getElementById('points_bottom').children].reverse();
const points = pointsBottom.concat(pointsTop);
let currDices=[];
let room = window.location.pathname.slice(6);
const currChecker = {
    pointNumber: 0,
    checkerCount: 0
}
socket.on('connect', ()=>{
    socket.emit('gamestate', {room: room})
});

socket.on('game_state', data=>{
    socket.emit('getGameState', {room: room});
})

socket.on('getNames', data=>{
    socket.emit('get_usernames', {room: room});
})

let username1 = {};
let username2 = {};

socket.on('usernames', data=>{
    socket.emit('user_names', {room: room});
})

socket.on('set_username', data=>{
    username1.login = data.first_login;
    username2.login = data.second_login;
    username1.name = data.first_name;
    username2.name = data.second_name;
    console.log(username1, username2);
    let firstname = [...document.getElementsByClassName('first__name')];
    firstname[0].textContent = `${username1.name}`;
    let secondname = [...document.getElementsByClassName('second__name')];
    secondname[0].textContent = `${username2.name}`;
})

let user1={
    id: 0,
    login: '',
    color: '',
    points: {}
}
let user2={
    id: 0,
    login: '',
    color: '',
    points: {}
}

let currUser = {
    login: '',
}

socket.on('set_values', data=>{
    console.log(data.data);
    currUser.login = data.login;
    user1.id = data.data[0].id_player;
    user1.login = data.data[0].login;
    user1.points = data.data.reduce((acc, curr)=>{
        if(curr.id_player == user1.id){
            acc[curr.point_number] = curr.checkers_count;
            }
            return acc;
        }, {})
    user1.color = data.data[0].color;
    user2.id = data.data[data.data.length - 1].id_player;
    user2.color = data.data[data.data.length - 1].color;
    user2.login = data.data[data.data.length - 1].login;
    user2.points = data.data.reduce((acc, curr)=>{
        if(curr.id_player == user2.id){
            acc[curr.point_number] = curr.checkers_count;
            }
            return acc;
        }, {})
    console.log(currUser);
})

function insertChecker(checkerClassName){
    let checker = document.createElement('div');
    checker.className = checkerClassName;
    return checker;
}

function fillTheBoard(){
    console.log(user1);
    console.log(user2);
    let className1 = user1.color == 'w'?'checker-white checker':'checker-black checker';
    let className2 = user2.color == 'w'?'checker-white checker':'checker-black checker';

    console.log(user1.points);
    for(let key in user1.points){
        console.log('key:', key);
        for(let i = 0; i < user1.points[key]; i++){
            console.log('points key:', points[key])
            points[key - 1].append(insertChecker(className1));
        }
    }
    for(let key in user2.points){
        console.log('key:', key);
        for(let i = 0; i < user2.points[key]; i++){
            console.log('points key:', points[key])
            points[key - 1].append(insertChecker(className2));
        }
    }

}

function parsePointsId(pointId){
    switch(pointId){
        case 'one':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
        case 'ten':
            return 10;
        case 'eleven':
            return 11;
        case 'twelve':
            return 12;
        case 'thirteen':
            return 13;
        case 'fourteen':
            return 14;
        case 'fifteen':
            return 15;
        case 'sixteen':
            return 16;
        case 'seventeen':
            return 17;
        case 'eightteen':
            return 18;
        case 'nineteen':
            return 19;
        case 'twenty':
            return 20;
        case 'twentyone':
            return 21;
        case 'twentytwo':
            return 22;
        case 'twentythree':
            return 23;
        case 'twentyfour':
            return 24;
    }
}

function highlightLast(pointNumber){
    let direction = pointNumber > 11 ? 'top' : 'bottom';
    if(direction == 'top'){
        if(points[pointNumber].childNodes.length > 1)
            points[pointNumber].lastChild.className += ' checker-move';
        else
            return;
    }
    if(direction == 'bottom'){
        if(points[pointNumber].childNodes.length > 1)
            points[pointNumber].firstChild.className += ' checker-move';
        else
            return;
    }
}

function highlightMoves(...args){
    console.log(args);
    for(let i = 0; i < args.length; i++){
        let pointNumber = args[i];
        console.log(pointNumber);
        if(!pointNumber || !points[pointNumber]) continue;
        if(points[pointNumber].childNodes[0] != undefined){
            if(points[pointNumber].childNodes[0].className.includes('checker-move'))
                return;
            highlightLast(pointNumber);
            return;
        }
        console.log(pointNumber);
        points[pointNumber].append(insertChecker('checker-move'))};
}

function showAvMovesDatabase(from, dices){
    from = parsePointsId(from);
    console.log(from);
    console.log(dices);
    socket.emit('free_points', {
        login: currUser.login,
        from: from,
        dice_1: dices[0],
        dice_2: dices[1]
    });
    socket.on('show_freePoints', data=>{
        console.log(data);
        for(let key in data){
            if(key == undefined)
                key = 0;
        }
        highlightMoves(data.i, data.point_1, data.point_2);
    })
    /*socket.on('check_answer', data =>{
        parseCheckAnswer(data, from + dicesObj.first, from + dicesObj.second);
    })*/
}

function getOpenCheckers(){
    console.log(points)
    let color = user1.login == currUser.login?user1.color:user2.color;
    console.log(color);
    let checkers = [];
    if(color == 'w'){
        for(let elem of points){
            if(elem.className == 'points-bottom' && elem.childElementCount != 0){
                if(elem.firstChild.className.includes('checker-white'))
                    checkers.push(elem.firstChild);
            }
            if(elem.className == 'points-top' && elem.childElementCount != 0){
                if(elem.lastChild.className.includes('checker-white'))
                    checkers.push(elem.lastChild);
            }
        }
    }
    else if(color == 'b'){
        for(let elem of points){
            if(elem.className == 'points-bottom' && elem.childElementCount != 0){
                if(elem.firstChild.className.includes('checker-black'))
                    checkers.push(elem.firstChild);
            }
            if(elem.className == 'points-top' && elem.childElementCount != 0){
                if(elem.lastChild.className.includes('checker-black'))
                    checkers.push(elem.lastChild);
            }
        }
    }
    
    return checkers;
}

function unclickElements(checkers){
    points.forEach(point =>{
        let childrenArray = [...point.childNodes];
        for(let child of childrenArray){
            console.log(child);
            if(child.className.includes('checker-move') && (child.nextSibling || child.previousSibling))
                child.className = child.className.replace(/\bchecker-move\b/ig, '');
            else
            if(child.className.includes('checker-move'))
                point.removeChild(child);
            continue;
        }
    }) 
    for(let elem of checkers){
        elem.className = elem.className.replace(/\bchecker-clicked\b/ig, '');
    }
}

function showAvailableMoves(){
    console.log('dices:', currDices);
    let openCheckers = getOpenCheckers();
    for(let elem of openCheckers){
        elem.addEventListener('mouseover', ()=>{
            event.preventDefault();
            elem.className += ' checker-hover'
        })
        elem.addEventListener('mouseout', ()=>{
            event.preventDefault();
            elem.className = elem.className.replace(/\bchecker-hover\b/ig, '');
        })
        elem.addEventListener('click', ()=>{
            if(elem.className.match(/\bchecker-clicked\b/ig)){
                elem.className = elem.className.replace(/\bchecker-clicked\b/ig, '');
                unclickElements(checkers);
                return;
            }
            if(elem.className.match(/\bchecker-move\b/ig)){
                unclickElements(checkers);
                event.preventDefault();
                elem.className += ' checker-clicked';
                //clickCheckerMove(currChecker.pointFrom);
                return;
            }
            unclickElements(checkers);
            event.preventDefault();      
            elem.className += ' checker-clicked';
            currChecker.pointFrom = elem.parentNode.id;
            showAvMovesDatabase(currChecker.pointFrom, currDices);
        })
    }
}

function drawRolledDices(rolledDices){
    let container = [...document.getElementsByClassName('dices')];
    let firstplayer = [...document.getElementsByClassName('first__player')];
    let secondplayer = [...document.getElementsByClassName('second__player')];
    let firstButton = [...document.getElementsByClassName('first__button')][0];
    let secondButton = [...document.getElementsByClassName('second__button')][0];
    let currentContainer = 0;
    if(container[0].firstElementChild.textContent == username1.name && currUser.login == username1.login){
        firstplayer[0].className += ' roll';
        currentContainer = firstplayer;
        firstButton.className = firstButton.className.replace(/\bhide\b/ig, '');
    }
    else{
        if(container[1].firstElementChild.textContent == username2.name && currUser.login == username2.login){
            secondplayer[0].className += ' roll';
            currentContainer = secondplayer;
            secondButton.className = secondButton.className.replace(/\bhide\b/ig, '');
        }
    }
    for(let elem of rolledDices){
        let image = document.createElement('img');
        console.log(elem)
        switch(elem){
            case 1:
                image.src = '../images/one.png';
                currentContainer[0].appendChild(image);
                break;
            case 2:
                image.src = '../images/two.png';
                currentContainer[0].appendChild(image);
                break;
            case 3:
                image.src = '../images/three.png';
                currentContainer[0].appendChild(image);
                break;
            case 4:
                image.src = '../images/four.png';
                currentContainer[0].appendChild(image);
                break;
            case 5:
                image.src = '../images/five.png';
                currentContainer[0].appendChild(image);
                break;
            case 6:
                image.src = '../images/six.png';
                currentContainer[0].appendChild(image);
                break;
        }
    }
}

function clearDiceContainer(container){
    let children = [...container.childNodes];
    console.log(children);
    for(let child of children){
        if(child.tagName == 'H2')
            continue;
        container.removeChild(child);
        console.log(container)
    }
}

let error = 0;

function rollTheDices(){
    let container = [...document.getElementsByClassName('roll')];
    const eventCallback = (event)=>{
        event.preventDefault();
        socket.emit('roll', {login: currUser.login});
    }
    for(let elem of container){
        elem.addEventListener('click', eventCallback);
        socket.on('rollvalues', data=>{
            currDices = [data.dice_1, data.dice_2];
            console.log(currDices);
            clearDiceContainer(elem);
            drawRolledDices(currDices);
            showAvailableMoves();
        })
        socket.on('notturn', data=>{
            Notify.error('Не Ваш ход!');
        })
        socket.on('twice', data=>{
            Notify.error('Вы уже кидали кубики!');
            error = 5;
        })
    }
    if(error == 5){
        for(let elem of container){
            elem.removeEventListener('click', eventCallback);
        }
        error = 0;
    }
    
    
}

let checkers = '';
setTimeout(()=>{
    fillTheBoard();
    drawRolledDices([1,1]);
    rollTheDices();
    checkers = [...document.getElementsByClassName('checker')];
}
, 1000);
