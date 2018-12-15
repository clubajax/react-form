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

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../src/styles")
      }
    ]
  }
};