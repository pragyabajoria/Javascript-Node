var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("It is running");
  setTimeout(function() {
    response.write("It is done.");
    response.end();
  }, 5000);
}).listen(8080);
