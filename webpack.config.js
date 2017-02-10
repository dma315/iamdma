// https://www.codementor.io/tamizhvendan/tutorials/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr

var webpack = require('webpack');
var path = require('path');

var BASE_DIR = path.resolve(__dirname, '../iamdma')
var BUILD_DIR = path.resolve(__dirname, './compiled');
var COMPONENT_DIR = path.resolve(__dirname, './components');
var LIBRARY_DIR = path.resolve(__dirname, './library');
var SASS_DIR = path.resolve(__dirname, './sass')

var config = {
  entry: './index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : [BASE_DIR, COMPONENT_DIR, LIBRARY_DIR, SASS_DIR],
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'] 
      }
    ]
  },
  "scripts": {
    "dev": "webpack -d --watch",
    "build" : "webpack -p"
  },
};

module.exports = config;