const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.base.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(baseConfig, {
  entry: '/app/entry-server.js',
  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'build')
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex'
  },
  plugins: [
    new VueSSRServerPlugin()
  ],
  mode: 'development',
  devtool: 'source-map',
});