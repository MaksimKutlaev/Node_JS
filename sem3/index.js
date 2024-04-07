const express = require('express');

const app = express();

app.use(express.static('static'));

// app.get('/', (req, res) => {
//     res.send('<h1>Welcome!</h1> <a href="/about">About</a>');
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1> <a href="/">Start page</a>');
// });

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});