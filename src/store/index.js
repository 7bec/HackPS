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
    selectedProjeto:'',
    authenticated:false
  },
  mutations: {
    setDocName(state,payload){
      state.docName=payload
      console.log(state.docName)
    },
    setProjeto (state, payload) {
      state.selectedProjeto = payload
    },
  },
  getters:{
    doc(state){
      return state.docName
    },
    
    getSelectedProjeto (state) {
      return state.selectedProjeto
    }
  },
  actions: {
  }
})
