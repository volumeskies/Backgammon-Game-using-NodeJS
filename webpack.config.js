const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'src') + '/client.js',
        game: path.resolve(__dirname, 'src') + '/gameplay.js',
    },
    output: {
        filename: '[name].js',
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
    watch: true
}