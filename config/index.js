import _ from 'lodash';
const ENV = process.env.GATSBY_ENV || 'development';
const configFile = require(`./${ENV}/index`);
const config = ENV !== 'development' ? _.mapValues(configFile, key => process.env[key]) : configFile;

export default config;
