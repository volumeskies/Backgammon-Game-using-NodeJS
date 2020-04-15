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

app.get("/game", urlencodedParser, (req, res)=>{
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

	/* CHECK POINTS */
	socket.on('check_points', data =>{
		console.log(data);
		function checkPoints(data, callback){
			if(con.query("CALL IS_POINT_FREE(?)", [data.from + data.dice_1], function (error, result){
				if (error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				if(res[0].FALSE){
					console.log('d1no');
					callback('d1no');
				}
				else if(res[0].TRUE){
					console.log('d1yes');
					callback('d1yes');
				}
			}));
			if(con.query("CALL IS_POINT_FREE(?)", [data.from + data.dice_2], function (error, result){
				if (error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				if(res[0].FALSE){
					console.log('d2no');
					callback('d2no');
				}
				else if(res[0].TRUE){
					console.log('d2yes');
					callback('d2yes');
				}
			}));
			if(con.query("CALL IS_MULTIPOINT_FREE(?, ?)", [data.from, data.dice_1 + data.dice_2], function (error, result){
				if (error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				if(res[0].FALSE){
					console.log('d3no');
					callback('d3no');
				}
				else if(res[0].TRUE){
					console.log('d3yes');
					callback('d3yes');
				}
			}));
		}
	
		checkPoints(data, (val)=>{
			io.emit('check_answer', val);
		});
    	
	})

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

	socket.on('hey', data=>{
		console.log(data.msg);
	})

	socket.on('confirmation', data=>{
		console.log('confirmation', data.login_1, data.login_2, data.confirmation);
		function confirmation(data, callback){
			con.query('CALL CONFIRM(?, ?, ?)', [data.login_1, data.login_2, data.confirmation], function (error, result) {
				if (error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				console.log(res);
				if(res[0].ERRONE){
					console.log('ERROR! Invitation do not exist');
					callback(false);
				}
				else if(res[0].TRUE){
					console.log('SUCCESS!');
					callback(true);
				}
			  });
		}
		confirmation({login_1: data.login_1, login_2: data.login_2, confirmation: data.confirmation}, (val)=>{
			if(!val){
				console.log('decline');
				socket.emit('decline', {invited: data['login_2']});
			}
			else{
				console.log('accept');
				/*con.query INV answer?accept:decline*/
				socket.emit('accept', {invited: data['login_2']});
			}
				
		})
	})
});
