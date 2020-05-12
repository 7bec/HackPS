import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CadastroAluno from '../views/CadastroAluno'
import EscolhaModalidade from '../views/EscolhaModalidade.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { showToolbar: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroaluno',
    name: 'CadastroAluno',
    component: CadastroAluno,
    meta: { showToolbar: false }
  },
  {
    path: '/escolhamodalidade',
    name: 'EscolhaModalidade',
    component: EscolhaModalidade,
    meta: { showToolbar: false }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
