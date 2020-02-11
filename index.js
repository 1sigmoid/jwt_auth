const express = require('express');
const fs = require('fs');
const cors =require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const json = require('json')

const db = require('./config/db');
var jwtms = require('./controllers/jwt-service')

var app = express();


mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true}) //Changed this line to link to a database file instead of having everything in one file to provide quick and easy access for further work
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    


    
    
app.listen(process.env.PORT || 5000, process.env.IP, function(req, res) //The Serv.port is from a config file
{
    console.log("SERVER STARTED");
});



/*

        ROUTES ----> 

*/

app.get('/', async function(req, res){
    res.render('openroute')
})



app.post('/', async function(req, res) {
    // add email taking stuff
})





app.get('/login', async function(req, res){
    res.render('login')
})



app.post('/login', async function(req, res){

})





app.get('/register', async function(req, res){
    res.render('register')
})

app.post('/register', async function(req, res) {

})


app.get('/home', async function(req, res) {

})



app.post('/api/sign', async function(req, res) {
    // add api key tokens
    //takes DATA as a body variable
    console.log('it came here')
    var obj = await jwtms.sign(req.body.data)
    console.log(obj)
    res.send(obj)


})

app.post('/api/verify', async function(req, res){
    var obj = await jwtms.verify(req.body.token)
    res.send(obj)
})