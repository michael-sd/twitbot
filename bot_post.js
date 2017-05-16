console.log('The bot is starting')

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

// setting up user stream
var stream = T.stream('user');

// based on the case of anytime someone follows me
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('.@' + screenName + ' thanks for the follow!');
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
