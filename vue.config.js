module.exports = {
  publicPath: '/hangman/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/main.scss";`
      }
    }
  }
}