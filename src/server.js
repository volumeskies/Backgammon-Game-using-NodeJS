const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();
const db = require('mysql');
const socket = require('socket.io');
const process = require('process');
const urlencodedParser = bodyParser.urlencoded({extended: false});
//const store = new session.MemoryStore;
/* MYSQL CONNECTION*/
const con = db.createConnection({
	host: 'localhost',
	user: 'host700505_3756',
	password: '3370',
	database: 'host700505_3756'
});

con.connect(()=>{
	console.log("mysql connected");
	console.log('current directory: ', __dirname);
});

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
    res.sendFile('signup.html', { root: '../public/'});
});

app.get("/invite", urlencodedParser, (req, res)=>{
    res.sendFile('invite.html', { root: '../public/'});
});

app.get("/game", urlencodedParser, (req, res)=>{
    res.sendFile('game.html', { root: '../public/'});
});

app.post("/game", urlencodedParser, (req, res)=>{
	return res.redirect('/game');
});

app.post("/signin", urlencodedParser, (req, res)=>{
	return res.redirect('/');
});

app.use(express.static(path.join(__dirname, '/public')));

/* SERVER LISTENING */
const port = process.env.PORT || 8081;
const server = app.listen(port);

/* SOCKET.IO */
const io = socket(server);

io.use(function (socket, next) {
	sessionMid(socket.request, socket.request.res, next);
});

const user = {
	login: '',
	color: ''
}

const room = {
	id: 0,
	sockets: []
}

io.sockets.on('connection', function(socket){
	console.log("server connection");
	console.log(socket.request.session.id);

	/* SIGN UP */
	socket.on('user_signup', data =>{
		console.log('user signup server');
		function register(data, callback){
			con.query('CALL REGISTER(?, ?, ?)', [data.username, data.login, data.password], function (error, result) {
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
				io.emit('user_signin_notification', {val: false});
			}
			else{
				user.login = data.login;
				console.log(user.login);
				io.emit('user_signin_notification', {val: true});
				io.emit('redirect', '/invite');
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
	})
});
