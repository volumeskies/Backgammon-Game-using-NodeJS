import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
const app = express();
import db from 'mysql';
import socket from 'socket.io';
const urlencodedParser = bodyParser.urlencoded({extended: false});
//const store = new session.MemoryStore;
/* MYSQL CONNECTION*/
var con = db.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'backgammon'
});

con.connect(()=>{
	console.log("mysql connected");
});

/* APP */
var sessionMid = session({
	secret: "keyboard cat"
  });

app.use(sessionMid);

app.get("/", urlencodedParser, (req, res)=>{
    res.sendFile('signin.html', { root: '../public/'});
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

app.use(express.static('../public'));

/* SERVER LISTENING */
const server = app.listen(8081);

/* SOCKET.IO */
const io = socket(server);

io.use(function (socket, next) {
	sessionMid(socket.request, socket.request.res, next);
});

io.sockets.on('connection', function(socket){
	console.log("server connection");
	console.log(socket.id);
	socket.on('user_signup', data =>{
		console.log('user signup server');
		con.query('CALL REGISTER(?, ?, ?)', [data.username, data.login, data.password], function (error, result) {
			if (error) throw error;
			var res = JSON.parse(JSON.stringify(result[0]));
			if(res[0].FALSE)
				console.log('SIGN UP DENIED');//notification this login has already taken
			else if(res[0].TRUE)
				console.log('SUCCESSFUL SIGN UP'); // !SUCCESSFUL signup!
		  });
	});
	
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
			if(!val)
				  io.emit('user_signin_notification', {val: false});
			else{
				io.emit('user_signin_notification', {val: true});
				io.emit('redirect', '/invite');
			} 
		});
	});
});

