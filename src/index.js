const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');


const app = express();

app.engine('hbs', engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '/views'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, console.log.bind(console, 'App running on port 3000...'));