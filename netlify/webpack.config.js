const path = require('path')

const cwd = process.cwd()
const { NODE_ENV } = process.env

module.exports = {
  entry: {
    server: path.join(cwd, 'server/index.js')
  },
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    path: path.join(cwd, 'build/functions')
  },
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  target: 'node',
  node: {
    console: false,
    global: true,
    process: true,
    __filename: true,
    __dirname: true,
    Buffer: true,
    setImmediate: true
  },
  performance: { hints: false },
  devtool: 'inline-cheap-module-source-map',
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
  },
  optimization: {
    minimize: false
  }
}
