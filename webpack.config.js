var path = require('path');
var config = {
    entry: './public/app.jsx',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            Greeter: path.resolve(__dirname, 'public/components/Greeter'),
            GreeterMessage: path.resolve(__dirname, 'public/components/GreeterMessage'),
            GreeterHeading: path.resolve(__dirname, 'public/components/GreeterHeading'),
            GreeterForm: path.resolve(__dirname, 'public/components/GreeterForm')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    }

}

module.exports = config;
