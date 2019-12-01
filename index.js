var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var username = 'chris';
var schoolname = 'Rutgers University';

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  console.log(username + ' connected');
  socket.on('disconnect', function(){
    console.log(username + ' disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  socket.broadcast.emit('Hello!');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    if(msg.length != 0){
      io.emit('chat message', username + " [" + schoolname+ "] : " + msg);
    }
  });
});
