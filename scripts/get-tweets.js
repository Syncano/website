import Twit from 'twit';
import fs from 'fs';
import toml from 'toml-js';
import APP_CONFIG from '../config/';
import GLOBAL_CONFIG from '../config/global';

const { tweetsIDs } = GLOBAL_CONFIG;

const getTweets = (tweetsIDs) => {
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
};

getTweets(tweetsIDs);
