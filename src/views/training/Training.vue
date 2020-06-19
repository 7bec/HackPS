<template lang='pug'>
  
  v-ons-page
    div.background
    div.content
      v-ons-row(width='100%' vertical-align='top')
        v-row(no-gutters style='padding: 0; width: 100%; justify-content: space-between')
          v-col(cols='auto')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
          v-col(cols='auto' style='position: relative;')
            v-row(no-gutters)
              v-col(cols='auto' style='align-self: center;')
                div.font1 <b>Carlos Silva</b>
                div.font2(style='text-align: right') Professor
              v-col(cols='auto' style='margin-left: 8px;')
                div(@click='$router.push("/settings")' style='color: #172B3E;')
                  v-avatar(size='44' style='box-shadow: rgba(31, 70, 88, 0.1) 0px 3px 10px 0px;')
                    img(src="https://www.thispersondoesnotexist.com/image")
                  div(style='position: absolute; top: 0; right: 0; height: 20px; width: 20px; background-color: white; border-radius: 50%; padding: 2px 4px 4px 4px; box-shadow: 0px 0px 3px -1px rgba(0,0,0,0.75);')
                    svg(style="width:12px;height:12px" viewBox="0 0 24 24")
                      path(fill="aaa" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z")
      v-divider(style='margin-top: 16px')
      v-ons-row(width='100%' style='padding: 16px 0 0 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col(cols='12')
            div(style="width: 100%;")
              input(type="search" placeholder="Procurar 17 treinos" class="search-input" style="width: 100%;")
      v-ons-row(width='100%' style='padding: 24px 0 8px 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col Seus treinos (17)
          v-col(@click='$router.push("/createTraining")' cols='auto' style='font-weight: 500; font-size: 14px;')
            span Criar novo
            span
              v-icon(small color='rgb(202, 33, 33)') mdi-plus
        v-row.font4(no-gutters style='padding: 4px 0 0 0;') Escolha um treino para alterar
      v-ons-row(width='100%' style='padding: 0 0 16px 0')
        v-row(style='padding: 0; width: 100%;')
          v-ons-list(modifier='material' style='padding: 0; width: 100%;  background-color: rgb(250, 250, 250);')
            v-ons-list-item(v-for='i in 17' tappable)
              .left
                v-avatar(color='#f05429' size='48')
                  span(style='font-weight: 400; line-height: 2rem; letter-spacing: normal; font-size: 24px; color: white;') T{{i}}
              .center
                v-row(no-guters)
                  v-col(cols='12')
                    div.font5 Treino Exemplo {{i}}
                    div(style='font-family: Roboto; font-size: 13px; line-height: 20px; letter-spacing: -0.84px; font-weight: 500; color: #7d8184;') 23 alunos
              .right
                v-icon(medium) mdi-import
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
  padding: 32px 16px 16px 16px;
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
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.23px;
  font-weight: 500;
  color: #8498AE;
}
.font5 {
  font-family: roboto !important;
  font-size: 16px !important;
  line-height: 16px !important;
  letter-spacing: -0.84px !important;
  color: #172B3E;
}
</style>