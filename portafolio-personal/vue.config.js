const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'package-name-1',
    'package-name-2'
   
  ]
})