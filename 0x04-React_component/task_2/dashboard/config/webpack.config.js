const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../src/'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'bundle.js',
    clean: true,
  },
  performance: {
    maxAssetSize: 100000,
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
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/'),
    hot: true,
    compress: true,
    port: 8564
  },
  devtool: 'inline-source-map'
}