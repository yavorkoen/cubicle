const express = require('express');
const env = process.env.NODE_ENV || 'development';
const initDatabase = require('./config/database.js');
const config = require('./config/config.js')[env];
const app = express();

require('./config/express.js')(app);
require('./config/routes.js')(app);

app.get('/', (req, res) => {
    res.render('index');
})

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.port, console.log.bind(console, `App running on port ${config.port}...`));
    })
    .catch(err => {
        console.log('Application init failed', err);
    })


