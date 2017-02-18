var types = [];
for (var i = 0; i < 10; i++) {
  types[i] = [];
  for (var j = 0; j < 10; j++) {
    switch (Math.floor(Math.random() * 5)) {
      case 0:
        types[i][j] = 1;
        break;
      case 1:
        types[i][j] = 2;
        break;
      default:
        types[i][j] = 0;
    }
  }
}

var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  conf = require('./config.json');

// Webserver
// auf den Port x schalten
server.listen(conf.port);

app.configure(function() {
  // statische Dateien ausliefern
  app.use(express.static(__dirname + '/public'));
});

// wenn der Pfad / aufgerufen wird
app.get('/', function(req, res) {
  // so wird die Datei index.html ausgegeben
  res.sendfile(__dirname + '/public/index.html');
});

// Websocket
io.sockets.on('connection', function(socket) {
  // der Client ist verbunden
  socket.emit('chat', {
    zeit: new Date(),
    name: "_server_",
    text: 'You are connected to the server!'
  });
  socket.emit('field', {
    types: types
  });
  // wenn ein Benutzer einen Text senden
  socket.on('chat', function(data) {
    // so wird dieser Text an alle anderen Benutzer gesendet
    io.sockets.emit('chat', {
      zeit: new Date(),
      name: data.name || 'Anonym',
      text: data.text
    });
  });
  // wenn ein Benutzer einen Move sendet
  socket.on('move', function(move) {
    // so wird dieser Text an alle anderen Benutzer gesendet
    socket.broadcast.emit('move', {
      zeit: new Date(),
      x: move.x,
      y: move.y
    });
  });
});

// Portnummer in die Konsole schreiben
console.log('Der Server läuft nun unter http://127.0.0.1:' + conf.port + '/');
