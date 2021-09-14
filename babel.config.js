// babel.config.js
const presets = [
  ["@babel/preset-env", {
      "useBuiltIns": 'usage', // 这里配置usage 会自动根据你使用的方法以及你配置的浏览器支持版本引入对于的方法。
      "corejs": "^3.17.3" // 指定 corejs 版本 
  }]
]
const plugins = [
]
module.exports = {
  plugins,
  presets

}
