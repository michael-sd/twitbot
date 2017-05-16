console.log('The replier bot is starting')

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

// setting up user stream
var stream = T.stream('user');

// based on the case of anytime someone tweets at me
stream.on('tweet', tweetEvent);

// writes tweet data to a json file
function tweetEvent(eventMsg) {
  // var fs = require('fs');
  // var json = JSON.stringify(eventMsg, null, 2);
  // fs.writefile("tweet.json",json);

  console.log(replyto + '' + from);

  if (replyto === 'adoboapi') {
    var newtweet = '@' + from + ' thank you for tweeting me';
    tweetIt(newtweet);
  }
}

tweetIt();
setInterval(tweetIt, 1000*60*60); // set the tweetIt function to be triggered every hour

function tweetIt(txt) {

  var tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong!");
    }
    else {
      console.log("It worked!");
    }
  }
}
