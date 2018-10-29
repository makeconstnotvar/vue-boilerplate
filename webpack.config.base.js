const path = require('path');

module.exports = {
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'app'),
    ]
  },
  devtool: 'source-map',
};