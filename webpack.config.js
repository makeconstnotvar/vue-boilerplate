let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        browser: './app/index.js',
    },
    output: {
        filename: 'scripts.js',
        path: path.resolve(__dirname, 'build')
    },
    // externals: {
    //     'vuex': 'Vuex',
    //     'vue': 'Vue',
    //     'vue-router': 'VueRouter'
    // },
    // plugins: [],
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
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {presets: ['env', 'stage-0']}
                }]
            }
        ]
    },
    resolve: {
        extensions: [".js",".vue"],
        /*alias: {
            vue: 'vue/dist/vue.esm.js'
        },*/
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'app'),
        ]
    },
    devtool: 'source-map',
};