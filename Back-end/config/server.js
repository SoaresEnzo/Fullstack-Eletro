var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser')

var app = express();

app.use(express.json())

app.use(bodyparser.urlencoded({extended:true}))

app. use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

consign()
.include('././routes')
.then('config/database.js')
.then('././models')
.into(app)

module.exports = app

//Apesar desta página se chamar server, a execução desse script é em app.js, na pasta raíz
