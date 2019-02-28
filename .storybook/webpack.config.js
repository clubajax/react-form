// const path = require('path');
// const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
// module.exports = (baseConfig, env, config) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     loader: require.resolve('awesome-typescript-loader'),
//   });
//   config.plugins.push(new TSDocgenPlugin()); // optional
//   config.resolve.extensions.push('.ts', '.tsx');
//   return config;
// };

const path = require("path");

const files = {
    test: /\.(jpg|png|svg)$/,
    loader: 'file-loader',
    options: {
        name: '[name].[ext]',
        context: path.resolve(__dirname, "../src/styles")
    }
};

const scss = {
    test: /\.scss$/,
    loaders: [ "style-loader", "css-loader", "sass-loader" ],
    include: path.resolve(__dirname, "../src/styles")
}

module.exports = {
  module: {
        rules: [
        scss,
        files
    ]
  }
};