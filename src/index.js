const express = require('express');
const env = process.env.NODE_ENV || 'development';

const config = require('./config/config.js')[env];
const app = express();

require('./config/express.js')(app);
require('./config/routes.js')(app);

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(config.port, console.log.bind(console, `App running on port ${config.port}...`));