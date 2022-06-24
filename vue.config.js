const { defineConfig } = require("@vue/cli-service");

module.exports = {
  chainWebpack: config =>
    config.plugin('feature-flags').tap(args => {
      args[0].__VUE_PROD_DEVTOOLS__ = JSON.stringify(true)
      return args
    })
 }

module.exports = defineConfig({
  transpileDependencies: true,
});

const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/variables.scss";`
      }
    }
  }
};