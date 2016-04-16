const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const root = path.resolve(__dirname);

module.exports = {
    context: `${__dirname}/src`,
    entry: {
        index: [
            './js/main.js',
            './css/main.scss',
        ],
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: root,
            },
            { test: /\.html$/, loader: 'html' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.s?css$/, loader: ExtractTextPlugin.extract('css!sass') },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            d3: 'd3',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${__dirname}/src/index.html`,
            hash: true,
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: false,
        }),
    ],
    resolve: {
        root: path.resolve(`${__dirname}`),
        extensions: ['', '.js'],
    },
};
