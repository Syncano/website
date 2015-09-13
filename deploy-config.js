var secrets = require('./secrets.js');

var s3Credential = {
  accessKeyId:     secrets.s3.accessKeyId,
  secretAccessKey: secrets.s3.secretAccessKey,
  params: {
    Bucket:        'www3-syncano-com'
  }
};

var config = {

  redis: {
    development: {
      port: 6379,
      host: 'localhost',
      db: 1,
      options: { },
      indexPath: 'dist/index.html',
      indexKey: 'app:%s',
      metaKey: 'meta:%s',
      mainIndexKey: 'app:current',
      mainRevKey: 'app:current-revision',
    },
    staging: {
      port:    9999,
      db:      0,
      host:    'pub-redis-9999.us-east-1-1.2.ec2.garantiadata.com',
      options: { auth_pass: secrets.redis.staging.auth_pass },
      indexPath: 'dist/index.html',
      indexKey: 'app:%s',
      metaKey: 'meta:%s',
      mainIndexKey: 'app:current',
      mainRevKey: 'app:current-revision',
    },
    me: {
      port:    8888,
      db:      0,
      host:    'pub-redis-8888.us-east-1-3.3.ec2.garantiadata.com',
      options: { auth_pass: secrets.redis.me.auth_pass },
      indexPath: 'dist/index.html',
      indexKey: 'app:%s',
      metaKey: 'meta:%s',
      mainIndexKey: 'app:current',
      mainRevKey: 'app:current-revision',
    },
    production: {
      port:    7777,
      db:      0,
      host:    'pub-redis-7777.us-east-1-1.2.ec2.garantiadata.com',
      options: { auth_pass: secrets.redis.production.auth_pass },
      indexPath: 'dist/index.html',
      indexKey: 'app:%s',
      metaKey: 'meta:%s',
      mainIndexKey: 'app:current',
      mainRevKey: 'app:current-revision',
    }
  },

  s3: {
    // Let's stick with single S3 bucket for now
    development: {
      credentials: s3Credential,
      dirname: '/',
      assetsPath: 'public/**/*',
    },
    staging: {
      credentials: s3Credential,
      dirname: '/',
      assetsPath: 'public/*',
    },
    me: {
      credentials: s3Credential,
      dirname: '/',
      assetsPath: 'public/*',
    },
    production: {
      credentials: s3Credential,
      dirname: '/',
      assetsPath: 'public/*',
    }
  },

  rollbar: {
    development: {
      minifiedUrl: 'http://cdn.example.com/assets/main-%s.js',
      sourceMapPath: 'dist/assets/main-%s.map',
      accessToken: secrets.rollbar.development.accessToken,
    },
    staging: {
      minifiedUrl: 'http://cdn.example.com/assets/main-%s.js',
      sourceMapPath: 'dist/assets/main-%s.map',
      accessToken: secrets.rollbar.staging.accessToken,
    },
    production: {
      minifiedUrl: 'http://cdn.example.com/assets/main-%s.js',
      sourceMapPath: 'dist/assets/main-%s.map',
      accessToken: secrets.rollbar.production.accessToken,
    }
  },

  slack: {
    staging: {
      url: 'https://staging.example.com',
      notifyWebHook: 'https://hooks.slack.com/services/XXXXYYYY/ZZZZUUUUU/asdjLJFHLFJKHLDJKFHDdfdh',
    },
    production: {
      url: 'https://www.example.com',
      notifyWebHook: 'https://hooks.slack.com/services/ZZZZYYYY/ZZZZTTTTT/asdjLJFHLFJKHLDJKFHDdfdh',
    },
  },

};

module.exports = config;
