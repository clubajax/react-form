const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function createCss (isProd, isLegacy) {
    const plugins = {
        main: new MiniCssExtractPlugin({
            filename: isProd ? (isLegacy ? 'legacy.[chunkhash].css' : 'modern.[chunkhash].css') : 'style.css'
        })
    };

    const rules = {
        main: {
            test: /\.s?css$/,
            use: [
                isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                },
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }
    };
    return {
        plugins,
        rules
    };
};
