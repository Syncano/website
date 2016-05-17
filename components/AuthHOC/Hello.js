import config from '../../config/';
const isBrowser = typeof window !== 'undefined';
let hello = {};

if (isBrowser) {
  hello = require('hellojs');

  const { facebook, google, github, redirect_uri } = config.hello;
  const credentials = { facebook, google, github };
  const options = { scope: 'email', redirect_uri };

  hello.init(credentials, options);
}

export default hello;


