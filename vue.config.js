const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/variables";
          @import "@/assets/styles/mixins";
        `
      },
      scss: {
        additionalData: `
          @import "@/assets/styles/variables";
          @import "@/assets/styles/mixins";
        `
      }
    }
  }
})
