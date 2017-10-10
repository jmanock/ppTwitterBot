// var twit = require('twit');
// var config = require('./config.js');
// var Twitter = new twit(config);
//
// var retweet = function(){
//   var params = {
//     q:'#patriot, #pup',
//     result_type:'recent',
//     lang:'en'
//   }
//   Twitter.get('search/tweets', params, function(err, data){
//     if(!err){
//       var retweetId = data.statuses[0].id_str;
//       Twitter.post('statuses/retweet/:id', {
//         id:retweetId
//       }, function(err, response){
//         if(response){
//           console.log('Retweeted!!!');
//         }
//         if(err){
//           console.log('Something went wrong while RETWEETING.... Duplication maybe');
//         }
//       });
//     }
//     else{
//       console.log('Something went wrong while SEARCHING...');
//     }
//   });
// }
// retweet();
// setInterval(retweet, 300000);

var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
var stream = Twitter.stream('user');
stream.on('follow', followed);
function followed(event){
  console.log('Follow Event is running');
  var name = event.source.name,
  screenName = event.source.screen_name;
  tweetNow('@'+screenName + ' Thank you for the follow up.');
}
function tweetNow(tweetTxt){
  var tweet = {
    status:tweetTxt
  }
  Twitter.post('statuses/update', tweet, function(err, data, response){
    if(err){
      console.log('Error in Replying');
    }else{
      console.log('Gratitude show successfully');
    }
  });
}
