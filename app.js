const express = require("express");
const app = express();
const path = require('path');
const swig = require('swig');
swig.setDefaults({cache: false});
const bodyParser = require('body-parser');

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));
app.use(bodyParser.json());

app.get('/', function(req, res, next){
	res.sendFile( path.join(__dirname, 'views', 'index.html'));
});

app.use('/api/regions', require('./routes/regions.js'));
app.use('/api/salesPeople', require('./routes/salesPeople.js'));

module.exports = app;
