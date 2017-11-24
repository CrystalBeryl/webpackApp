const webpack = require('webpack');

const vendors = [
    'react',
    'react-dom',
    'react-router',
    'moment',
    'redux',
    'immutable',
    'bootstrap'
];

module.exports = {
    output: {
        path: 'public/dist/3rd',
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        }), new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ],
};