var express = require('express'),
  app = express(),
  port = process.env.PORT || 8081,
  mongoose = require('mongoose'),
  Event = require('./models/events.model'),
  Interaction = require('./models/interactions.model'),
  bodyParser = require('body-parser');

const cors = require("cors");
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://test:test@cluster0-58sap.azure.mongodb.net/test?retryWrites=true&w=majority');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/events.routes');
var routes = require('./routes/interactions.routes');
routes(app);

app.use(cors());
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
