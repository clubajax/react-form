const path = require('path');
const defaults = require('./defaults');

const { appName } = defaults;
const libs = `${appName},${defaults.babelizeNodeModules}`.split(',');
const libsToBabelize = new RegExp(libs.filter(lib => lib.indexOf(appName) === -1).join('|'));

module.exports = (isProd, isLegacy, ROOT) => {
    const IS_IE = isLegacy;

    const browsers = isProd
        ? ['Chrome >= 68', 'Safari >= 12', 'iOS >= 11', 'Firefox >= 62', 'Edge >= 15']
        : ['Chrome >= 68', 'Firefox >= 62'];

    if (IS_IE) {
        browsers.push('ie >= 11');
    }

    const babelConfig = {
        debug: true,
        // false prevents babel from transforming import/exports
        // but false also breaks ui-shared
        // modules: false,

        targets: { browsers }
    };

    const prodPlugs = [
        // examples:
        // 'lodash',
        // 'date-fns',
    ];

    const devPlugs = ['react-hot-loader/babel'];

    const commonPlugs = ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties'];
    const babelPlugins = (isProd ? prodPlugs : devPlugs).concat(commonPlugs);

    if (IS_IE) {
        // correct version is important for web-components
        // not needed if not supporting IE
        babelPlugins.push('@babel/plugin-transform-classes', '@babel/plugin-transform-async-to-generator');
    }

    // build an array of all modules that should be included
    const included = libs.map((lib) => {
        let filepath;
        if (lib.indexOf(appName) > -1) {
            filepath = `./${lib}`;
        } else if (/\//.test(lib)) {
            filepath = `./${lib}`;
        } else {
            filepath = `./node_modules/${lib}`;
        }
        return path.join(ROOT, filepath);
    });

    return {
        test: /\.(js|jsx)$/,
        // exclude works best as a function
        exclude (filepath) {
            if (!this.babelizeLogged) {
                this.babelizeLogged = true;
                console.log('babelizing...');
            }

            if (/node_modules/.test(filepath) && !libsToBabelize.test(filepath)) {
                return true;
            }

            return false;
        },
        // include works best as an array
        // note that include AND exclude need to be used together to properly parse a node_module
        include: included,
        use: {
            loader: 'babel-loader',
            options: {
                babelrc: false,
                presets: ['@babel/react', ['@babel/preset-env', babelConfig]],
                plugins: babelPlugins
            }
        }
    };
};

// assigned via browser target:
//
// PROD (minus IE):
// transform-function-name { "edge":"15" }
// transform-dotall-regex { "chrome":"60", "edge":"15", "firefox":"54", "ios":"11", "safari":"11" }
// transform-destructuring { "edge":"15" }
// proposal-async-generator-functions { "chrome":"60", "edge":"15", "firefox":"54", "ios":"11", "safari":"11" }
// proposal-object-rest-spread { "edge":"15", "firefox":"54", "ios":"11", "safari":"11" }
// proposal-unicode-property-regex { "chrome":"60", "edge":"15", "firefox":"54", "ios":"11", "safari":"11" }
// proposal-json-strings { "chrome":"60", "edge":"15", "firefox":"54", "ios":"11", "safari":"11" }
// proposal-optional-catch-binding { "chrome":"60", "edge":"15", "firefox":"54", "ios":"11", "safari":"11" }

// DEV:
// transform-dotall-regex { "firefox":"62" }
// syntax-async-generators { "chrome":"68", "firefox":"62" }
// syntax-object-rest-spread { "chrome":"68", "firefox":"62" }
// proposal-unicode-property-regex { "firefox":"62" }
// proposal-json-strings { "chrome":"68", "firefox":"62" }
// syntax-optional-catch-binding { "chrome":"68", "firefox":"62" }
