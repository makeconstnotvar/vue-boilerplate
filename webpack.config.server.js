const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.base');
//const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const package = require('./package.json');
const externals = Object.keys({...package.dependencies,...package.devDependencies});


module.exports = merge(baseConfig, {
  entry: {
    server: './app/entry-server.js',
  },
  externals,
  devtool:false,
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    //new VueSSRServerPlugin()
  ],
});