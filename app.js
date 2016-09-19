const express = require("express");
const app = express();
const path = require('path');
const swig = require('swig');
swig.setDefaults({cache: false});

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function(req, res, next){
	res.render('index');
});

module.exports = app;