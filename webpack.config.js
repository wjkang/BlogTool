var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        background: './background.js',
        content:'./content.js',
        jquery:["jquery"]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015','stage-3']
                }
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: ["common","jquery","load"],
            minChunks:2
        }),
         new CopyWebpackPlugin([
            { from: 'manifest.json'},
            { from: 'icon.png'},
            { from: 'background.html'},
         ])
    ]
};