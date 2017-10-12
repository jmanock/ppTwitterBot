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


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var retweet = function(){
  var params = {
    q:'#masturbate, #nsfw',
    count:10,
    result_type:'recent',
    lang:'en'
  }
  T.get('search/tweets', params, function(err, data, response){
    if(!err){
      for(let i = 0; i < data.statuses.length; i++){
        let id = {id:data.statuses[i].id_str};
        T.post('favorites/create', id, function(err, response){
          if(err){
            console.log(err);
          }else{
            let username = response.user.screen_name;
            let tweetId = response.id_str;
            console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`);
          }
        });
      }
    }else{
      console.log(err);
    }
  });
}
retweet();
module.exports = app;
