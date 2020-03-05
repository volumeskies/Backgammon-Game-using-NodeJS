var points_top = [].slice.call(document.getElementById('points_top').children);
var points_bottom = [].slice.call(document.getElementById('points_bottom').children).reverse();
var points = points_bottom.concat(points_top);
console.log(points);

checkers = [];

checker = {
    current_point: 1,
    id_player: 1
}

for(let i = 0; i < 2; i++){
    var checker = document.createElement('div');
    checker.className = "checker-black";
    points[0].append(checker);
}

for(let i = 0; i < 5; i++){
    var checker = document.createElement('div');
    checker.className = "checker-black";
    points[11].append(checker);
}

for(let i = 0; i < 3; i++){
    var checker = document.createElement('div');
    checker.className = "checker-black";
    points[16].append(checker);
}

for(let i = 0; i < 5; i++){
    var checker = document.createElement('div');
    checker.className = "checker-black";
    points[18].append(checker);
}

for(let i = 0; i < 2; i++){
    var checker = document.createElement('div');
    checker.className = "checker-white";
    points[23].append(checker);
}

for(let i = 0; i < 5; i++){
    var checker = document.createElement('div');
    checker.className = "checker-white";
    points[5].append(checker);
}

for(let i = 0; i < 3; i++){
    var checker = document.createElement('div');
    checker.className = "checker-white";
    points[7].append(checker);
}

for(let i = 0; i < 5; i++){
    var checker = document.createElement('div');
    checker.className = "checker-white";
    points[12].append(checker);
}


function show_available_moves(from, dice_1, dice_2){
    if(con.query("CALL IS_POINT_FREE(?, ?)", [from, dice_1], ()=>{}));
    //highlight
    if(con.query("CALL IS_POINT_FREE(?, ?)", [from, dice_2], ()=>{}));
    //highlight
    if(con.query("CALL IS_MULTIPOINT_FREE(?, ?)", [from, dice_1 + dice_2], ()=>{}));
    //highlight
}
