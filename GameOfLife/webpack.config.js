const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    context: __dirname + '/src',
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.(css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }            
        ],
    },
    devServer: {
        contentBase: __dirname + '/src',
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
}

module.exports = config;