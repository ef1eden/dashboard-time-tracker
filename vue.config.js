const { defineConfig } = require("@vue/cli-service");

module.exports = {
  chainWebpack: config =>
  config
    .plugin('feature-flags')
    .use(require('webpack').DefinePlugin, [{
      __VUE_PROD_DEVTOOLS__: 'true'
    }])
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