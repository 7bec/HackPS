<template lang='pug'>
  
  v-ons-page
    div.background
    div.content
      v-ons-row(width='100%' vertical-align='top')
        v-row(no-gutters style='padding: 0; width: 100%; justify-content: space-between')
          v-col(cols='auto')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
          v-col(style='position: relative; text-align: center; align-self: center;')
            div.font1 <b>Novo treino</b>
          v-col(cols='auto' style='opacity: 0;')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
      v-divider(style='margin-top: 16px')
      v-ons-row(width='100%' style='padding: 16px 0 0 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col(cols='auto' style='margin-bottom: 16px;')  Nome do Treino
          v-col(cols='12')
            ons-input.custom-input(placeholder='Escolha o nome do seu treino' style='width: 100%' modifier='material')
              input.text-input.text-input--material(type='text')
              span.text-input__label.text-input--material__label
      v-ons-row(width='100%' style='padding: 24px 0 8px 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col Exercícios (8)
          v-col(cols='auto' style='font-weight: 500; font-size: 14px;')
            span Adicionar novo
            span
              v-icon(small color='rgb(202, 33, 33)') mdi-plus
        v-row.font4(no-gutters style='padding: 4px 0 0 0;') Crie ou adicione exercícios predefinidos
      v-ons-row(width='100%' style='padding: 0 0 16px 0')
        v-row(style='padding: 0; width: 100%;')
          v-col(cols='6' style='padding: 0;')
            h3.list-custom-header AQUECIMENTO
          v-col(cols='6' style='padding: 0; align-self: center; text-align: right; padding-right: 16px;')
            v-icon(small style='margin-right: 8px;') mdi-pencil
            v-icon mdi-drag-horizontal-variant
          v-ons-list(modifier='material' style='padding: 0; width: 100%;')
            v-ons-list-item(v-for='i in 2' tappable)
              .left
                v-avatar(tile size='48')
                  img(src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/01_-jumping_jacks.jpg')
              .center
                v-row(no-guters)
                  v-col(cols='12')
                    div.font5 Exercício Aquecimento {{i}}
              .right
                v-icon(medium color='rgb(202, 33, 33)') mdi-import
        v-row(style='padding: 0; width: 100%;')
          v-col(cols='6' style='padding: 0;')
            h3.list-custom-header PARTE SUPERIOR
          v-col(cols='6' style='padding: 0; align-self: center; text-align: right; padding-right: 16px;')
            v-icon(small style='margin-right: 8px;') mdi-pencil
            v-icon mdi-drag-horizontal-variant
          v-ons-list(modifier='material' style='padding: 0; width: 100%;')
            v-ons-list-item(v-for='i in 3' tappable)
              .left
                v-avatar(tile size='48')
                  img(src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/03_pushup_upper_body.jpg')
              .center
                v-row(no-guters)
                  v-col(cols='12')
                    div.font5 Exercício Superior {{i}}
              .right
                v-icon(medium color='rgb(202, 33, 33)') mdi-import
        v-row(style='padding: 0; width: 100%;')
          v-col(cols='6' style='padding: 0;')
            h3.list-custom-header PARTE INFERIOR
          v-col(cols='6' style='padding: 0; align-self: center; text-align: right; padding-right: 16px;')
            v-icon(small style='margin-right: 8px;') mdi-pencil
            v-icon mdi-drag-horizontal-variant
          v-ons-list(modifier='material' style='padding: 0; width: 100%;')
            v-ons-list-item(v-for='i in 2' tappable)
              .left
                v-avatar(tile size='48')
                  img(src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/05_stepup_onto_chair.jpg')
              .center
                v-row(no-guters)
                  v-col(cols='12')
                    div.font5 Exercício Inferior {{i}}
              .right
                v-icon(medium color='rgb(202, 33, 33)') mdi-import
        v-row(style='padding: 0; width: 100%;')
          v-col(cols='6' style='padding: 0;')
            h3.list-custom-header AERÓBICO
          v-col(cols='6' style='padding: 0; align-self: center; text-align: right; padding-right: 16px;')
            v-icon(small style='margin-right: 8px;') mdi-pencil
            v-icon mdi-drag-horizontal-variant
          v-ons-list(modifier='material' style='padding: 0; width: 100%;')
            v-ons-list-item(v-for='i in 2' tappable)
              .left
                v-avatar(tile size='48')
                  img(src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/09_high_knees_lower_body.jpg')
              .center
                v-row(no-guters)
                  v-col(cols='12')
                    div.font5 Exercício Aeróbico {{i}}
              .right
                v-icon(medium color='rgb(202, 33, 33)') mdi-import
    v-ons-fab(position="bottom right" style='margin-bottom: 35px;')
      v-icon(color='#fff' style='margin-bottom: 4px;') mdi-check
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
import firebase from 'firebase'
export default {
  name: 'Training',
  data () {
    return {
      activeBtn: 1
    }
  }
}
</script>

<style scoped>
.background {
  background-color: rgb(250, 250, 250);
}
.content {
  padding: 32px 16px 40px 16px;
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
  padding: 12px 0 12px 16px;
  font-weight: 500;
  line-height: 24px;
}
ons-fab.fab, ons-speed-dial-item.fab, button.fab {
    background-color: #4CAF50;
}
</style>