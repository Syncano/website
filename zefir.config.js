const HtmlWebpackPlugin = require('html-webpack-plugin')
const {join} = require('path')

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

    for (const plugin of config.plugins) {
      if (plugin instanceof HtmlWebpackPlugin) {
        plugin.options.template = join(__dirname, 'src', 'index.html')
      }
    }

    config.output.filename = '[hash].[name]'

    return config
  }
}
