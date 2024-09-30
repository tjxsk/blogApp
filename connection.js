const mongoose = require("mongoose");

//Write missing code here for database connection
mongoose.connect('mongodb+srv://tjxsk:1245784512@cluster0.zpzwg.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('connection established');
}).catch(() => {
    console.log('error in conection');
});