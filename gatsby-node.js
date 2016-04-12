exports.modifyWebpackConfig = function(config, env) {
  config.removeLoader('jpg');
  config.loader('jpg', function(cfg) {
    cfg.test = /\.jpg/;
    cfg.loader = 'file-loader';
    return cfg;
  });

  config.removeLoader('png');
  config.loader('png', function(cfg) {
    cfg.test = /\.png/;
    cfg.loader = 'file-loader';
    return cfg;
  });

  config.removeLoader('svg');
  config.loader('svg', function(cfg) {
    cfg.test = /\.svg/;
    cfg.loader = 'file-loader';
    return cfg;
  });

  return config;
};
