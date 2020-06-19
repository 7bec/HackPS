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
      apiKey: "AIzaSyCQrSV7RD_Qc7iQ7AjACGD_6ex0ER8mMck",
      authDomain: "pepfit-bcbf5.firebaseapp.com",
      databaseURL: "https://pepfit-bcbf5.firebaseio.com",
      projectId: "pepfit-bcbf5",
      storageBucket: "pepfit-bcbf5.appspot.com",
      messagingSenderId: "239385140693",
      appId: "1:239385140693:web:fbf512b7884c7665fc315c",
      measurementId: "G-YEBDKB814T"

    })
    

    firebase.auth().onAuthStateChanged(function(user) {

      console.log(firebase.auth().currentUser.email)
      if (user) {
        const newUser = {
          id: firebase.auth().currentUser.uid,
          photoUrl: firebase.auth().currentUser.photoURL,
          name: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email
        }
        store.commit('setUser', newUser)
        firebase.firestore().collection('usuarios').where('email', '==', firebase.auth().currentUser.email).get()
          .then(function(querySnapshot) {
            var funcao = null
            if (querySnapshot.empty == false) {
              querySnapshot.forEach(function(doc){
                funcao = doc.data().function
               
              })
            }
            console.log(funcao)
          })
        // if(firebaseUser.function=='professor'){
        //   router.push('/homeProfessor')
        // }
        // else{
        //   router.push('/homeAluno')
        // }
      } else {
        // No user is signed in.
        console.log('Não tem conta')
        router.push('/')

      }

    })
  }
}).$mount('#app')
