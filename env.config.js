const ENV = {
  'syncano-ascend': 'ASCEND',
  devel: 'STAGING',
  master: 'PRODUCTION'
}[process.env.CIRCLE_BRANCH || 'devel']

const envVars = [
  'HELLO_FACEBOOK',
  'HELLO_GOOGLE',
  'HELLO_GITHUB',
  'HELLO_REDIRECT_URI',
  'DASHBOARD_URL',
  'API_URL'
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
