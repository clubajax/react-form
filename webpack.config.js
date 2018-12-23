const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
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
    }
  };