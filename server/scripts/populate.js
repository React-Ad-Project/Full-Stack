const user = require("../models/costomerDetails");

const mongoose = require('mongoose');

const fs = require('fs');

// make a connection
mongoose.connect('mongodb://localhost/ninjago');
 

fs.readFile('populate.json',(err,data) => {
    if(err) console.log(err);
    else {
        let userData = JSON.parse(data);
        console.log(userData);
        user.collection.insertMany(userData, (data,err) => {
        if(err) console.log(err);
        console.log("Multiple files inserted");
    });
}
});

