<template lang='pug'>
  v-ons-page
    div.background
    div.content
      v-ons-row(width='100%' vertical-align='top')
        v-row(no-gutters style='padding: 0 16px; width: 100%; justify-content: space-between')
          v-col(cols='auto')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
          v-col(style='position: relative; text-align: center; align-self: center;')
            div.font1 <b>Novo treino</b>
          v-col(cols='auto' style='opacity: 0;')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
      v-divider(style='margin-top: 16px')
      v-ons-row(width='100%' style='padding: 24px 0 8px 0;')
        v-row.font3(no-gutters style='padding: 0 16px; width: 100%;')
          v-col Exercícios (8)
        v-row.font4(no-gutters style='padding: 4px 16px 0 16px;') Crie ou adicione exercícios predefinidos
      v-ons-row(width='100%' style='padding: 0 0 22px 0')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col(cols='12')
            v-tabs(v-model='tab' background-color='#FAFAFA' center-active)
              v-tab(v-for='(profile, n) in training.profiles' :key='n' :href="`#tab-${n}`") Perfil {{returnLetter(n)}}
            v-tabs-items(v-model='tab' style='background-color: #FAFAFA')
              v-tab-item(v-for='(profile, i) in training.profiles' :key='i' :value='`tab-${i}`')
                v-ons-row(width='100%' style='padding: 8px 16px 22px 16px')
                  v-row(no-gutters style='width: 100%; margin-bottom: 4px;')
                    v-col(v-for='(exercise, j) in profile.exercises' :key='j' cols='6' style='padding: 2px 4px;')
                      v-card.boxDone(outlined style='height: 100%; overflow: hidden; position: relative; border-radius: 10px; filter: drop-shadow(0px 10px 5px rgba(27, 28, 32, 0.102));')
                        v-img(@click='selectItem(i, j, true)' height='150' :src='exercise.image' :style="exercise.isSelected ? { filter: 'sepia(100%) brightness(100%) grayscale(60%) hue-rotate(90deg) saturate(300%)' } : {}" style='border-bottom-left-radius: 0px; border-bottom-right-radius: 0px')
                        v-container(@click='selectItem(i, j, true)' style='padding-top: 16px; padding-bottom: 8px; width: 100%; background: white;')
                          v-layout(column)
                            v-flex(xs12)
                              h5(style='margin: 0; font-weight: 700; font-size: 14.5px; line-height: 14.5px; letter-spacing: -0.83px; color: #334856;') {{exercise.name}}
                        div(style='background-color: white; height: 38px; width: 38px; position: absolute; top: 126px; left: 50%; transform: translate(-50%, 0); -webkit-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); -moz-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); border-radius: 50%;')
                          div(style='height: 100%; width: 100%; position: relative; padding: 3px;')
                            label.checkbox.checkbox--material(style='background-color: none; overflow: visible; height: 100%; width: 100%;')
                              input.checkbox__input.checkbox--material__input(v-model='exercise.isSelected' v-on:change="selectItem(i, j, false)" type='checkbox')
                              .checkbox__checkmark.checkbox--material__checkmark
                        v-ons-ripple(color='rgba(204, 204, 204, 0.2)')
    v-ons-fab(@click='editExercises()' v-if='isAnyoneSelected' position="bottom right" style='background-color: #303F9F; margin-bottom: 35px;')
      v-icon(color='#fff' style='margin-bottom: 4px;') mdi-pencil
    div.tabbar
      v-bottom-navigation(:value='activeBtn' grow color='#f05429')
        v-btn
          span Início
          v-icon mdi-home
        v-btn
          span Treinos
          v-icon mdi-weight-lifter
        v-btn
          span Perfil
          v-icon mdi-account
</template>

