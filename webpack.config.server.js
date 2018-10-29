const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.base.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(baseConfig, {
  entry: {
    server: './app/entry-server.js',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new VueSSRServerPlugin()
  ],
});