<template lang='pug'>
v-ons-page
  v-ons-toolbar(style='background: white;')
    .left
      v-ons-back-button Voltar
    .center Editar exercícios
  div.background
  div.content
    v-ons-list(style='margin-bottom: 28px;')
      v-ons-list-item(tappable)
        .center
          span.list-item__title.font1 Editando:
          span.list-item__subtitle.font2
            span(v-for='(exercise, i) in exercises' :key='i')
              span {{exercise.name}} {{ exercises.length > i ? '' : ', ' }}
            span ...
      v-ons-list-item(tappable)
        .center
          span.list-item__title.font1 Comentários do professor
          span.list-item__subtitle.font2 dicas e esclarecimentos de dúvidas comuns
      v-ons-list-item.font3
        .center
          textarea.textarea(rows='5' v-model='localForm.teacherText' style='width: calc(100% - 14px);' placeholder='Defina um texto explicativo')
    v-ons-list(style='margin-bottom: 28px;')
      v-ons-list-header Tipo
      v-ons-list-item(tappable)
        .center(style="width: 100%")
          v-ons-select(v-model="localForm.type" style="width: 100%; padding-right: 12px;")
            option(value='Repetição')
              | Repetição
            option(value='Tempo')
              | Tempo
      v-ons-list-item(style='padding-right: 12px;')
        .center(style='padding-top: 0;')
          ons-input.custom-input(:placeholder='localForm.type == "Tempo" ? "Defina o tempo do exercício" : "Defina o número de repetições em uma série"' style='width: 100%' modifier='material')
              input.text-input.text-input--material(v-model='localForm.typeData' type='text')
              span.text-input__label.text-input--material__label
    v-ons-list(style='margin-bottom: 28px;')
      v-ons-list-header Definições do exercício
      v-ons-list-item
        .center(style="width: 100%") Número de Séries
      v-ons-list-item(style='padding-right: 12px;')
        .center(style='padding-top: 0;')
          ons-input.custom-input(placeholder='Defina o número de séries do exercício' style='width: 100%' modifier='material')
              input.text-input.text-input--material(v-model='localForm.typeData' type='text')
              span.text-input__label.text-input--material__label
      v-ons-list-item
        .center(style="width: 100%") Tempo de descanso
      v-ons-list-item(style='padding-right: 12px;')
        .center(style='padding-top: 0;')
          ons-input.custom-input(placeholder='Defina o tempo de descanso das séries' style='width: 100%' modifier='material')
              input.text-input.text-input--material(v-model='localForm.typeData' type='text')
              span.text-input__label.text-input--material__label
    v-ons-row(width='100%' style='justify-content: center;')
      v-ons-row(style='justify-content: center;')
        ons-button.font-button.custom-button(@click='$router.push("/editExercises")' style='max-width: 200px; width: 100%; text-align: center;')
          | Salvar
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
flexaoRotacao = {
  name: 'Flexão com rotação',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/11_pushup_and_rotation.jpg',
  route: '/flexao-rotacao',
  isSelected: false
},
squat = {
  name: 'Squat',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/06_squat_lower_body.jpg',
  route: '/squat',
  isSelected: false
}
const objectsSelected = {
  polichinelo,
  flexaoRotacao,
  squat
}
export default {
  name: 'EditExercisesForm',
  data () {
    return {
      activeBtn: 1,
      isExpanded: false,
      exercises: objectsSelected,
      localForm: {
        teacherText: '',
        type: 'Repetição',
        typeData: '',
        series: '3',
        restTime: ''
      }
    }
  },
  mounted () { // não sei como salvar essa informação no banco!!!
    if(localForm.teacherText === '') {
      this.isExpanded = true
    }
  }
}
</script>

<style scoped>
.background {
  background-color: #eeeeee;
}
.back-button {
  color: #F05429;
}
.toolbar-button--quiet {
  color: #F05429;
}
.colorPrimary {
  color: #F05429; 
}
.font1 {
  font-family: roboto !important;
  font-size: 20px !important;
  line-height: 34px !important;
  letter-spacing: -0.84px !important;
  font-weight: 500;
}
.font2 {
  font-family: Roboto;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: -0.23px;
  font-weight: 500;
  color: #8498AE;
  text-transform: uppercase;
}
.font3 {
  font-family: Roboto;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.23px;
  font-weight: 400;
}
.list-header {
  background: linear-gradient(to right, #eeeeee 0%, #eeeeee 50%, #eeeeee 51%, #eeeeee 71%, #eeeeee 100%) !important;
}
.font-button {
  font-weight: 500 !important;
  font-family: roboto !important;
  font-size: 0.875rem !important;
}
.custom-button {
  border-radius: 25px;
  text-transform: uppercase;
  background: rgb(239,41,41) !important;
  background: linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%) !important;
}
</style>