var secrets = {
  redis: {
    staging: {
      auth_pass: ""
    },
    me: {
      auth_pass: ""
    },
    production: {
      auth_pass: ""
    }
  },
  s3: {
    accessKeyId: 'AKIAINWSRZDX4YGLJJTQ',
    secretAccessKey: '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',
  },
  rollbar: {
    development: {
      accessToken: '',
    },
    staging: {
      accessToken: '',
    },
    production: {
      accessToken: '',
    },
  },
};

module.exports = secrets;