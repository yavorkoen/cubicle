const express = require("express");
const router = express.Router();

const homeController = require('../controllers/homeController.js')


// TODO: Require Controllers...

module.exports = (app) => {
    
    router.use('/', homeController)
    // router.use('/cube', cubeController)
    app.use(router);
};