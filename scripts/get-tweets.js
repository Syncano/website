import Twit from 'twit';
import fs from 'fs';
import APP_CONFIG from '../config/';
import GLOBAL_CONFIG from '../config/global';

const { tweetsIDs } = GLOBAL_CONFIG;

const getTweets = (ids) => {
  const { twitterConsumerKey, twitterConsumerSecret, twitterAccessToken, twitterAccessTokenSecret } = APP_CONFIG;
  const dataFilePath = `${__dirname}/../data-tweets.json`;

  if (!twitterConsumerKey || !twitterConsumerSecret || !twitterAccessToken || !twitterAccessTokenSecret) {
    return fs.writeFileSync(dataFilePath, JSON.stringify({ errors: true }));
  }

  const T = new Twit({
    consumer_key: twitterConsumerKey,
    consumer_secret: twitterConsumerSecret,
    access_token: twitterAccessToken,
    access_token_secret: twitterAccessTokenSecret,
    timeout_ms: 60*1000
  });

  return T.get('statuses/lookup', { id: ids.join() }, (err, data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data));
  });
};

getTweets(tweetsIDs);
