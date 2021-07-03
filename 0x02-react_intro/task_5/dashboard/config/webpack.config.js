const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: ['file-loader', 'image-webpack-loader'],
      },
    ],
  },
  devServer: {
    hot: true,
    contentBase: path.resolve('../dist'),
    compress: true,
    port: 8564,
  },
  devtool: 'inline-source-map'
}