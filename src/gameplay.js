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

let prevOpenCheckers=[];
socket.on('connect', ()=>{
    socket.emit('gamestate', {room: room})
});

socket.on('unavailable', ()=>{
    Notify.error('Так сходить нельзя!');
})

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

socket.on('reload', data=>{
    document.location.reload(true);
})

socket.on('win', data=>{
    Notify.success('Вы выиграли! :)');
})

socket.on('lose', data=>{
    Notify.error('Вы проиграли :(');
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
    color: '',
}

let currMove = {
    from: 0,
    to: 0,
    multipoint: 0,
    count: 0
}

let currTo = {
    to: 0,
    multi: 0,
    className: ''
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
    currUser.color = user1.login == currUser.login? user1.color : user2.color;
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
        let flag = false;
        let k = 0;
        for(let i = 0; i < user1.points[key]; i++){
            if(i > 4){
                k = i;
                flag = true;
                break;
            }
            console.log('points key:', points[key - 1])
            points[key - 1].append(insertChecker(className1));
        }
        if(flag){
            let tmp = user1.points[key] - k;
            tmp = tmp == 1?2:tmp;
            if(key > 13){
                points[key - 1].lastChild.textContent = `${tmp}`;
            }
            else{
                points[key - 1].firstChild.textContent = `${tmp}`;
            }
        }
    }
    for(let key in user2.points){
        console.log('key:', key);
        let flag = false;
        let k = 0;
        for(let i = 0; i < user2.points[key]; i++){
            if(i > 4){
                k = i;
                flag = true;
                break;
            }
            console.log('points key:', points[key])
            points[key - 1].append(insertChecker(className2));
        }
        if(flag){
            let tmp = user1.points[key] - k;
            tmp = tmp == 1?2:tmp;
            if(key > 13){
                points[key - 1].lastChild.textContent = `${tmp}`;
            }
            else{
                points[key - 1].firstChild.textContent = `${tmp}`;
            }
        }
    }
    for(let i = 0; i < points.length; i++){
        if(i > 12){
            if(points[i - 1].childNodes[0] != undefined)
                points[i - 1].lastChild.className += ' rotate';
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

function placeLastCheckerTop(from, to, multi){
    let pace = Math.abs(from - to);
    console.log('pace', pace);
    if(currMove.count == 2){
        unclickElements(checkers);
        return;
    }
    if(to == multi){
        unclickElements(checkers);
        currDices = [0, 0];
        currMove.count = 2;
    }
    points[to - 1].lastChild.className = points[to - 1].lastChild.className.replace(/\bchecker-move\b/, '');
    if(from > 13){
        let count = points[from - 1].lastChild.textContent;
        if(!count)
            points[from - 1].removeChild(points[from - 1].lastChild);
        if(count == 2)
            points[from - 1].lastChild.textContent = '';
        if(count > 2)
            points[from - 1].lastChild.textContent = count - 1;
    }
    else{
        let count = points[from - 1].firstChild.textContent;
        if(!count)
            points[from - 1].removeChild(points[from - 1].firstChild);
        if(count == 2)
            points[from - 1].firstChild.textContent = '';
        if(count > 2)
            points[from - 1].firstChild.textContent = count - 1;
    }
    let className = currUser.color == 'w'?'checker-white':'checker-black';
    let count = points[to - 1].lastChild.textContent;
    if(!count)
        points[to - 1].lastChild.textContent = `${2}`;
    else
        points[to - 1].lastChild.textContent = `${++count}`;
    points[to - 1].lastChild.style.transform = 'rotate(-90deg);'
    currMove.multi = (multi-1) == to? multi : 0;
    currMove.from = from;
    currMove.to = to;
    currMove.count++;
    for(let i = 0; i < currDices.length; i++){
        if(currDices[i] == pace){
            currDices[i] = 0;
            break;
        }  
    }
    console.log('place checker dices', currDices);
    unclickElements(checkers);
    console.log('currMove:', currMove);
    socket.emit('makemove', {login: currUser.login, from: from, to: to});
    removeListeners();
    showAvailableMoves();
}

function placeCheckerTop(from, to, multi){
    console.log('top from, to, multi:', from, to, multi);
    let pace = Math.abs(from - to);
    console.log('pace', pace);
    if(currMove.count == 2){
        unclickElements(checkers);
        return;
    }
    if(to == multi){
        unclickElements(checkers);
        currDices = [0, 0];
        currMove.count = 2;
    }
    points[to - 1].removeChild(points[to - 1].lastChild);
    if(from > 13){
        let count = points[from - 1].lastChild.textContent;
        if(!count)
            points[from - 1].removeChild(points[from - 1].lastChild);
        if(count == 2)
            points[from - 1].lastChild.textContent = '';
        if(count > 2)
            points[from - 1].lastChild.textContent = count - 1;
    }
    else{
        let count = points[from - 1].firstChild.textContent;
        if(!count)
            points[from - 1].removeChild(points[from - 1].firstChild);
        if(count == 2)
            points[from - 1].firstChild.textContent = '';
        if(count > 2)
            points[from - 1].firstChild.textContent = count - 1;
    }
    let className = currUser.color == 'w'?'checker-white':'checker-black';
    points[to - 1].append(insertChecker(className));
    currMove.multi = (multi-1) == to? multi : 0;
    currMove.from = from;
    currMove.to = to;
    currMove.count++;
    for(let i = 0; i < currDices.length; i++){
        if(currDices[i] == pace){
            currDices[i] = 0;
            break;
        }  
    }
    console.log('place checker dices', currDices);
    unclickElements(checkers);
    console.log('currMove:', currMove);
    socket.emit('makemove', {login: currUser.login, from: from, to: to});
    removeListeners();
    showAvailableMoves();
}

function placeCheckerBottom(from, to, multi){
    console.log('bottom from, to, multi:', from, to, multi);
    let pace = Math.abs(from - to);
    console.log('pace', pace);
    if(currMove.count == 2){
        unclickElements(checkers);
        return;
    }
    if(to == multi){
        unclickElements(checkers);
        currDices = [0, 0];
        currMove.count = 2;
    }
    points[to - 1].removeChild(points[to - 1].firstChild);
    if(from > 13){
        let count = points[from - 1].lastChild.textContent;
        if(!count)
            points[from - 1].removeChild(points[from - 1].lastChild);
        if(count == 2)
            points[from - 1].lastChild.textContent = '';
        if(count > 2)
            points[from - 1].lastChild.textContent = count - 1;
    }
    else{
        let count = points[from - 1].firstChild.textContent;
        if(!count)
            points[from - 1].removeChild(points[from - 1].firstChild);
        if(count == 2)
            points[from - 1].firstChild.textContent = '';
        if(count > 2)
            points[from - 1].firstChild.textContent = count - 1;
    }
    let className = currUser.color == 'w'?'checker-white':'checker-black';
    points[to - 1].prepend(insertChecker(className));
    currMove.multi = (multi-1) == to? multi : 0;
    currMove.from = from;
    currMove.to = to;
    currMove.count++;
    for(let i = 0; i < currDices.length; i++){
        if(currDices[i] == pace){
            currDices[i] = 0;
            break;
        }  
    }
    console.log('place checker dices', currDices);
    unclickElements(checkers);
    console.log('currMove:', currMove);
    socket.emit('makemove', {login: currUser.login, from: from, to: to});
    removeListeners();
    showAvailableMoves();
}

function placeLastCheckerBottom(from, to, multi){
    console.log('placekdjklfd', from, to, multi);
    let pace = Math.abs(from - to);
    console.log('pace', pace);
    if(currMove.count == 2){
        unclickElements(checkers);
        return;
    }
    if(to == multi){
        unclickElements(checkers);
        currDices = [0, 0];
        currMove.count = 2;
    }
    points[to - 1].firstChild.className = points[to - 1].firstChild.className.replace(/\bchecker-move\b/, '');
    if(from > 13){
        let count = points[from - 1].lastChild.textContent;
        if(!count)
            points[from - 1].removeChild(points[from - 1].lastChild);
        if(count == 2)
            points[from - 1].lastChild.textContent = '';
        if(count > 2)
            points[from - 1].lastChild.textContent = count - 1;
    }
    else{
        let count = points[from - 1].firstChild.textContent;
        if(!count)
            points[from - 1].removeChild(points[from - 1].firstChild);
        if(count == 2)
            points[from - 1].firstChild.textContent = '';
        if(count > 2)
            points[from - 1].firstChild.textContent = count - 1;
    }
    let className = currUser.color == 'w'?'checker-white':'checker-black';
    let count = points[to - 1].firstChild.textContent;
    if(!count)
        points[to - 1].firstChild.textContent = `${2}`;
    else
        points[to - 1].firstChild.textContent = `${++count}`;
    currMove.multi = (multi-1) == to? multi : 0;
    currMove.from = from;
    currMove.to = to;
    currMove.count++;
    for(let i = 0; i < currDices.length; i++){
        if(currDices[i] == pace){
            currDices[i] = 0;
            break;
        }  
    }
    console.log('place checker dices', currDices);
    unclickElements(checkers);
    console.log('currMove:', currMove);
    socket.emit('makemove', {login: currUser.login, from: from, to: to});
    removeListeners();
    showAvailableMoves();
}

function eventPlaceLastCheckerTop(){
    event.preventDefault();
    placeLastCheckerTop(currChecker.pointNumber, currTo.to + 1, currTo.multi);
    console.log('yes', pointNumber);
}

function eventPlaceCheckerTop(){
    event.preventDefault();
    this.className.replace(/\bchecker-move\b/ig, currTo.className);
    placeCheckerTop(currChecker.pointNumber, currTo.to + 1, currTo.multi)
    console.log('yes', pointNumber);
}

function eventPlaceLastCheckerBottom(){
    event.preventDefault();
    placeLastCheckerBottom(currChecker.pointNumber, currTo.to + 1, currTo.multi);
    console.log('skdsjdklsdjlkssd', pointNumber)
    console.log(pointNumber);
}

function eventPlaceCheckerBottom(){
    event.preventDefault();
    this.className.replace(/\bchecker-move\b/ig, currTo.className);
    placeCheckerBottom(currChecker.pointNumber, currTo.to + 1, currTo.multi)
    console.log('skdsd', pointNumber)
    console.log(pointNumber);
}

function highlightLast(pointNumber, multi){
    let direction = pointNumber > 12 ? 'top' : 'bottom';
    console.log('highlightlast')
    let className = currUser.color == 'w'?'checker-white':'checker-black';
    currTo.className = className;
    if(direction == 'top'){
        if(points[pointNumber].childNodes.length == 5){
            console.log('top equal 4', pointNumber);
            points[pointNumber].lastChild.className += ' checker-move';
            currTo.to = pointNumber;
            currTo.multi = multi;
            points[pointNumber].lastChild.addEventListener('click', eventPlaceLastCheckerTop, true);
        }  
        else
        if(points[pointNumber].childNodes.length < 5){
            console.log('top less 4', pointNumber);
            currTo.to = pointNumber;
            currTo.multi = multi;
            points[pointNumber].appendChild(insertChecker('checker-move'));
            points[pointNumber].lastChild.addEventListener('click', eventPlaceCheckerTop, true);
        }
            return;
    }
    if(direction == 'bottom'){
        if(points[pointNumber].childNodes.length == 5){
            console.log('bottom equal 4', pointNumber);
            points[pointNumber].firstChild.className += ' checker-move';
            currTo.to = pointNumber;
            currTo.multi = multi;
            points[pointNumber].firstChild.addEventListener('click', eventPlaceLastCheckerBottom, true);
        }    
        else if(points[pointNumber].childNodes.length < 5){
            console.log('bottom less 4', pointNumber);
            points[pointNumber].prepend(insertChecker('checker-move'));
            currTo.to = pointNumber;
            currTo.multi = multi;
            points[pointNumber].firstChild.addEventListener('click', eventPlaceCheckerBottom, true);
        }
            return;
    }
}

function removeListeners(){
    for(let elem of prevOpenCheckers){
        elem.removeEventListener('mouseover', mouseOver, true);
        elem.removeEventListener('mouseout', mouseOut, true);
        elem.removeEventListener('click', clickElem, true);
        elem.removeEventListener('click', eventPlaceLastCheckerTop, true);
        elem.removeEventListener('click', eventPlaceCheckerTop, true);
        elem.removeEventListener('click', eventPlaceLastCheckerBottom, true);
        elem.removeEventListener('click', eventPlaceCheckerBottom, true);
    }
}

function placeChecker(from, to, multi){
    console.log('from, to, multi: ', from, to, multi);
    console.log('currMove count:', currMove.count);
    let pace = Math.abs(from - to);
    console.log('pace', pace);
    if(currMove.count == 2){
        unclickElements(checkers);
        return;
    }
    if(to > 13)
        points[to - 1].removeChild(points[to - 1].lastChild);
    else
        points[to - 1].removeChild(points[to - 1].firstChild);
    if(from > 13){
        if(to == multi){
            unclickElements(checkers);
            currDices = [0, 0];
            currMove.count = 2;
        }
        let count = points[from - 1].lastChild.textContent;
        if(!count)
            points[from - 1].removeChild(points[from - 1].lastChild);
        if(count == 2)
            points[from - 1].lastChild.textContent = '';
        if(count > 2)
            points[from - 1].lastChild.textContent = count - 1;
    }
    else{
        if(to == multi){
            unclickElements(checkers);
            currDices = [0, 0];
        }
        let count = points[from - 1].firstChild.textContent;
        if(!count)
            points[from - 1].removeChild(points[from - 1].firstChild);
        if(count == 2)
            points[from - 1].firstChild.textContent = '';
        if(count > 2)
            points[from - 1].firstChild.textContent = count - 1;
    }
    let className = currUser.color == 'w'?'checker-white':'checker-black';
    points[to - 1].appendChild(insertChecker(className));
    currMove.multi = (multi-1) == to? multi : 0;
    currMove.from = from;
    currMove.to = to;
    currMove.count++;
    for(let i = 0; i < currDices.length; i++){
        if(currDices[i] == pace){
            currDices[i] = 0;
            break;
        }  
    }
    console.log('place checker dices', currDices);
    unclickElements(checkers);
    console.log('currMove:', currMove);
    socket.emit('makemove', {login: currUser.login, from: from, to: to});
    removeListeners();
    showAvailableMoves();
}

function insertHighlightChecker(checkerClassName, pointNumber, multi){
    let checker = document.createElement('div');
    checker.className = checkerClassName;
    checker.addEventListener('click', (event)=>{
        event.preventDefault();
        //current points[pointNumber];
        console.log('insert highlight:', currChecker.pointNumber, pointNumber);
        placeChecker(currChecker.pointNumber, pointNumber, multi);
    })
    return checker;
}

function highlightMoves(...args){
    console.log(args);
    let multi = args[0]; 
    let flag = false;
    for(let i = 0; i < args.length; i++){
        let pointNumber = args[i];
        console.log(pointNumber);
        if(!pointNumber || !points[pointNumber]) continue;
        if(points[pointNumber - 1].childNodes[0] != undefined){
            if(points[pointNumber - 1].childNodes[0].className.includes('checker-move')){
                console.log('here');
                continue;
            }
            console.log('ooooor here');
            highlightLast(pointNumber - 1, multi);
            continue;
        }
        console.log('highlightMoves currchecker ', currChecker.pointNumber);
        points[pointNumber - 1].append(insertHighlightChecker('checker-move', pointNumber, multi))
    };
}

function showAvMovesDatabase(from, dices){
    console.log(from);
    console.log('dices database', dices);
    currChecker.pointNumber = from;
    console.log('database', currChecker.pointNumber)
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
        highlightMoves(data.multipoint, data.point_1, data.point_2);
    })
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

function mouseOver(){
    if(currMove.count == 2) return;
    event.preventDefault();
    this.className += ' checker-hover'
}

function mouseOut(){
    if(currMove.count == 2) return;
    event.preventDefault();
    this.className = this.className.replace(/\bchecker-hover\b/ig, '');
}

function clickElem(){
    if(currMove.count == 2) return;
    if(this.className.match(/\bchecker-move\b/ig)){
        this.className = this.className.replace(/\bchecker-move\b/ig, '');
        unclickElements(checkers);
        event.preventDefault();
        return;
    }
    if(this.className.match(/\bchecker-clicked\b/ig)){
        this.className = this.className.replace(/\bchecker-clicked\b/ig, '');
        unclickElements(checkers);
        return;
    }
    unclickElements(checkers);
    event.preventDefault();      
    this.className += ' checker-clicked';
    currChecker.pointFrom = parsePointsId(this.parentNode.id);
    console.log(this.parentNode.id);
    console.log('showavmoves', currChecker.pointFrom)
    showAvMovesDatabase(currChecker.pointFrom, currDices);
}

function showAvailableMoves(){
    console.log('dices:', currDices);
    if(currMove.count == 2) return;
    let openCheckers = getOpenCheckers();
    prevOpenCheckers = openCheckers;
    console.log(openCheckers);
    for(let elem of openCheckers){
        elem.addEventListener('mouseover', mouseOver, true);
        elem.addEventListener('mouseout', mouseOut, true);
        elem.addEventListener('click', clickElem, true);
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
        firstButton.addEventListener('click', ()=>{
            event.preventDefault();
            if(currMove.count != 2) return;
            console.log('firstbutton');
            socket.emit('checkwinner', {id_game: room, login: currUser.login});
        })
    }
    else{
        if(container[1].firstElementChild.textContent == username2.name && currUser.login == username2.login){
            secondplayer[0].className += ' roll';
            currentContainer = secondplayer;
            secondButton.className = secondButton.className.replace(/\bhide\b/ig, '');
            secondButton.addEventListener('click', ()=>{
                event.preventDefault();
                if(currMove.count != 2) return;
                console.log('secondbutton');
                socket.emit('checkwinner', {id_game: room, login: currUser.login});
            })
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
