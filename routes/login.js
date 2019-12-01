var express = require('express');
var router = express.Router();
app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());


// define the about route
router.get('/login', function (req, res) {
  res.render('login')
})

router.post('/login', function (req,res) {
  console.log(req.body.username);
  res.cookie("user,school",req.body.username);
  res.render('chat');
})

module.exports = router
