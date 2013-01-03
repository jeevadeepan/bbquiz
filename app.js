var express = require("express"), app = express(), port = parseInt(
        process.env.PORT, 10) || 4567;



var language = "en";

app.use(express.bodyParser());
app.get("/", function(req, res) {
    console.log("inside app redirection");
    res.redirect("/index.html");
});

app.get("/test", function(req, res) {
    console.log("inside test  redirection");
    res.redirect("/client/test.html");
});

app.use(express.bodyParser());
app.get("/getLanguage",function(req,res){
	console.log("en");
});

app.use(express.bodyParser());
app.post("/login", function(req, res) {
    console.log("inside quiz");
    console.log(req.body);
    res.json( {
        userName : req.body.userName
    });
});

app.use(express.bodyParser());
app.post("/answers", function(req,res){
	console.log(req.body);
	res.json({
		userName: req.body.userName,
		score : req.body.answeredQuestions.length
	});
});

app.configure(function() {
    //app.use(express.methodOverride());
    app.use(express.bodyParser());
    //app.use(express.urlencoded);
    app.use(express.static(__dirname + '/client'));
    app.use(express.static(__dirname + '/test'));
    app.use(express.errorHandler( {
        dumpExceptions : true,
        showStack : true
    }));
    app.use(app.router);
});

app.listen(port);

