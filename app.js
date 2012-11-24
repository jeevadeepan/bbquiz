var connect = require("connect");
connect(connect.static(__dirname+"/client")).listen(8000);