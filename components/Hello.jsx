const isBrowser = typeof window !== 'undefined';
import config from '../config/';
let hello = {};

if (isBrowser) {
  hello = require('hellojs');

  let credentials = {};
  let options = {};

  credentials.facebook = config.hello.facebook;
  credentials.google = config.hello.google;
  credentials.github = config.hello.github;

  options.redirect_uri = config.hello.redirect_uri;
  options.scope = 'email';
//options.oauth_proxy = OAUTH_PROXY_URL;

  hello.init(credentials, options);
}

export default hello;