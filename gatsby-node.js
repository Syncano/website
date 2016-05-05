exports.modifyWebpackConfig = function(config, env) {
  const imageLoader = env !== 'develop' ? 'file-loader?name=/[hash].[ext]' : 'file-loader';

  config.removeLoader('jpg');
  config.loader('jpg', function(cfg) {
    cfg.test = /\.jpg/;
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
    cfg.loader = imageLoader;
    return cfg;
  });

  config.removeLoader('txt');
  config.loader('txt', function(cfg) {
    cfg.test = /\.txt/;
    cfg.loader = 'file-loader';
    return cfg;
  });

  return config;
};
