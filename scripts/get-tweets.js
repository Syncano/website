import Twit from 'twit';
import fs from 'fs';
import toml from 'toml-js';
import APP_CONFIG from '../config/';

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

fs.readFile(`${__dirname}/../config.toml`, function (err, data) {
  const parsed = toml.parse(data);
  const { tweetsIDs } = parsed;

  getTweets(tweetsIDs);
});
