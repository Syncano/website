const ENV = {
  'syncano-ascend': 'ASCEND',
  'syncano-ascend-master': 'PRODUCTION',
  devel: 'STAGING',
  master: 'PRODUCTION'
}[process.env.CIRCLE_BRANCH || 'devel']

const envVars = [
  'HELLO_FACEBOOK',
  'HELLO_GOOGLE',
  'HELLO_GITHUB',
  'HELLO_REDIRECT_URI',
  'DASHBOARD_URL',
  'ANALYTICS_WRITE_KEY',
  'OPTIMIZELY_KEY',
  'API_URL',
  'SYNCANO_REGISTRY_URL'
]

const variables = envVars
  .reduce((env, key) => {
    const name = ENV ? `${ENV}_${key}` : key
    const value = process.env[name] || process.env[key]

    return Object.assign({}, env, {
      [`process.env.${key}`]: value
    })
  }, {})

module.exports = variables
