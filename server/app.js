const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

//express app setup
const app = express();
const port = process.env.PORT | 8000;

//connect to mongo db
mongoose.connect('mongodb+srv://abhinav:abhinav123@cluster0-fbvaq.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true

});
// mongoose.Promise = global.Promise


// use body-parser middleware
app.use(bodyParser.json());


// initialize routes
app.use('/api', require('./routes/api'));


// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});


app.use(passport.initialize());
app.use(passport.session());




app.use(express.static('public'));
app.listen(port, () => { console.log("Server started on port: " + port) });