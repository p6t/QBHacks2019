
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var username;
//var schoolname = 'Rutgers University';

app.get('/chat', function(req, res){
  res.cookie('user,school', username, {maxAge: 10800}).send('cookie set');
  res.render('chat');
  //res.sendFile(__dirname + '/views/chat.ejs');
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
      io.emit('chat message', username + ": " + msg);
    }
  });
});
