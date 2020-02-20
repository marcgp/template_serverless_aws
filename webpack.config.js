const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    devtool: 'none',
    target: 'node',
    entry: {
        main: './source/main.ts',
    },
    output: {
        libraryTarget: 'commonjs',
        filename: '[name].bundle.js',
        path: path.resolve('./build/main'),
    },
    externals: [webpackNodeExternals()],
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [],
};
