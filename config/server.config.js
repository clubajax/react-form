const defaults = require('./defaults');

module.exports = function server (ROOT) {
    let api = process.env.API === 'dev' ? defaults.dev_server : process.env.API === 'local' ? defaults.local_server : process.env.API;


    if (!/http/.test(api)) {
        api = `https://${api}`;
    }
    console.log('api:', api);
    return {
        // messages for errors or HMR (quite verbose)
        // Possible values are none, error, warning or info (default).
        clientLogLevel: 'none',

        host: '0.0.0.0',
        contentBase: `${ROOT}dist`,
        historyApiFallback: true,
        // if not true, css will trigger a full page reload
        hot: true,

        proxy: {
            '/api': {
                target: api,
                changeOrigin: true,
                headers: {
                    Referer: api,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
                }
            }
        }
    };
};
