const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    target: 'node',
    devtool: undefined,
    entry: {
        main: './source/main.ts',
    },
    output: {
        libraryTarget: 'commonjs',
        filename: 'bundle.js',
        path: path.resolve('./build/main'),
    },
    externals: [webpackNodeExternals()],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [],
};
