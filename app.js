


var express = require('express');
var app = express();

var random = require('./modules/random');
var convert = require('./modules/convert');
var accountBalance = require('./modules/accountBalance');

//sets up HTML
app.get('/', function(req, res, next) {
  res.sendFile((__dirname + '/index.html'));
});

app.get('/balance', function(req, res, next) {
  res.send(accountBalance.combine());
});

//sets up vasuc file serving using express.static, connects to static folder
app.use('/static', express.static(__dirname + '/static'));

var server = app.listen(3000, function(){
});
