const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Whas poppin Jimbo??');
    console.log('done did it!');
})
console.log('Hello WOrld');
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
