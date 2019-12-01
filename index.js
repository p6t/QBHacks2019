const express = require('express')();
const bodyParser = require('body-parser');
const app = require('express')();
const pug = require('pug');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Setup express
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get env variables
const PORT = process.env.PORT || 3000;
const perPage = process.env.PAGE_SIZE || 10;
//const defaultPassword = process.env.HACKERLOG_PASSWORD || 'P@ssw0rd!';

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, ()=> {
    console.log(`server is up on port: ${PORT}`)
});

io.on('connection', function(socket){
  console.log(username + ' connected');
  socket.on('disconnect', function(){
    console.log(username + ' disconnected');
  });
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
