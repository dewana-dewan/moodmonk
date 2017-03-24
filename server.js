// var logger = require('./app/logger.js')
var express = require('express');
var app = express();

var tone = require('./app/tone').tone;
var recommend = require('./app/recommend').recommend;

app.listen(3000, function (req, res) {
    console.log("server started");
});

app.use(express.static('public'));

/*routes*/

app.get('/text/:id', function (req, res) {

    console.log(req.params.id);
    function myCallback(retvalue) {
        console.log("inside callback" + retvalue);
    };
    tone(req.params.id, myCallback);
});

app.get('/recommend/:id', function (req, res) {

    console.log(req.params.id);
    function myCallback(retvalue) {
        console.log("inside callback" + retvalue);
    };
    recommend(req.params.id, myCallback);
});