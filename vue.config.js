module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  publicPath: '',

  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  devServer: {
      proxy: 'https://eu117.chat-api.com/instance146651/',
  }
}
