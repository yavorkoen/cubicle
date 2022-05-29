const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');


module.exports = (app) => {
    
    app.engine('hbs', engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../views'));
    
    //TODO: Setup the body parser
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public')))

};