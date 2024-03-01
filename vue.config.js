const { defineConfig } = require('@vue/cli-service');

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}