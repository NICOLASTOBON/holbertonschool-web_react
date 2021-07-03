const path = require("path");

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    clean: true
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
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    compress: true,
    port: 8564
  },
  devtool: 'inline-source-map'
};