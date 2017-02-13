$(document).ready(function() {
  var socket = io.connect();

  socket.on('chat', function(data) {
    var zeit = new Date(data.zeit);
    $('#content').append(
      $('<li></li>').append(
        // Uhrzeit
        $('<span>').text('[' +
          (zeit.getHours() < 10 ? '0' + zeit.getHours() : zeit.getHours()) +
          ':' +
          (zeit.getMinutes() < 10 ? '0' + zeit.getMinutes() : zeit.getMinutes()) +
          '] '
        ),
        // Name
        $('<b>').text(typeof(data.name) != 'undefined' ? data.name + ': ' : ''),
        // Text
        $('<span>').text(data.text))
    );
    // nach unten scrollen
    $('body').scrollTop($('body')[0].scrollHeight);
  });
});
