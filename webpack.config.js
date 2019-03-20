const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, // ? posle 's' govori da je s opciono u prevodu na taj nacim gledace i css i scss fajlove, daje pisalo scss ne bi gledao css fajloveß
            // posto imamo dva loadera ne mozemo kao kod babela da definisemo loader vec moramo da koristimo use
            use: [
                'style-loader',//creates style nodes from JS strings
                'css-loader',//translates CSS into CommonJS
                'sass-loader'//compiles Sass to CSS
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

//loader
// loader lets you customize the behevior of webpack when it loads a given file

