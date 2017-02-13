var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  conf = require('./config.json');

server.listen(conf.port);

app.configure(function() {
  // statische Dateien ausliefern
  app.use(express.static(__dirname + '/public'));
});
