const express = require("express");
const router = express.Router();

const homeController = require('../controllers/homeController.js');
const cubeController = require('../controllers/cubeController.js');
const accessoryController = require('../controllers/accessoryController.js');
const authController = require('../controllers/authController.js');

module.exports = (app) => {
    
    router.use('/', homeController);
    router.use('/accessory', accessoryController)
    router.use('/cube', cubeController);
    router.use('/', authController);
    router.get('*', (req, res) => {
        res.status(404).render('404');
    })
    app.use(router);
};