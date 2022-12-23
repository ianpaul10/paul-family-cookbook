const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave: true,
  publicPath: '/paul-family-cookbook/'
})
