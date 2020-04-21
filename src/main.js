import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
// Webpack CSS import
import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import vuetify from './plugins/vuetify';

Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,

  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyArRl2HUZe73-3cFoEereimC3eNiDaDuSw",
      authDomain: "pep-vue.firebaseapp.com",
      databaseURL: "https://pep-vue.firebaseio.com",
      projectId: "pep-vue",
      storageBucket: "pep-vue.appspot.com",
      messagingSenderId: "888940090859",
      appId: "1:888940090859:web:7e6b8953ef4df56f83b5ae",
      measurementId: "G-RJ9VYXGW96"

    })
  }
}).$mount('#app')
