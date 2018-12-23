const args = require('minimist')(process.argv.slice(2));
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const server = require('./server.config');
const cssModule = require('./css.config');
const defaults = require('./defaults');

defaults.appName = defaults.appName || defaults.projectFolder.split('/')[defaults.projectFolder.split('/').length - 1];

const ROOT = `${__dirname}/..`;
const isProd = args.mode === 'production';
const buildServer = args['test-build'];
const appName = isProd ? '[name].[chunkhash].js' : '[name].js';

if (!isProd) {
    process.traceDeprecation = true;
}

function makeConfig (isLegacy, cleanDist) {
    const appFile = `./${defaults.projectIndex}`;
    // for legacy, inject polyfills before app code
    const appFiles = isLegacy ? ['whatwg-fetch', '@babel/polyfill', appFile] : [appFile];
    const entryName = isProd ? isLegacy ? 'legacy' : 'modern' : defaults.appName;
    const outputPath = path.join(ROOT, defaults.projectDist);
    const css = cssModule(isProd, isLegacy);
    const config = {
        mode: isProd ? 'production' : 'development',
        context: `${ROOT}${defaults.projectFolder}`,
        entry: {
            [entryName]: appFiles
        },
        output: {
            filename: appName,
            path: outputPath,
            publicPath: '/'
        },
        optimization: {
            // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
            // As of webpack 4, it does a better job than (what it allows for) you to do it yourself
            splitChunks: {
                chunks: 'all',
                minChunks: 1
            },
            minimize: false, // isProd,
            minimizer: [
                new UglifyJSPlugin({
                    sourceMap: false,
                    parallel: true,
                    uglifyOptions: {
                        compress: { inline: false },
                        output: {
                            comments: false,
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

        module: {
            rules: require('./rules.config')(isProd, isLegacy, ROOT).concat(css.rules.main)
        },

        plugins: require('./plugins.config')(isProd, isLegacy, ROOT, buildServer, cleanDist).concat(css.plugins.main),

        // eval-source-map caused bugs and creates hard-to-read source code
        devtool: isProd ? 'none' : 'inline-source-map',

        devServer: server(ROOT)
    };

    return config;
    // return smp.wrap(config);
}

if (isProd) {
    // legacy first, then modern
    module.exports = [makeConfig(true, true), makeConfig(false, false)];
    // module.exports = makeConfig(true)
} else {
    module.exports = makeConfig(process.env.IE, true);
}
