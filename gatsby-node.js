import APP_CONFIG from './config/';
import ExtendedDefinePlugin from 'extended-define-webpack-plugin';

exports.modifyWebpackConfig = function(config, env) {
  const fileLoader = env !== 'develop' ? 'file-loader?name=[hash].[ext]' : 'file-loader';
  const imageLoader = env !== 'develop' ? 'file-loader?name=[name]-[hash].[ext]' : 'file-loader';

  config.removeLoader('flv');
  config.loader('flv', function(cfg) {
    cfg.test = /\.flv/;
    cfg.loader = fileLoader;
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
    cfg.loader = fileLoader;
    return cfg;
  });

  config.removeLoader('ogg');
  config.loader('ogg', function(cfg) {
    cfg.test = /\.ogg/;
    cfg.loader = fileLoader;
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
    cfg.loader = imageLoader;
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
    cfg.loader = fileLoader;
    return cfg;
  });

  config.plugin('webpack-extended-define', ExtendedDefinePlugin, [{APP_CONFIG}]);

  return config;
};

exports.postBuild = require('./post-build');
