const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function plugins (isProd) {
    const devFiles = [
        {
            from: '../dev-data',
            to: 'dev-data'
        }
    ];

    const commonFiles = [
        {
            from: '../node_modules/@clubajax/promise-polyfill/index.js',
            to: 'promise-polyfill.js'
        }, {
            from: '../public',
            to: 'public'
        }, {
            from: '../public/logo-first-financial.svg',
            to: 'logo-first-financial.svg'
        }
    ];

    const prodFiles = [
        {
            from: '../dev-data',
            to: 'dev-data'
        }
    ];

    let files = [];
    if (isProd) {
        files = [...commonFiles, ...prodFiles];
    } else {
        files = [...commonFiles, ...devFiles];
    }
    return new CopyWebpackPlugin(files, { debug: 'info' });
};
