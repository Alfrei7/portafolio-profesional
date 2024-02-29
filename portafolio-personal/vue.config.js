const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'package-name-1',
    'package-name-2'
   
  ]
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/VueInGitHubPages/https://alfrei7.github.io/portafolio/' //nombre de tu proyecto GitHub
    : '/'
}