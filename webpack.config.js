const path = require('path');

const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'bundles/js')
};

module.exports = {
    entry: {
        'bundle': path.join(PATHS.src, 'main.js')
    },
    output: {
        filename: '[name].js',
        path: path.join(PATHS.dist)
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                    // other vue-loader options go here
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        port: 3000
    },
    mode: 'development'
};