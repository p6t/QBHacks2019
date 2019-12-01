const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pug = require('pug');

// Setup express
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get env variables
const port = process.env.PORT || 3000;
const perPage = process.env.PAGE_SIZE || 10;
//const defaultPassword = process.env.HACKERLOG_PASSWORD || 'P@ssw0rd!';

app.get('/', function(req, res) {
    res.render('index');
});

