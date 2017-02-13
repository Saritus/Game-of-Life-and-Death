var senden;
var sendmove;

$(document).ready(function() {
  // WebSocket
  var socket = io.connect();
  // neue Nachricht
  socket.on('chat', function(data) {
    var zeit = new Date(data.zeit);
    console.log(data.name, data.text)
  });
  socket.on('move', function(move) {
    console.log("Move", move.x, move.y);
    receiveMove(move.x, move.y);
  });
  // Nachricht senden
  senden = function(name, text) {
    // Socket senden
    socket.emit('chat', {
      name: name,
      text: text
    });
  }
  sendmove = function(x, y) {
    // Socket senden
    socket.emit('move', {
      x: x,
      y: y
    });
  }
});
