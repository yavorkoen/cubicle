const express = require('express');

const app = express();

require('./config/express.js')(app);

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, console.log.bind(console, 'App running on port 3000...'));