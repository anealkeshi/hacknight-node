// Set config variables
global.config = require('./config');

var express = require('express');
var app = express();

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const routes = require('./app/route');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(config.db.MONGO_CONNECT_URL, { useMongoClient: true });


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);


module.exports = app;
