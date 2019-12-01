const express = require('express');
const app = express();
const port = 3000;

//server init
app.use(express.static('public'));

//test get
app.get('/', (req, res) => {
    res.send('Whas poppin Jimbo??');
    console.log('done did it!');
});

//opening webapp
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
