console.log('The bot is starting')

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var params = {
  q: 'unicat', count: 100
}

T.get('search/tweets', params, gotData);

function(err, data, response) {
  console.log(data);
};
