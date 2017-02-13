var senden;

$(document).ready(function() {
  // WebSocket
  var socket = io.connect();
  // neue Nachricht
  socket.on('chat', function(data) {
    var zeit = new Date(data.zeit);
    console.log(data.name, data.text)
  });
  // Nachricht senden
  senden = function(name, text) {
    // Socket senden
    socket.emit('chat', {
      name: name,
      text: text
    });
  }
});
