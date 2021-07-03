const path = require('path');

module.exports = {
  entry: '../src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ['file-loader', 'image-webpack-loader']
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/'),
    hot: true,
    compress: true,
    port: 8564
  },
  devtool: 'inline-source-map'
}