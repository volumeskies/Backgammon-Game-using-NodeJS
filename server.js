const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const crypto = require('crypto');
const db = require("mysql");
var urlencodedParser = bodyParser.urlencoded({extended: false});
const notificator = require("./public/notifications.js");

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
app.get("/", urlencodedParser, (req, res)=>{
    res.sendFile(__dirname + "/signin.html");
});

app.get("/signup", urlencodedParser, (req, res)=>{
    res.sendFile(__dirname + "/signup.html");
});


app.post("/signin", urlencodedParser, (req, res)=>{
	return res.redirect('/');
});

app.use(express.static('public'));

/* SERVER LISTENING */
server = app.listen(8081);

/* SOCKET.IO */
var io = require('socket.io')(server);
io.sockets.on('connection', (socket)=>{
	console.log("server connection");
	console.log(socket.id);
		socket.on('user_signup', data =>{
			console.log('user signup');
			con.query('CALL REGISTER(?, ?, ?)', [data.username, data.login, data.password], function (error, result) {
				if (error) throw error;
				var res = JSON.parse(JSON.stringify(result[0]));
				if(res[0].FALSE)
					console.log('NO');//notification this login has already taken
				else if(res[0].TRUE)
					console.log('TRUE'); // !SUCCESSFUL signup!
			  });
		});
		socket.on('user_signin', data=>{
			console.log('user signin');
			console.log(socket.id);
		});
});