<script>
const polichinelo = {
  name: 'Polichinelo',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/01_-jumping_jacks.jpg',
  route: '/polichinelo',
  isSelected: false
},
corridaParada = {
  name: 'Corrida parada',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/09_high_knees_lower_body.jpg',
  route: '/corrida-parada',
  isSelected: false
},
alongTorax = {
  name: 'Alongamento Tórax',
  image: 'https://1.bp.blogspot.com/-0B9qDWCizrY/UJZjQb7SuRI/AAAAAAAAIvI/kQbfSw2xtvU/s1600/Alongamento.jpeg',
  route: '/alongamento-torax',
  isSelected: false
}
const flexaoBraco = {
  name: 'Flexão de Braço',
  image: 'https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2015/11/flexao-exercicios-para-fazer-em-casa-2.jpg&format=webp&hash=ee7bc3379602eaaf7a39993f6ea4af791fa5da97dbc83713d980bf9670e1cc28',
  route: '/flexao-braco',
  isSelected: false
},
flexaoRotacao = {
  name: 'Flexão com rotação',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/11_pushup_and_rotation.jpg',
  route: '/flexao-rotacao',
  isSelected: false
},
abdominal = {
  name: 'Abdominal',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/04_abdominal_crunch_core.jpg',
  route: '/abdominal',
  isSelected: false
}
const agachamentoParede = {
  name: 'Agachamento na Parede',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/02_wall_sit_lower_body.jpg',
  route: '/agachamento-parede',
  isSelected: false
},
squat = {
  name: 'Squat',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/06_squat_lower_body.jpg',
  route: '/squat',
  isSelected: false
},
agachamentoUnilateral = {
  name: 'Agachamento Unilateral',
  image: 'https://files.incrivel.club/files/news/part_28/283360/9320810-489610-20-0-1500447708-1500447716-650-1-1500447716-650-cdbb8359d9-1590647493.jpg',
  route: '/agachamento-unilateral',
  isSelected: false
}
const esteira = {
  name: 'Esteira',
  image: 'https://images-americanas.b2w.io/produtos/01/00/img/1584690/3/1584690340_1GG.jpg',
  route: '/esteira',
  isSelected: false
}
const baseExercises = {
  polichinelo,
  corridaParada,
  alongTorax,
  flexaoBraco,
  flexaoRotacao,
  abdominal,
  agachamentoParede,
  squat,
  agachamentoUnilateral,
  esteira,
}
import firebase from 'firebase'
export default {
  name: 'Training',
  data () {
    return {
      aux: 0,
      tab: 'tab-0',
      activeBtn: 1,
      isAnyoneSelected: false,
      objectsSelected: [],
      sessions: [],
      training: {
        name: 'Nome Criado',
        profiles: [
          {
            exercises: []
          }
        ]
      },
      exercisesFiltered: {}
    }
  },
  mounted () {
    this.training.profiles[0].exercises = [
      {
        name: 'Polichinelo',
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/01_-jumping_jacks.jpg',
        route: '/polichinelo',
        isSelected: false
      },
      {
        name: 'Corrida parada',
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/09_high_knees_lower_body.jpg',
        route: '/corrida-parada',
        isSelected: false
      },
      {
        name: 'Flexão de Braço',
        image: 'https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2015/11/flexao-exercicios-para-fazer-em-casa-2.jpg&format=webp&hash=ee7bc3379602eaaf7a39993f6ea4af791fa5da97dbc83713d980bf9670e1cc28',
        route: '/flexao-braco',
        isSelected: false
      },
    ]
    let exercises1 = [
      {
        name: 'Alongamento Tórax',
        image: 'https://1.bp.blogspot.com/-0B9qDWCizrY/UJZjQb7SuRI/AAAAAAAAIvI/kQbfSw2xtvU/s1600/Alongamento.jpeg',
        route: '/alongamento-torax',
        isSelected: false
      },
      {
        name: 'Flexão com rotação',
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/11_pushup_and_rotation.jpg',
        route: '/flexao-rotacao',
        isSelected: false
      }
    ]
    this.training.profiles[1] = { exercises: exercises1 }
    let exercises2 = [
      {
        name: 'Abdominal',
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/04_abdominal_crunch_core.jpg',
        route: '/abdominal',
        isSelected: false
      },
      {
        name: 'Agachamento na Parede',
        image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/02_wall_sit_lower_body.jpg',
        route: '/agachamento-parede',
        isSelected: false
      }
    ]
    this.training.profiles[2] = { exercises: exercises2 }
  },
  methods: {
    selectItem (profileIndex, exerciseIndex, model) {
      console.log(profileIndex, exerciseIndex)
      if (model) {
        this.training.profiles[profileIndex].exercises[exerciseIndex].isSelected = !this.training.profiles[profileIndex].exercises[exerciseIndex].isSelected
        console.log(this.training.profiles[profileIndex].exercises[exerciseIndex].isSelected)
        let aux = this.tab
        this.tab = ''
        this.tab = aux
      }
      for(let j = 0; this.training.profiles.length > j; j++) {
        for (let i = 0; i < this.training.profiles[j].exercises.length; i++) {
          if (this.training.profiles[j].exercises[i].isSelected) {
            this.isAnyoneSelected = true
            return
          }
        }
      }
      console.log('não tem')
      this.isAnyoneSelected = false
    },
    toggleSelectItem (tabIndex, exerciseIndex) {
      console.log(tabIndex)
      console.log(exerciseIndex)
      this.profiles[tabIndex][exerciseIndex].isSelected = !this.profiles[tabIndex][exerciseIndex].isSelected
      console.log(this.profiles[tabIndex][exerciseIndex])
      for(let i = 0; this.profiles[tabIndex].length > i; i++) { // percorre o array para ver se tem algum selecionado
        if (this.profiles[tabIndex][i].isSelected) {
          this.isAnyoneSelected = true
          return
        }
      }
      this.isAnyoneSelected = false
    },
    returnLetter (j) {
      return String.fromCharCode(j+1+64)
    },
    editExercises () {
      for(let j = 0; this.training.profiles.length > j; j++) {
        for (let i = 0; i < this.training.profiles[j].exercises.length; i++) {
          if (this.training.profiles[j].exercises[i].isSelected) { // deveríamos ter um jeito de pegar o id do exercício selecionado!!! (firebase)
            this.objectsSelected.push(this.training.profiles[j].exercises[i])
          }
        }
      }
      console.log(this.objectsSelected) // OBJETO A MANDAR PARA OUTRA TELA DE EDIÇÃO
      this.$router.push("/editExercisesForm")
    }
  }
}
</script>

