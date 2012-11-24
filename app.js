var http = require("http");
http.createServer(function(req,res){
	var html = '<!doctype html><html><head>'+
						 '<title>Helllo worls</title>'+
						'<body><h1>Hello world</h1></body>'+
						'</head></html>';
						
	res.writeHead(200,{
			"Content-type":"text/html",
			"Content-length":html.length
		});
	res.end(html);
}).listen(8000,"127.0.0.1");