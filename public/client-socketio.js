prompt = prompt("Please input your first name", "Name");
$(function () {
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(prompt + ": " + msg));
    window.scrollTo(0, document.body.scrollHeight);
  });
});
