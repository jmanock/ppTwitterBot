var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);

var retweet = function() {
    var params = {
        //q: '#TittyTuesday',  // REQUIRED
        q:'#tittytuesday',
        result_type: 'recent',
        lang: 'en'
    }
    // for more parameters, see: https://dev.twitter.com/rest/reference/get/search/tweets

    Twitter.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {
          // grab ID of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            // Tell TWITTER to retweet

            Twitter.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response){
                  var something = response.entities;
                  console.log(something);



                  // console.log(something.media_url);

                }
                // if there was an error while tweeting
                if (err) {
                    console.log(err.message);
                }
            });
        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while SEARCHING...');
        }
    });
}
retweet();
setInterval(retweet,30000);
