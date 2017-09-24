// require express
// connect database
// load created task
// use bodyParser
// register created routes in server

var express = require('express'),
  app = express(),
  port = process.env.PORT || 9001,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel.js'), //grabs the pre-created model
  bodyParser = require('body-parser');

// mongoose connects to url connection
// an async method
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log('ToDo RESTful API Server initialised on: ' + port);

// middleware that redirects when a wrong route is entered
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' does not exist..'})
});
