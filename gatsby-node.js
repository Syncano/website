import _ from 'lodash';
import CONSTANS from './circle-constans';
import webpack from 'webpack';

const generateEnvVariables = () => {
  const variables = {};

  _.forEach(CONSTANS, (variable) => {
    variables[variable] = process.env[variable];
  });

  return variables;
};

exports.modifyWebpackConfig = function(config, env) {
  const imageLoader = env !== 'develop' ? 'file-loader?name=/[hash].[ext]' : 'file-loader';

  config.removeLoader('flv');
  config.loader('flv', function(cfg) {
    cfg.test = /\.flv/;
    cfg.loader = imageLoader;
    return cfg;
  });

  config.removeLoader('jpg');
  config.loader('jpg', function(cfg) {
    cfg.test = /\.jpg/;
    cfg.loader = imageLoader;
    return cfg;
  });

  config.removeLoader('mp4');
  config.loader('mp4', function(cfg) {
    cfg.test = /\.mp4/;
    cfg.loader = imageLoader;
    return cfg;
  });

  config.removeLoader('ogg');
  config.loader('ogg', function(cfg) {
    cfg.test = /\.ogg/;
    cfg.loader = imageLoader;
    return cfg;
  });

  config.removeLoader('png');
  config.loader('png', function(cfg) {
    cfg.test = /\.png/;
    cfg.loader = imageLoader;
    return cfg;
  });

  config.removeLoader('svg');
  config.loader('svg', function(cfg) {
    cfg.test = /\.svg/;
    cfg.loader = 'file-loader';
    return cfg;
  });

  config.removeLoader('txt');
  config.loader('txt', function(cfg) {
    cfg.test = /\.txt/;
    cfg.loader = 'raw-loader';
    return cfg;
  });

  config.removeLoader('webm');
  config.loader('webm', function(cfg) {
    cfg.test = /\.webm/;
    cfg.loader = imageLoader;
    return cfg;
  });

  console.error('envs', generateEnvVariables());

  config.plugin('webpack-define', webpack.DefinePlugin, [generateEnvVariables()]);

  return config;
};

exports.postBuild = require('./post-build');
