const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Whas poppin Jimbo??');
    console.log('done did it!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});