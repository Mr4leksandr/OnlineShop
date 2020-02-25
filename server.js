const express = require("express");
const bodyParsser = require("body-parser");
const userRoutes = require('./routes/shop');
const adminData = require('./routes/admin');
const path = require("path");

const app = express();
app.use(bodyParsser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);

app.use('/admin', adminData.router);

app.use(function(req, res, next){
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});



app.listen(3000, function(){
    console.log("Server is starting at host 3000");
});