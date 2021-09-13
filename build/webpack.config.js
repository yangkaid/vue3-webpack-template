const path = require('path')
module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: './js/[name].[chunkhash].js',
        publicPath: './'
    }
}