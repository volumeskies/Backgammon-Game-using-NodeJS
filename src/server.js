const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();
const db = require('mysql');
const socket = require('socket.io');
const process = require('process');
const urlencodedParser = bodyParser.urlencoded({extended: false});
/* MYSQL CONNECTION*/
const con = db.createConnection({
	host: 'a0428363.xsph.ru',
	port: 3306,
	user: 'a0428363_3756',
	password: '3370',
	database: 'a0428363_backgammon',
});

con.connect(function(err){
	console.log('mysql connected');
	if(err) throw err;
})

/* APP */
var sessionMid = session({
	secret: "keyboard cat"
  });

app.use(sessionMid);

app.get("/", urlencodedParser, (req, res)=>{
	const index = path.join(__dirname, '../public', 'signin.html');
    res.sendFile(index);
});

app.get("/signup", urlencodedParser, (req, res)=>{
    const index = path.join(__dirname, '../public', 'signup.html');
    res.sendFile(index);
});

app.get("/invite", urlencodedParser, (req, res)=>{
    const index = path.join(__dirname, '../public', 'invite.html');
    res.sendFile(index);
});

app.get("/game/:room", urlencodedParser, (req, res)=>{
    const index = path.join(__dirname, '../public', 'game.html');
    res.sendFile(index);
});

app.post("/game", urlencodedParser, (req, res)=>{
	return res.redirect('/game');
});

app.post("/signin", urlencodedParser, (req, res)=>{
	return res.redirect('/');
});

app.use(express.static(path.join(__dirname, '../public')));

/* SERVER LISTENING */
const port = process.env.PORT || 8081;
const server = app.listen(port);

/* SOCKET.IO */
const io = socket(server);

io.use(function (socket, next) {
	sessionMid(socket.request, socket.request.res, next);
});

let users = {};

let rooms = [];

