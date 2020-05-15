import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CadastroAluno from '../views/CadastroAluno'
import EscolhaModalidade from '../views/EscolhaModalidade.vue'
import EscolhaInstrutor from '../views/EscolhaInstrutor.vue'
import CadastroProfessor from '../views/CadastroProfessor'
import CadastroProfessor1 from '../views/CadastroProfessor1'
import CadastroProfessor2 from '../views/CadastroProfessor2'
import CadastroProfessor3 from '../views/CadastroProfessor3'
import EscolhaFuncao from '../views/EscolhaFuncao'
import RedefinirSenha from '../views/RedefinirSenha'
import Planos from '../views/Planos'
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
    path: '/cadastroProfessor',
    name: 'CadastroProfessor',
    component: CadastroProfessor,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroProfessor1',
    name: 'CadastroProfessor1',
    component: CadastroProfessor1,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroProfessor2',
    name: 'CadastroProfessor2',
    component: CadastroProfessor2,
    meta: { showToolbar: false }
  },
  {
    path: '/cadastroProfessor3',
    name: 'CadastroProfessor3',
    component: CadastroProfessor3,
    meta: { showToolbar: false }
  },
  {
    path: '/escolhamodalidade',
    name: 'EscolhaModalidade',
    component: EscolhaModalidade,
    meta: { showToolbar: false }
  },
  {
    path: '/escolhainstrutor/:modalidade',
    name: 'EscolhaInstrutor',
    component: EscolhaInstrutor,
    meta: { showToolbar: false }
  },
  
  {
    path: '/escolhaFuncao',
    name: 'EscolhaFuncao',
    component: EscolhaFuncao,
    meta: { showToolbar: false }
  },
  {
    path: '/redefinirSenha',
    name: 'RedefinirSenha',
    component: RedefinirSenha,
    meta: { showToolbar: false }
  },
  {
    path: '/planos',
    name: 'Planos',
    component: Planos,
    meta: { showToolbar: false }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
