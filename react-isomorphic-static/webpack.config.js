const path = require('path')

const cwd = process.cwd()
const { NODE_ENV = 'development' } = process.env

module.exports = {
  mode: NODE_ENV,
  entry: {
    client: './src/client.js'
  },
  output: {
    path: path.join(cwd, './public')
  },
  performance: { hints: false },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@': cwd
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}
