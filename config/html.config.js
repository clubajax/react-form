const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const defaults = require('./defaults');

let modern;
let legacy;

module.exports = function htmlConfig (isProd, ROOT, cleanDist, plugins) {

    function buildHtml () {
        const dist = path.join(ROOT, defaults.projectDist, defaults.projectHTML);
        const indexFile = path.join(ROOT, defaults.projectFolder, defaults.projectHTML);
        const cssFile = modern.modern.find(f => /\.css/.test(f));
        const cssNode = `<link rel="stylesheet" href="${cssFile}" />\n</head>`;

        // Access of an asset this way could be brittle. Not sure of the different permutations.
        // see examples below.
        console.log('\n\nmodern\n', JSON.stringify(modern, 0, 4));
        console.log('\nlegacy\n', JSON.stringify(legacy, 0, 4));

        const modernVendorItem = modern[Object.keys(modern)[1]];
        const legacyVendorItem = legacy[Object.keys(legacy)[1]];

        const modernVendor = typeof modernVendorItem === 'string' ? modernVendorItem : modernVendorItem.find(f => /\.js/.test(f));
        const legacyVendor = typeof legacyVendorItem === 'string' ? legacyVendorItem : legacyVendorItem.find(f => /\.js/.test(f));

        const modernJs = modern.modern.find(f => /\.js/.test(f));
        const legacyJs = legacy.legacy.find(f => /\.js/.test(f));

        const js = `
<script type="module" src="${modernVendor}"></script>
<script type="module" src="${modernJs}"></script>
<script nomodule src="${legacyVendor}"></script>
<script nomodule src="${legacyJs}"></script>
</body>`;

        let file = fs.readFileSync(indexFile).toString();

        file = file.replace('</head>', cssNode);
        file = file.replace('</body>', js);

        fs.writeFileSync(dist, file);
    }

    if (!isProd) {
        const html = new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        });
        plugins.push(html);
        return;
    }

    if (isProd && cleanDist) {
        // first build
        plugins.push(new StatsWriterPlugin({
            transform (data) {
                legacy = data.assetsByChunkName;
                return '';
            }
        }));
        return;
    }

    // second build
    const stats = new StatsWriterPlugin({
        transform (data) {
            modern = data.assetsByChunkName;
            return '';
        }
    });


    const progress = new ProgressPlugin((percentage) => {
        if (percentage === 1) {
            setTimeout(() => {
                buildHtml();
            }, 100);
        }
    });
    plugins.push(progress, stats);
};

// const assetsExample = {
//     modern: [
//         'modern.78042cd2af6a8d2f9068.css',
//         'modern.78042cd2af6a8d2f9068.js'
//     ],
//     'vendors~modern': 'vendors~modern.5702a20ad70e64ede402.js'
// };
// const anotherExample = {
//     modern: [
//         'modern.c76b23f5f742b1292adf.css',
//         'modern.c76b23f5f742b1292adf.js'
//     ],
//     'vendors~modern': [
//         'modern.f460d4124ac05e5e928b.css',
//         'vendors~modern.f460d4124ac05e5e928b.js'
//     ]
// };
