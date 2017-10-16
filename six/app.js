var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);




var links =[
  'https://twitter.com/Matasnet/status/919506462048772096',
  'https://twitter.com/ChiomaBanks/status/919505996942336000',
  'https://twitter.com/ANTONYBRADDON/status/919505292232089600',
  'https://twitter.com/Magidas1/status/919505893238063105',
  'https://twitter.com/first4edu/status/919507046407593984',
  'https://twitter.com/gbramwellxo/status/919507092339396609',
  'https://twitter.com/IAmNotAFakeGirl/status/919505647498137600',
  'https://twitter.com/Pikagamergirl/status/919506780438319105',
  'https://twitter.com/Bun_Bun31/status/919505295923204096',
  'https://twitter.com/Xhakaal/status/919506878387822593'
];

module.exports = app;
