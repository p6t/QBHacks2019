const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const login = require('./routes/login');
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static('public'));
app.get("/",(req,res)=>{
  //res.send("Hello World!");
  res.render('index');
})
app.use('/', login);
app.set('view engine','ejs');
app.listen(5000,()=>{
  console.log("Running on port 5000!")
})
