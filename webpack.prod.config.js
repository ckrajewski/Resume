var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "/src"),
  devtool: "inline-sourcemap",
  entry: "./main.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "mainCreated.js"
  },

plugins: [
    new webpack.optimize.UglifyJsPlugin({ drop_debugger:true })
  ]
};