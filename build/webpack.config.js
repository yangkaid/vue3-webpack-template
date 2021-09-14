const path = require('path')
const webpack = require('webpack')
const envMode = process.env.envMode
console.log(envMode)
require('dotenv').config({ path: `.env.${envMode}`})
const prefix = /^VUE_APP_/
let env = {}
// 只有NODE_ENV,BASE_URL和以VUE_APP_开头的变量将通过webpack.DefinePlugin静态的嵌入到客户端代码中
for (const key in process.env) {
    if (key === 'NODE_ENV' || key === "BASE_URL" || prefix.test(key)) {
        env[key] = JSON.stringify(process.env[key])
    }
}
console.log(env);
module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: './js/[name].[chunkhash].js',
        publicPath: './'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ...env
            }
        })
    ]
}