io.sockets.on('connection', function(socket){
	console.log("server connection");
	console.log(socket.request.session.id);
	console.log(socket.id);
	let user={
		login: '',
		socket: '',
		session: ''
	}
	if(users.hasOwnProperty(socket.request.session.id))
		users[socket.request.session.id].socket = socket.id;
	console.log(users);
	/* SIGN UP */
	socket.on('user_signup', data =>{
		console.log('user signup server');
		function register(data, callback){
			con.query('CALL REGISTER (?, ?, ?)', [data.login, data.password, data.username], function (error, result) {
				if (error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				if(res[0].FALSE){
					console.log('SIGN UP DENIED');//notification this login has already taken
					callback(false);
				}
				else if(res[0].TRUE){
					console.log('SUCCESSFUL SIGN UP'); // !SUCCESSFUL signup!
					callback(true);
				}
			  });
		}
		
		register(data, (val)=>{
			if(!val){
				io.emit('user_signup_notification', {val: false});
			}
			else{
				user.login = data.login;
				console.log(user.login);
				io.emit('user_signup_notification', {val: true});
				io.emit('redirect', '/invite');
			} 
		})

	});
	
	/* SIGN IN */
	socket.on('user_signin', data=>{
		console.log('user signin server');
		console.log(io.id);
		function login(data, callback){
			con.query('CALL LOGIN(?, ?)', [data.login, data.password], function (error, result) {
				if (error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				if(res[0].FALSE){
					console.log('SIGN IN DENIED');//no such login and password pair
					callback(false);
				}
				else if(res[0].TRUE){
					console.log('SUCCESSFUL SIGN IN'); // !SUCCESSFUL signin!
					callback(true);
				}
			  });
		}

		login(data, (val)=>{
			if(!val){
				socket.emit('user_signin_notification', {val: false});
			}
			else{
				user.login = data.login;
				user.socket = socket.id;
				user.session = socket.request.session.id;
				users[socket.request.session.id] = user;
				console.log(users);
				socket.emit('user_signin_notification', {val: true});
				socket.join('lobby');
				socket.join(`${socket.id}`);
				io.to('lobby').emit('redirect', '/invite');
			} 
		});
	});


	/* INVITE */
	socket.on('invite', data=>{
		console.log('data', data.login);
		if(!data.login)
			data.login = 0;
		function invite(data, callback){
			con.query('CALL INVITE(?, ?)', [data.login_1, data.login_2], function (error, result) {
				if (error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				console.log(res);
				if(res[0].ERRONE){
					console.log('ERROR! Inviting yourself');//notification this login has already taken
					callback(false);
				}
				if(res[0].ERRTWO){
					console.log('ERROR! User do not exist!');
					callback(false);
				}
				if(res[0].ERRTHREE){
					console.log('ERROR! Null is invited!');
					callback(false);
				}
				else if(res[0].TRUE){
					console.log('SUCCESS!');
					callback(true);
				}
			  });
		}

		let socketID = 0;
		let username = '';
		for(let key in users){
			console.log(key);
			console.log(users[key].login);
			console.log(users[key].socket);
			if(users[key].login === data.login)
				socketID = users[key].socket;
			if(users[key].socket === socket.id)
				username = users[key].login;
		}
		invite({login_1: username, login_2: data.login}, (val)=>{
			if(!val){
				console.log('NOOOO');
			}
			else{
				if(!socketID)
					console.log('ERROR! User is not connected');
			}
		});
		console.log(username);
		console.log('socketid:', socketID);
		io.to(`${socketID}`).emit('invitation', {login_1: username, login_2: data.login});
	})
	
	socket.on('confirmation', data=>{
		console.log('confirmation', data.login_1, data.login_2, data.confirmation);
		function confirmation(data, callback){
			con.query('CALL CONFIRM(?, ?, ?)', [data.login_1, data.login_2, data.confirmation], function (error, result) {
				if (error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				console.log(res);
				if(res[0].FALSE){
					console.log('ERROR! declined');
					callback(false);
				}
				else if(res[0].TRUE){
					console.log('SUCCESS!');
					callback(true);
				}
			  });
		}

		function getGameId(data, callback){
			con.query('CALL CREATE_GAME(?, ?)', [data.login_1, data.login_2], function(error, result){
				if(error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				console.log(res);
				if(res[0].g_id){
					console.log('Created game');
					callback(res[0].g_id);
				}
				else if(res[0].ERRONE){
					console.log('ERROR! same logins');
					callback(false);
				}
				else if(res[0].ERRTWO){
					console.log('ERROR! user not found');
					callback(false);
				}
			})
		}

		confirmation({login_1: data.login_1, login_2: data.login_2, confirmation: data.confirmation}, (val)=>{
			if(!val){
				console.log('DECLINED :(');
						let socketID = 0;
						for(let key in users){
							if(users[key].login === data.login_1)
								socketID = users[key].socket;
						}
						io.to(`${socketID}`).emit('decline', {username: data.login_2});
			}
			else{
					console.log('ACCEPTED! :)');
					let socket_1 = 0;
					let socket_2 = 0;
					for(let key in users){
						if(users[key].login === data.login_1)
							socket_1 = users[key].socket;
						if(users[key].login === data.login_2)
							socket_2 = users[key].socket;
					}
					getGameId({login_1: data.login_1, login_2: data.login_2}, (val)=>{
						if(!val){
							console.log('Can\'t create game');
						}
						else{
							console.log(users, socket_1, socket_2);
							io.sockets.connected[socket_1].join(`${val}`);
							io.sockets.connected[socket_2].join(`${val}`);
							io.to(`${val}`).emit('redirect', `game/${val}`);
						}
					})
				}
			});
				
		})
	

	socket.on('gamestate', data=>{
		let flag = false;
		for(let key in users){
			if(users[key].session === socket.request.session.id){
				socket.join(`${data.room}`);
			}
		}
		io.to(`${data.room}`).emit('game_state', {room: data.room})
	})

	socket.on('getGameState', data=>{
		console.log('sdjs');
		let login1 = '';
		let login2 = '';
		let sockets = Object.keys(io.sockets.adapter.rooms[`${data.room}`].sockets);
		console.log('sockets: ', sockets);
		for(let key in users){
			if(users[key].socket === sockets[0])
				login1 = users[key].login;
			if(users[key].socket === sockets[1])
				login2 = users[key].login;
		}
		console.log('logins:', login1, login2);

		function gameState(data, callback){
			con.query('CALL GAMESTATE(?, ?)', [data.login1, data.login2], function(error, result){
				if(error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				console.log(res);
				if(res[0].ERRONE){
					console.log('ERROR game do not exist');
					callback(false);
				}
				else{
					console.log('ok');
					callback([res[0].player_1, res[0].player_2, res[0].id_game, res[0].color_1, res[0].color_2]);
				}
			})
		}

		function getValues(data, callback){
			con.query('SELECT (SELECT login FROM users WHERE id_user = (SELECT id_user FROM players WHERE id_player = ?)) AS login, id_player, point_number, checkers_count, get_color(?, (SELECT id_game FROM players WHERE id_player = ?)) AS color FROM points WHERE id_player = ? UNION SELECT (SELECT login FROM users WHERE id_user = (SELECT id_user FROM players WHERE id_player = ?)) AS login, id_player, point_number, checkers_count, get_color(?, (SELECT id_game FROM players WHERE id_player = ?)) AS color FROM points WHERE id_player = ?', [data.player_1, data.player_1, data.player_1, data.player_1, data.player_2, data.player_2, data.player_2, data.player_2], function(error, result){
				if(error) throw error;
				console.log(result);
				callback(result);
			})
		}

		gameState({login1: login1, login2: login2}, (val)=>{
			if(!val){
				console.log('game do not exist')
			}
			else{
				console.log(val);
				socket.emit('getNames');
				let login = '';
				for(let key in users){
					if(users[key].socket === socket.id){
						login = users[key].login;
					}
				}
				getValues({player_1: val[0], player_2: val[1]}, (value)=>{
					socket.emit('set_values', {data: value, login: login});
				});
			}
		})
	})

	socket.on('get_usernames', data=>{
		console.log('this socket ', socket.id);
		console.log(data.room);
		io.to(`${data.room}`).emit('usernames', {room: data.room});
	});

	let names = [];
	socket.on('user_names', data=>{
		console.log('im here')
		let login1 = '';
		let login2 = '';
		let sockets = Object.keys(io.sockets.adapter.rooms[`${data.room}`].sockets);
		console.log('sockets: ', sockets);
		for(let key in users){
			if(users[key].socket === sockets[0])
				login1 = users[key].login;
			if(users[key].socket === sockets[1])
				login2 = users[key].login;
		}
		console.log('logins:', login1, login2);

		function getUserNames(data, callback){
			con.query('SELECT username, login FROM users WHERE id_user = get_id(?) OR id_user = get_id(?)', [data.login1, data.login2], function(error, res){
				if(error) throw error;
				console.log(res);
				callback([res[0].username, res[0].login, res[1].username, res[1].login]);
			})
		}

		getUserNames({login1: login1, login2: login2}, (val)=>{
			console.log(val);
			io.to(`${data.room}`).emit('set_username', {first_name: val[0], second_name: val[2], first_login: val[1], second_login: val[3]});
		})
	})

	/* GAME PROCCESS */
	socket.on('roll', data=>{
		function roll(data, callback){
			con.query('CALL ROLL(?, (SELECT password FROM users WHERE login = ?))', [data.login, data.login], function(error, result){
				if(error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				console.log(res);
				if(res[0].ERRONE){
					console.log('ERROR! Wrong password');
					callback(false);
				}
				else if(res[0].ERRTWO){
					console.log('ERROR! game do not exist');
					callback(false);
				}
				else if(res[0].ERRTHREE){
					console.log('ERROR! not your turn');
					callback(3);
				}
				else if(res[0].ERRFOUR){
					console.log('error youve played these values');
					callback(false);
				}
				else if(res[0].ERRFIVE){
					console.log('error rolled twice');
					callback(5);
				}
				else{
					console.log('rolled');
					callback([res[0]])
				}
			})
		}

		roll({login: data.login}, (val)=>{
			if(val == 3){
				console.log('not your turn!');
				socket.emit('notturn');
				return;
			}
			else if(val == 5){
				console.log('twice');
				socket.emit('twice');
				return;
			}
			else if(!val){
				console.log('error');
				return;
			}
			else{
				console.log(val);
				socket.emit('rollvalues', {dice_1: val[0].d1, dice_2: val[0].d2});
			}
		})
	})

	socket.on('free_points', data=>{
		function freePoints(data, callback){
			con.query('CALL FREE_POINTS(?, ?, ?, ?)', [data.login, data.from, data.dice_1, data.dice_2], function(error, result){
				if(error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				console.log(res);
				if(res[0].ERRONE){
					console.log('Error wrong move white');
					callback(false);
				}
				else if(res[0].ERRTWO){
					console.log('Error wrong move black');
					callback(false);
				}else{
					console.log('free points', res);
					callback(res[0]);
				}
			})
		}

		freePoints({login: data.login, from: data.from, dice_1: data.dice_1, dice_2: data.dice_2}, (val)=>{
			if(!val){
				console.log('error');
				return
			}
			socket.emit('show_freePoints', val);
		})
	})
});
