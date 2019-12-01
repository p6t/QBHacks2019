const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();

// Setup express
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Get env variables
const port = process.env.PORT || 3000;
const perPage = process.env.PAGE_SIZE || 10;
//const defaultPassword = process.env.HACKERLOG_PASSWORD || 'P@ssw0rd!';

app.get('/', (req, res) => {
    //res.send('Whas poppin Jimbo??');
    //console.log('done did it!');
    res.render('index');
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
