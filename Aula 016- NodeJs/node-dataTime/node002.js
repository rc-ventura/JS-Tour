var http = require('http');
var date = require("./module");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("A data e hora atual são: " + date.myDateTime());
  res.end();
}).listen(8080);