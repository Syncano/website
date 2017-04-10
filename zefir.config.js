module.exports = {
  webpack: (config) => {
    config.devtool = false

    // disable soucemaps of babel-loader
    for (const r of config.module.rules) {
      if (r.loader === 'babel-loader') {
        r.options.sourceMaps = 'both'
      }
    }

    config.module.rules.push(
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }, 'svg-react-loader'
        ]
      }
    )

    return config
  }
}
