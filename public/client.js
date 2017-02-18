var senden;
var sendmove;
var field;

$(document).ready(function() {
  // Field
  field = new Field(10, 10, w);
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
  socket.on('field', function(data) {
    //console.log(data.field);
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        field.cells[i][j].type = data.types[i][j];
      }
    }
    //field.setNeighbors();
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
