const path = require('path');
const VueLoaderPlugin = require("vue-loader").VueLoaderPlugin;

module.exports = {

  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            presets: [
             // "@babel/preset-env"
            ],
            plugins:[
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }

      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'app'),
    ]
  },
  plugins: [new VueLoaderPlugin()],
  devtool: 'source-map',
};