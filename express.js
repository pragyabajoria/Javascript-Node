// Hello World application for Express JS
var express = require('express');

// Initialize the express and create an app instance.
var app = express();

// Provide a single route '/' which responds to all the GET requests
// with 'Welcome!'
app.get('/', function(req, res) {
  res.send('Welcome');
});

// Attach the server on the port 8080 on all ip addresses.
app.listen(8080);
