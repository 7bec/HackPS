import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    isWithEmail: false,
    docName:null,
    authenticated:false
  },
  mutations: {
    setUser(state,payload){
      state.user=payload
    },
    setDocName(state,payload){
      state.docName=payload
      console.log(state.docName)
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload){
      state.error = payload
    },
    clearError(state){
      state.error = null
    },
    isWithEmail(state,payload){
      state.isWithEmail = payload
    },
    isAuthenticated(state,payload){
      state.authenticated= payload
      console.log(this.state.authenticated)
    }
  },
  getters:{
    user (state){
      return state.user
    },
    loading(state){
      return state.loading
    },
    doc(state){
      return state.docName
    },
    isWithEmail(state){
      return state.isWithEmail
    },
    authenticated(state){
      return state.user !== null && state.user !== undefined
    }
  },
  actions: {
    signUserUp ({commit}, payload){
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: firebase.auth().currentUser.uid,
            photoUrl: firebase.auth().currentUser.photoURL,
            name: firebase.auth().currentUser.displayName,
            email: firebase.auth().currentUser.email
          }
          firebase.firestore().collection("usuarios").doc(newUser.id).set({
            name: newUser.name,
            function:newUser.function
          
          })
          .then(function() {
            console.log("Document successfully written!");


          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
          
          commit('setUser', newUser )
          commit('isAuthenticated',true)
        } 
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    },
    signUserIn({commit}, payload){
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: firebase.auth().currentUser.uid,
            photoUrl: firebase.auth().currentUser.photoURL,
            name: firebase.auth().currentUser.displayName,
            email: firebase.auth().currentUser.email
          }
          commit('setLoading', false)
          commit('isWithEmail', true)
          
          firebase.firestore().collection("usuarios").doc(newUser.id).set({
            name: newUser.name
          })
          .then(function() {
            commit('isAuthenticated',true)
            

            console.log("Document successfully written!");
            // router.push('/homeAluno')
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
          commit('setUser', newUser )
          
          
        } 
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )

      
    },
     signUserOut({commit}){
      commit('setUser',null)
      commit('setLoading', false)
      commit('clearError')
      firebase.auth().signOut()
      router.push('/login')
    },
    clearError({commit}){
      commit('clearError')
    },
    signUserGoogle({commit}){
      const googleProvider = new firebase.auth.GoogleAuthProvider()
      googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithRedirect(googleProvider)
      commit('isAuthenticated',true)
      commit('isWithEmail',false)

    },
    
    signUserFacebook({commit}){
      const facebookProvider = new firebase.auth.FacebookAuthProvider();
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithRedirect(facebookProvider)
      commit('isAuthenticated',true)
      
    }
  }
})
