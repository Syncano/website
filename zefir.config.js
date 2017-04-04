module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['babel-loader', 'svg-react-loader']
      }
    )

    return config
  }
}
