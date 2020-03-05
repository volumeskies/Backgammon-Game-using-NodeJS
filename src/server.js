import { Notify } from './notifications.js';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
const app = express();
import db from 'mysql';
import ioClient from 'socket.io';
const urlencodedParser = bodyParser.urlencoded({extended: false});

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
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
}));

app.get("/", urlencodedParser, (req, res)=>{
    res.sendFile('signin.html', { root: '../public/'});
});

app.get("/signup", urlencodedParser, (req, res)=>{
    res.sendFile('signup.html', { root: '../public/'});
});


app.post("/signin", urlencodedParser, (req, res)=>{
	return res.redirect('/');
});

app.use(express.static('../public'));

/* SERVER LISTENING */
const server = app.listen(8081);

/* SOCKET.IO */
const io = ioClient(server);
io.sockets.on('connection', (socket)=>{
	console.log("server connection");
	console.log(socket.id);
		socket.on('user_signup', data =>{
			console.log('user signup server');
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


