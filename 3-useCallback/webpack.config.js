const path = require('path');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, './'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    port: 8080,
  },
};