<style scoped>
.background {
  background-color: rgb(250, 250, 250);
}
.content {
  padding: 32px 0 40px 0;
}
.font1 {
  font-family: roboto !important;
  font-size: 20px !important;
  line-height: 20px !important;
  letter-spacing: -0.84px !important;
  color: #172B3E;
}
.font2 {
  font-family: Roboto;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.84px;
  font-weight: 700;
  color: #7d8184;
}
.font3 {
  font-family: Roboto;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.84px;
  font-weight: 700;
  color: rgb(202, 33, 33);
}
.font4 {
  font-family: Roboto;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.23px;
  font-weight: 500;
  color: #8498AE;
}
.font5 {
  font-family: roboto !important;
  font-size: 16px !important;
  font-weight: 700;
  line-height: 16px !important;
  letter-spacing: -0.84px !important;
  color: #172B3E;
}
.text-input--material__label--active {
  color: #f05429;
}
.text-input--material:focus {
  background-image: linear-gradient(#f05429, #f05429), linear-gradient(to top, transparent 1px, #afafaf 1px);
}
.list-custom-header {
  font-family: 'Roboto', 'Noto', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  color: #757575;
  font-size: 14px;
  margin: 0;
  padding: 4px 0 4px 16px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
}
ons-fab.fab, ons-speed-dial-item.fab, button.fab {
    background-color: #4CAF50;
}
.boxDone {
  position: relative;
  display: inline-block;
}
.checkbox--material__checkmark:before {
  border-radius: 50%;
  height: 32px;
  width: 32px;
  border: 3px solid #4CAF50;
}
.checkbox--material__input:before {
  top: 20%;
  left: 20%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 0 11px #717171;
  box-sizing: border-box;
  background-color: #717171;
}
.checkbox__checkmark {
  height: 32px;
  width: 32px;
}
:checked + .checkbox--material__checkmark:before {
  border: 2px solid #4CAF50;
  background-color: #4CAF50;
  transition: background-color 0.1s linear, border-color 0.1s linear;
}
:checked + .checkbox--material__checkmark:after {
  position: absolute;
  top: 35%;
  left: 27%;
  transition: transform 0.2s ease 0.2s;
  width: 15px;
  height: 7.5px;
  transform: scale(1) rotate(-45deg);
  border-width: 3px;
}
.seeMore {
  font-family: Roboto;
  width: 100%;
  margin: 0 16px;
  padding: 8px 0 28px 0;
  color: rgba(240, 84, 41, 0.87);
  line-height: 15px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.84px;
  border: solid;
  border-width: thin 0 0 0;
  border-color: rgba(69, 69, 69, 0.12);
}
</style>