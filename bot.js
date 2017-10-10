var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

var retweet = function(){
  var params = {
    q:'#patriot, #pup',
    result_type:'recent',
    lang:'en'
  }
  Twitter.get('search/tweets', params, function(err, data){
    if(!err){
      var retweetId = data.statuses[0].id_str;
      Twitter.post('statuses/retweet/:id', {
        id:retweetId
      }, function(err, response){
        if(response){
          console.log('Retweeted!!!');
        }
        if(err){
          console.log('Something went wrong while RETWEETING.... Duplication maybe');
        }
      });
    }
    else{
      console.log('Something went wrong while SEARCHING...');
    }
  });
}
retweet();
setInterval(retweet, 300000);
