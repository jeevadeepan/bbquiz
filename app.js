var express = require("express"),
    app     = express(),
    port    = parseInt(process.env.PORT, 10) || 4567;
    
app.get("/", function(req, res) {
console.log("inside app redirection");
  res.redirect("/index.html");
});

app.get("/test", function(req, res) {
console.log("inside test  redirection");
  res.redirect("/client/test.html");
});


app.get("/quiz",function(req,res){
		console.log("inside quiz");
	res.json({user:"pradeep"});
});


app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  //app.use(express.urlencoded);
  app.use(express.static(__dirname + '/client'));
  app.use(express.static(__dirname + '/test));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});

app.listen(port);