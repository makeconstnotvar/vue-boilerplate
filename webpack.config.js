let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        browser: './app/index.ts',
    },
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: {
        'vuex': 'Vuex',
        'vue': 'Vue',
        'vue-router': 'VueRouter'
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'app')
        ]
    },
    devtool: 'source-map',
};