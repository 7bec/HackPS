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

Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
Vue.use(FieryVue)
Vue.config.productionTip = false

new Vue({
  router,
  fiery: true, 
  store,
  render: h => h(App),
  vuetify,

  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyCQrSV7RD_Qc7iQ7AjACGD_6ex0ER8mMck",
      authDomain: "pepfit-bcbf5.firebaseapp.com",
      databaseURL: "https://pepfit-bcbf5.firebaseio.com",
      projectId: "pepfit-bcbf5",
      storageBucket: "pepfit-bcbf5.appspot.com",
      messagingSenderId: "239385140693",
      appId: "1:239385140693:web:fbf512b7884c7665fc315c",
      measurementId: "G-YEBDKB814T"

    })
  }
}).$mount('#app')
