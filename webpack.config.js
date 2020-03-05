const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src') + '/client.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['.js', '.ts']
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