// require express
var express = require('express'),
  app = express(),
  port = process.env.PORT || 9001;

app.listen(port);

console.log('ToDo RESTful API Server initialised on: ' + port);
