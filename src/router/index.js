import Vue from 'vue'
import VueRouter from 'vue-router'
import Begin from '../views/Begin.vue'
import HomeAluno from '../views/HomeAluno.vue'
import HomeProfessor from '../views/HomeProfessor.vue'
import ProfessorProfile from '../views/ProfessorProfile'
import Settings from '../views/Settings.vue'
import Login from '../views/Login.vue'
import CadastroAluno from '../views/CadastroAluno'
import EscolhaModalidade from '../views/EscolhaModalidade.vue'
import EscolhaInstrutor from '../views/EscolhaInstrutor.vue'
import Instrutor from '../views/Instrutor.vue'
import CadastroProfessor from '../views/CadastroProfessor'
import CadastroProfessor4 from '../views/CadastroProfessor4'
import CadastroProfessor2 from '../views/CadastroProfessor2'
import CadastroProfessor3 from '../views/CadastroProfessor3'
import CadastroAluno4 from '../views/CadastroAluno4'
import CadastroAluno2 from '../views/CadastroAluno2'
import CadastroAluno3 from '../views/CadastroAluno3'
import EscolhaFuncao from '../views/EscolhaFuncao'
import RedefinirSenha from '../views/RedefinirSenha'
import Planos from '../views/Planos'
import Training from '../views/training/Training'
import CreateTraining from '../views/training/CreateTraining'
import EditExercises from '../views/training/EditExercises'
import AddExercise from '../views/training/AddExercise'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Begin',
    component: Begin,
    meta: { 
      showToolbar: false,
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { 
      showToolbar: false,
      requiresAuth: false
    }
  },
  {
    path: '/homealuno',
    name: 'HomeAluno',
    component: HomeAluno,
    meta: { showToolbar: true,
            requiresAuth: true
    }
  },
  {
    path: '/homeprofessor',
    name: 'HomeProfessor',
    component: HomeProfessor,
    meta: { showToolbar: true,
      requiresAuth: true
    }
  },
  {
    path: '/professorprofile/:idInstrutor',
    name: 'ProfessorProfile',
    component: ProfessorProfile,
    meta: { showToolbar: true,
      requiresAuth: true
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { showToolbar: true,
      requiresAuth: true
    }
  },
  {
    path: '/cadastroAluno',
    name: 'CadastroAluno',
    component: CadastroAluno,
    meta: { showToolbar: true,
      requiresAuth: false
    } 
  },
  {
    path: '/cadastroAluno4',
    name: 'CadastroAluno4',
    component: CadastroAluno4,
    meta: { showToolbar: false,
      requiresAuth: false
    }
  },
  {
    path: '/cadastroAluno2',
    name: 'CadastroAluno2',
    component: CadastroAluno2,
    meta: { showToolbar: false,
      requiresAuth: false
    }
  },
  {
    path: '/cadastroAluno3',
    name: 'CadastroAluno3',
    component: CadastroAluno3,
    meta: { showToolbar: false,
      requiresAuth: false
    }
  },
  {
    path: '/cadastroProfessor',
    name: 'CadastroProfessor',
    component: CadastroProfessor,
    meta: { showToolbar: false,
      requiresAuth: false
    }
  },
  {
    path: '/cadastroProfessor4',
    name: 'CadastroProfessor4',
    component: CadastroProfessor4,
    meta: { showToolbar: false,
      requiresAuth: false
    }
  },
  {
    path: '/cadastroProfessor2',
    name: 'CadastroProfessor2',
    component: CadastroProfessor2,
    meta: { showToolbar: false,
      requiresAuth: false
    }
  },
  {
    path: '/cadastroProfessor3',
    name: 'CadastroProfessor3',
    component: CadastroProfessor3,
    meta: { showToolbar: false,
      requiresAuth: false
    }
  },
  {
    path: '/escolhamodalidade',
    name: 'EscolhaModalidade',
    component: EscolhaModalidade,
    meta: { showToolbar: false,
      requiresAuth: true
    }
  },
  {
    path: '/escolhainstrutor/:modalidade',
    name: 'EscolhaInstrutor',
    component: EscolhaInstrutor,
    meta: { showToolbar: false,
      requiresAuth: true
    }
  },
  {
    path: '/instrutor/:idInstrutor',
    name: 'Instrutor',
    component: Instrutor,
    meta: { showToolbar: false,
      requiresAuth: true
    }
  },
  
  {
    path: '/escolhaFuncao',
    name: 'EscolhaFuncao',
    component: Begin,
    meta: { showToolbar: false,
      requiresAuth: true
    }
  },
  {
    path: '/redefinirSenha',
    name: 'RedefinirSenha',
    component: RedefinirSenha,
    meta: { showToolbar: false,
      requiresAuth: false
    }
  },
  {
    path: '/planos',
    name: 'Planos',
    component: Planos,
    meta: { showToolbar: false,
      requiresAuth: true
    }
  },
  {
    path: '/training',
    name: 'Training',
    component: Training,
    meta: { showToolbar: false,
      requiresAuth: true
    }
  },
  {
    path: '/createTraining',
    name: 'CreateTraining',
    component: CreateTraining,
    meta: { showToolbar: false,
      requiresAuth: true
    }
  },
  {
    path: '/addExercise',
    name: 'AddExercise',
    component: AddExercise,
    meta: { showToolbar: false }
  },
  {
    path: '/editExercises',
    name: 'EditExercises',
    component: EditExercises,
    meta: { showToolbar: false }
  }
]

const router = new VueRouter({
  // mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
   // dev
  console.log('router ' +store.getters.authenticated)
  if (to.path !== '/' && to.path !== '/login' && to.path !== '/signup' &&  to.path !== '/redefinirSenha' &&
  to.path !== '/cadastroProfessor' &&  to.path !== '/cadastroProfessor1' && to.path !== '/cadastroProfessor2' &&to.path !== '/cadastroProfessor3' && to.path !== '/cadastroProfessor4'&&
  to.path !== '/cadastroAluno' &&  to.path !== '/cadastroAluno1' && to.path !== '/cadastroAluno2' &&to.path !== '/cadastroaluno3' && to.path !== '/cadastroAluno4'   &&
  !store.getters.authenticated) {
     
    console.log('router from.name: ' + from.name)
    next()
  } else if ((to.path === '/' || to.path === '/login' || to.path === '/begin'  )&& store.getters.authenticated) {
    console.log('here: ' + from.name)
   
  } else {
    console.log('dawd')
    next()
  }

})
export default router
