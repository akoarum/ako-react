const path = require('path')
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')

module.exports = ({ config }) => {
  config.resolve.alias['~'] = path.resolve(__dirname, '../src')
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')]
        }
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  })

  config.plugins.push(new TSDocgenPlugin())
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
