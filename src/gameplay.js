const pointsTop = [...document.getElementById('points_top').children];
const pointsBottom = [...document.getElementById('points_bottom').children].reverse();
const points = pointsBottom.concat(pointsTop);

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

function showAvMovesDatabase(from, dice_1, dice_2){

    if(con.query("CALL IS_POINT_FREE(?, ?)", [from, dice_1], ()=>{}));
    //highlight
    if(con.query("CALL IS_POINT_FREE(?, ?)", [from, dice_2], ()=>{}));
    //highlight
    if(con.query("CALL IS_MULTIPOINT_FREE(?, ?)", [from, dice_1 + dice_2], ()=>{}));
    //highlight
}

function showAvailableMoves(node, rolledDices){
    node.addEventListener('click', () =>{
        showAvMovesDatabase(node.parentNode, rolledDices[0], rolledDices[1])
    })
}

function randNumber(){
    let rand = 1 + Math.random() * 6;
    return Math.floor(rand);
}

function rollTheDices(){
    let dices = [randNumber(), randNumber()];
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

fillTheBoard();
let checkers = [...document.getElementsByClassName('checker')];
console.log(checkers[0].parentNode);
let dices = rollTheDices();
console.log(dices);
drawRolledDices(dices);

let container = [...document.getElementsByClassName('dices')];
console.log(container);
for(let elem of container){
    elem.addEventListener('click', ()=>{
        event.preventDefault();
        dices = rollTheDices();
        clearDiceContainer(elem);
        drawRolledDices(dices);
    })
}

