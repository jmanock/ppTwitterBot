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
app.get('/search', function(req, res){

});


// T.stream('statuses/filter', {track:'florida'}, function(stream){
//   stream.on('data', function(tweet){
//     console.log(tweet.text);
//   });
//   stream.on('error', function(error){
//     console.log(error);
//   });
// });
var params = {
  q:'nsfw',
  result_type:'recent',
  count:10,
  lang:'en'
}
var something = function(){
  T.get('search/tweets', params, function(err, data){
    if(!err){
      for(var i = 0; i < data.statuses.length; i++){
        var username = data.statuses[i].user.screen_name;
        var tweetId = data.statuses[i].id_str;
        var pic = data.statuses[i].entities.media;
        if(pic === undefined){
          console.log('No pic here')
        }else{
          for(var x = 0; x < pic.length; x++){
            var mediaUrl = pic[i].media_url;
            if(mediaUrl === undefined){
              console.log('this is not a pic');
            }else{
              console.log(mediaUrl);
            }

          }
          console.log(`https://twitter.com/${username}/status/${tweetId}`);
        }
         //console.log(data.statuses[i].entities.media);

      }

    }else{
      console.log(err);
    }
  });
}

something();


module.exports = app;
