
const babelConfig = require('./babel.config');
const defaults = require('./defaults');

module.exports = (isProd, isLegacy, ROOT) => {
    const babel = babelConfig(isProd, isLegacy, ROOT);

    const files = {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            context: `${ROOT}${defaults.projectFolder}`
        }
    };

    const common = [babel, files];
    const dev = [];

    return [...common, ...dev];
};
