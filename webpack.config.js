let webpack = require('webpack'),
  vue = require('vue-loader'),
  path = require('path'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    browser: './app/index.js',
  },
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex'
  },
  plugins: [new vue.VueLoaderPlugin(), new MiniCssExtractPlugin({filename: 'styles.css'})],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'stage-0']
              }
            },
            scss: {
              loaders: ['vue-style-loader', 'css-loader', 'sass-loader']
            }
          }
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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