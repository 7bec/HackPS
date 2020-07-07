import Vue from 'vue'
import VueRouter from 'vue-router'
import Begin from '../views/Begin.vue'
import HomeMentor from '../views/HomeMentor.vue'
import HomeProjetoSocial from '../views/HomeProjetoSocial.vue'
import HomePS from '../views/HomePS.vue'
import ProjetosPorto from '../views/ProjetosPorto'
import ProjetoPorto from '../views/ProjetoPorto'
import NovoProjeto from '../views/NovoProjeto'
import Solicitacoes from '../views/Solicitacoes'
import Solicitacao from '../views/Solicitacao'
import MentoriaAtual from '../views/MentoriaAtual'
import InfoMentoria from '../views/InfoMentoria'
import Historico from '../views/Historico'
import VerHistorico from '../views/VerHistorico'
import FimMentoria from '../views/MentoriaFim'
import store from '../store/index.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Begin',
    component: Begin,
  
  },
  {
    path: '/NovoProjeto',
    name: 'NovoProjeto',
    component: NovoProjeto,
  
  },
  {
    path: '/projetosPorto',
    name: 'ProjetosPorto',
    component: ProjetosPorto,
  
  },
  {
  path: '/projetoPorto',
  name: 'ProjetoPorto',
  component: ProjetoPorto,
  },
  {
    path: '/infoMentoria',
    name: 'InfoMentoria',
    component: InfoMentoria,
    },
    {
      path: '/mentoriaAtual',
      name: 'MentoriaAtual',
      component: MentoriaAtual,
      },
    {
      path: '/solicitacao',
      name: 'Solicitacao',
      component: Solicitacao,
      },
  
  
  {
    path: '/solicitacoes',
    name: 'Solicitacoes',
    component: Solicitacoes,
    },
  {
    path: '/homePS',
    name: 'HomePS',
    component: HomePS
  },
  {
    path: '/homeProjetoSocial',
    name: 'HomeProjetoSocial',
    component: HomeProjetoSocial
  },
  {
    path: '/homeMentor',
    name: 'HomeMentor',
    component: HomeMentor
  },
  {
    path: '/fimMentoria',
    name: 'FimMentoria',
    component: FimMentoria
  }, 
  {
    path: '/verHistorico',
    name: 'VerHistorico',
    component: VerHistorico
  },
  {
    path: '/historico',
    name: 'Historico',
    component: Historico
  }
]

const router = new VueRouter({
  // mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})
export default router
