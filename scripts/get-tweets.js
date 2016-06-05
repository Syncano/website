import Twit from 'twit';
import fs from 'fs';
import APP_CONFIG from '../config/';

const tweetsIDs = [
  '712734440062074883',
  '667455738139320320',
  '650071291634946048',
  '727236023298625537',
  '717796429251497985'
];

const T = new Twit({
  consumer_key: APP_CONFIG.twitterConsumerKey,
  consumer_secret: APP_CONFIG.twitterConsumerSecret,
  access_token: APP_CONFIG.twitterAccessToken,
  access_token_secret: APP_CONFIG.twitterAccessTokenSecret,
  timeout_ms: 60*1000
});

T.get('statuses/lookup', { id: tweetsIDs.join() }, (err, data, response) => {
  fs.writeFileSync(`${__dirname}/../data-tweets.json`, JSON.stringify(data));
});
