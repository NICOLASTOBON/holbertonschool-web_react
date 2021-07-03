const path = require('path')

module.exports = {
  entry: "../src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        user: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: ['file-loader', 'image-webpack-loader']
      }
    ]
  },
  devtool: 'inline-source-map'
}