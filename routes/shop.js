const path = require('path');
const express = require('express');
const rootDirectory = require('../utilities/path');

const adminData = require('./admin');


const router = express.Router();


router.get('/', function(req, res){
    const products = adminData.products;

    console.log("Hello from Shop", products);

    res.render('shop', {
        pageTitle: "Welcome!",
        welcome: "Welcome To My Shop!",
        listOfProducts: products
    });
    
    //res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
});

module.exports = router;