const express = require("express");
const router = express.Router();

const homeController = require('../controllers/homeController.js');
const cubeController = require('../controllers/cubeController.js');
const accessoryController = require('../controllers/accessoryController.js');

module.exports = (app) => {
    
    router.use('/', homeController);
    router.use('/accessory', accessoryController)
    router.use('/cube', cubeController);
    router.get('*', (req, res) => {
        res.render('404');
    })
    app.use(router);
};