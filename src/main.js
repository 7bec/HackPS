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
import FieryVue from 'fiery-vue'
import StarRating from 'vue-star-rating'
import VueMask from 'v-mask'
import jQuery from 'jquery'
global.jQuery = jQuery

Vue.use(VueMask);
Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
Vue.use(FieryVue)
Vue.component('star-rating', StarRating);
Vue.config.productionTip = false

new Vue({
  router,
  fiery: true, 
  store,
  render: h => h(App),
  vuetify,
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyBq5yzaM046cy7YM7f_BiOsktmD--NJtYM",
      authDomain: "hackps-dfd92.firebaseapp.com",
      databaseURL: "https://hackps-dfd92.firebaseio.com",
      projectId: "hackps-dfd92",
      storageBucket: "hackps-dfd92.appspot.com",
      messagingSenderId: "750335257696",
      appId: "1:750335257696:web:eac637993f8efcce6e6705",
      measurementId: "G-20NWN22VK7"

    })
  }
}).$mount('#app')
