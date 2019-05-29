var http = require('http');

http.createServer(function(req, res) {
	res.end("olar");
}).listen(3003);

console.log("Server is running");