const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './client/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [
        // new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            favicon: 'client/favicon.ico'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /__tests__/],
            },
            {
                test: /\.(avif|png|jpe?g|gif|svg|ico|ttf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
};
