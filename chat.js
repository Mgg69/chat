var socket = io.connect('http://localhost:7777');
socket.on('connect', function(data) {
   socket.emit('join', 'Hello server from chat');
});

socket.on('thread', function(data) {
   $('#thread').append('<li>' + data + '</li>');
});


$('form').submit(function(){
   var message = $('#message').val();
   socket.emit('messages', message);
   this.reset();
   return false;
});