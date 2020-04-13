const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const passport = require('passport');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

//express app setup
const app = express();
const port = process.env.PORT | 8000;

//connect to mongo db
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise


// use body-parser middleware
app.use(bodyParser.json());


// initialize routes
app.use('/api', require('./routes/api'));


// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

app.set('view engine', 'ejs');
app.use("/assets/css", express.static(__dirname + "/assets/css"));
app.use("/assets/img", express.static(__dirname + "/assets/img"));
app.use("/assets/img", express.static(__dirname + "/assets/scss"));
app.use("/assets/js", express.static(__dirname + "/assets/js"));

app.use(passport.initialize());
app.use(passport.session());



app.get('/', function(req, res) {
	res.render('home');
})


app.get('/Listings', function(req, res) {
    let url = 'http://localhost:8000/api/details?lng=-80&lat=25'
    fetch(url, {method: 'GET'})
    .then(res => res.json())
    .then(json => {
        console.log(json);
        console.log('Data acquired');
        res.render('Listings',{data:json})
    })
    .catch(err => {
        console.log("Error!");
        console.log(err);
    })
})

// To push api data to front 
app.get('/testapi' , (req,res) => {
    let url = 'http://localhost:8000/api/details?lng=-80&lat=25'
    fetch(url, {method: 'GET'})
    .then(res => res.json())
    .then(json => {
        console.log(json);
        console.log('Data acquired');
        res.render('Listings',{data:json})
    })
    .catch(err => {
        console.log("Error!");
        console.log(err);
    })
})

//Filtered Search
app.get('/details/filter/:label',(req,res) => {
    let url =  'http://localhost:8000/api/details/filter/'+req.params.label+'?lng=-80&lat=25';
    fetch(url, {method: 'GET'})
    .then(res => res.json())
    .then(json => {
        console.log(json);
        console.log('Data acquired');
        res.render('Listings',{data:json})
    })
    .catch(err => {
        console.log("Error!");
        console.log(err);
    })
})



app.use(express.static('public'));
app.listen(port, () => { console.log("Server started on port: " + port) });