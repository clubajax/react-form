const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const defaults = require('./defaults');
// this file used for testing builds on localhost

const BASE_URL = defaults.dev_server;
const PORT = defaults.testBuildPort;
const defaultHeaders = {
    connection: 'keep-alive',
    Connection: 'keep-alive',
    host: 'smartar-dev.researchnow.com',
    referer: BASE_URL,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
};

function getHeaders (h) {
    const hdr = Object.assign(h, defaultHeaders);
    delete hdr['content-encoding'];
    delete hdr['accept-encoding'];
    return hdr;
}

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function proxyApi (req, body, callback) {
    const url = `${BASE_URL}${req.url}`;

    const response = (error, res = {}, bd) => {
        if (error) {
            console.log('error', error);
            console.log('error:', res.statusCode, bd);
        } else {
            console.log('success', res.statusCode);
        }
        callback(error || bd);
    };

    const hdr = getHeaders(req.headers);

    request({
        url,
        body,
        method: req.method,
        headers: hdr,
        // without json, it is a stream
        json: true,
        // without gzip, json response gets cut off
        gzip: true
    }, response);
}

app.all('/api*', (req, res) => {
    console.log('proxy:', req.url);
    proxyApi(req, req.body, (response) => {
        if (typeof response === 'string' && !/login/.test(req.url)) {
            res.json(response);
        } else {
            res.send(response);
        }
    });
});

app.all('/*', (req, res, next) => {
    console.log('asset:', req.url);
    next();
});

// serve static files and fancy directory listings
// static files - must be defined after APIs
const staticRoot = './dist/';

app.use(express.static(staticRoot, { fallthrough: true }));

app.listen(PORT);

console.log(`ready: http://localhost:${PORT}`);

// function log(req) {
//     Object.keys(req).forEach((key) => {
//         if (typeof req[key] !== 'object' && typeof req[key] !== 'function') {
//             console.log(key, req[key]);
//         } else {
//             console.log(key, '[object]');
//         }
//     });
// }
