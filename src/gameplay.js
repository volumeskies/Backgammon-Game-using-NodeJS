var socket = io.connect();
const pointsTop = [...document.getElementById('points_top').children];
const pointsBottom = [...document.getElementById('points_bottom').children].reverse();
const points = pointsBottom.concat(pointsTop);
const dicesObj = {
    first: 0,
    second: 0
}
let room = window.location.pathname.slice(6);
console.log(room);
function insertChecker(checkerClassName){
    let checker = document.createElement('div');
    checker.className = checkerClassName;
    return checker;
}

function fillTheBoard(){
    for(let i = 0; i < 2; i++){
        points[0].append(insertChecker('checker-black checker'));
        points[23].append(insertChecker('checker-white checker'));
    }
    for(let i = 0; i < 5; i++){
        points[11].append(insertChecker('checker-black checker'));
        points[18].append(insertChecker('checker-black checker'));
        points[5].append(insertChecker('checker-white checker'));
        points[12].append(insertChecker('checker-white checker'));
    }
    for(let i = 0; i < 3; i++){
        points[16].append(insertChecker('checker-black checker'));
        points[7].append(insertChecker('checker-white checker'));
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

function highlightMoves(pointNumber){
    console.log('point number:', pointNumber);
    points[pointNumber - 1].append(insertChecker('checker-move'));
}

function parseCheckAnswer(answ, dice_1, dice_2){
    switch(answ){
        case 'd1no':
            break;
        case 'd1yes':
            highlightMoves(dice_1);
            break;
        case 'd2no':
            break;
        case 'd2yes':
            highlightMoves(dice_2);
            break;
        case 'd3no':
            break;
        case 'd3yes':
            highlightMoves(dice_1 + dice_2);
            break;
    }
}

function showAvMovesDatabase(from, dicesObj){
    from = parsePointsId(from);
    console.log(from);
    socket.emit('check_points', {
        from: from,
        dice_1: dicesObj.first,
        dice_2: dicesObj.second
    });
    socket.on('check_answer', data =>{
        parseCheckAnswer(data, from + dicesObj.first, from + dicesObj.second);
    })
}

function getOpenCheckers(){
    console.log(points)
    let checkers = [];
    for(let elem of points){
        if(elem.className == 'points-bottom' && elem.childElementCount != 0){
            checkers.push(elem.firstChild);
        }
        if(elem.className == 'points-top' && elem.childElementCount != 0){
            checkers.push(elem.lastChild);
        }
    }
    return checkers;
}

function showAvailableMoves(rolledDices){
    let checkers = getOpenCheckers();
    console.log('open checkers: ', checkers);
    for(let elem of checkers){
        elem.addEventListener('mouseover', ()=>{
            event.preventDefault();
            elem.className += ' checker-hover'
        })
        elem.addEventListener('mouseout', ()=>{
            event.preventDefault();
            elem.className = elem.className.replace(/\bchecker-hover\b/ig, '');
        })
        elem.addEventListener('click', ()=>{
            event.preventDefault();
            if(elem.className.match(/\bchecker-clicked\b/ig)){
                elem.className = elem.className.replace(/\bchecker-clicked\b/ig, '');
                return;
            }
            elem.className += ' checker-clicked'
            showAvMovesDatabase(elem.parentNode.id, rolledDices);
        })
    }
}

function randNumber(){
    let rand = 1 + Math.random() * 6;
    return Math.floor(rand);
}

function rollTheDicesArray(){
    for(let key in dicesObj){
        if(dicesObj.hasOwnProperty(key)){
            dicesObj[key] = randNumber();
        }
    }
    let dices = [dicesObj.first, dicesObj.second];
    console.log(dicesObj);
    return dices;
}

function drawRolledDices(rolledDices){
    let container = [...document.getElementsByClassName('dices')];
    console.log(container);
    for(let elem of rolledDices){
        let image = document.createElement('img');
        console.log(elem)
        switch(elem){
            case 1:
                image.src = './images/one.png';
                container[0].appendChild(image);
                break;
            case 2:
                image.src = './images/two.png';
                container[0].appendChild(image);
                break;
            case 3:
                image.src = './images/three.png';
                container[0].appendChild(image);
                break;
            case 4:
                image.src = './images/four.png';
                container[0].appendChild(image);
                break;
            case 5:
                image.src = './images/five.png';
                container[0].appendChild(image);
                break;
            case 6:
                image.src = './images/six.png';
                container[0].appendChild(image);
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

function rollTheDices(){
    let container = [...document.getElementsByClassName('dices')];
    for(let elem of container){
        elem.addEventListener('click', ()=>{
            event.preventDefault();
            let dices = rollTheDicesArray();
            clearDiceContainer(elem);
            drawRolledDices(dices);
        })
    }
}

fillTheBoard();
socket.emit('fill');
drawRolledDices(rollTheDicesArray());
rollTheDices();
showAvailableMoves(dicesObj);