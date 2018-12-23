const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, './lib'),
        filename: 'index.js',
        library: '',
        libraryTarget: 'commonjs'
    },
    externals: [nodeExternals()],
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'react-form.css'
        })
    ],
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/react'],
                plugins: ['@babel/plugin-transform-classes', '@babel/plugin-proposal-class-properties']
            }
        }, {
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    // options: { sourceMap: true }
                }, {
                    loader: 'sass-loader',
                    // options: { sourceMap: true }
                }]
        }
      ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 1
        },
        minimize: false,
        minimizer: [
            new UglifyJSPlugin({
                sourceMap: true,
                parallel: true,
                uglifyOptions: {
                    compress: { inline: false },
                    output: {
                        comments: true,
                        beautify: false,
                        preserve_line: false,
                        semicolons: false,
                        indent_level: 0,
                        indent_start: 0
                    }
                }
            })
        ]
    },
  };