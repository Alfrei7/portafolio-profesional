const { defineConfig } = require('@vue/cli-service')

module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Mi Aplicación Vue'
      return args
    })
  }
}