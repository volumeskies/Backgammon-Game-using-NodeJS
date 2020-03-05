const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/client.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
}