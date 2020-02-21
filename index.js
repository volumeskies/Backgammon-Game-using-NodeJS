const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.get("/", urlencodedParser, (req, res)=>{
    res.sendFile(__dirname + "/signup.html");
});

app.get("/signin", urlencodedParser, (req, res)=>{
	res.sendFile(__dirname + "/signin.html");
});

app.post("/register", urlencodedParser, (req, res)=>{
	if(!req.body) return res.sendStatus(400);
	console.log(res.body);
   // return res.redirect('/signin');
});

app.post("/signin", urlencodedParser, (req, res)=>{
	return res.redirect('/signin');
});

app.use(express.static('public'));

app.listen(8081);