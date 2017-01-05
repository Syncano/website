import APP_CONFIG from './config/';
import ExtendedDefinePlugin from 'extended-define-webpack-plugin';

exports.modifyWebpackConfig = function(config, env) {
  const fileLoader = env !== 'develop' ? 'file-loader?name=[hash].[ext]' : 'file-loader';

  config.loader('txt', function(cfg) {
    cfg.test = /\.txt/;
    cfg.loader = 'raw-loader';
    return cfg;
  });

  config.removeLoader('url-loader');
  config.loader('url-loader', function(cfg) {
    cfg.test = /\.(mp4|webm|wav|mp3|m4a|aac|oga|flv|ogg)(\?.*)?$/;
    cfg.loader = fileLoader;
    return cfg;
  });

  config.removeLoader('images');
  config.loader('images', function(cfg) {
    cfg.test = /\.(jpg|jpeg|png|gif|svg)(\?.*)?$/i;
    cfg.loader = fileLoader;
    return cfg;
  });

  config.plugin('webpack-extended-define', ExtendedDefinePlugin, [{APP_CONFIG}]);

  if (env === 'build-html') config._config.target = 'web';

  return config;
};

exports.postBuild = require('./post-build');
