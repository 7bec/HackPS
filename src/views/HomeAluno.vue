<template lang='pug'>
  v-ons-page
    div.background
    div.content
      v-ons-row(width='100%' vertical-align='top')
        v-ons-col(style='color: #172B3E')
          div.font1 Olá, <b>Carlos</b>
          div.font2 Qual o treino de hoje?
        v-ons-col(style='position: relative;')
          div(@click='$router.push("/settings")' style='position: absolute; right: 0; top: 2px;')
            v-avatar(style='box-shadow: rgba(31, 70, 88, 0.1) 0px 3px 10px 0px;')
              img(src="https://www.thispersondoesnotexist.com/image")
            div(style='position: absolute; top: 0; right: 0; height: 20px; width: 20px; background-color: white; border-radius: 50%; padding: 2px 4px 4px 4px; box-shadow: 0px 0px 3px -1px rgba(0,0,0,0.75);')
              svg(style="width:12px;height:12px" viewBox="0 0 24 24")
                path(fill="aaa" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z")
      v-ons-row(width='100%' style='padding: 32px 0 8px 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col Serviços
          v-col(cols='auto' style='font-weight: 500; font-size: 14px;') Ver mais
        v-row.font4(no-gutters style='padding: 4px 0 0 0;') Escolha um serviço
      v-ons-row(width='100%' style='padding: 0 0 16px 0')
        v-row(style='padding: 0; width: 100%;')
          v-col(cols='4' style='padding: 4px')
            v-card.cardServices(dark style='border-radius: 10px;')
              v-ons-ripple
                div(style='height: 100%; width: 100%; padding: 8px 8px 8px 8px;')
                  svg(style="width:55px;height:55px" viewBox="0 0 24 24")
                    path(fill="currentColor" d="M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14")
                  div.font5 Planos de treino
                  div.font6 consultar
          v-col(cols='4' style='padding: 4px')
            v-card.cardServices(dark style='border-radius: 10px;')
              v-ons-ripple
                div(style='height: 100%; width: 100%; padding: 8px 8px 8px 8px;')
                  svg(style="width:55px;height:55px" viewBox="0 0 24 24")
                    path(fill="currentColor" d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z")
                  div.font5(style='line-height: 16px') Converse com um professor
          v-col(cols='4' style='padding: 4px')
            v-card.cardServices(dark style='border-radius: 10px;')
              v-ons-ripple
                div(style='height: 100%; width: 100%; padding: 8px 8px 8px 8px;')
                  svg(style="width:55px;height:55px" viewBox="0 0 24 24")
                    path(fill="currentColor" d="M10,13C9.65,13.59 9.36,14.24 9.19,14.93C6.5,15.16 3.9,16.42 3.9,17V18.1H9.2C9.37,18.78 9.65,19.42 10,20H2V17C2,14.34 7.33,13 10,13M10,4A4,4 0 0,1 14,8C14,8.91 13.69,9.75 13.18,10.43C12.32,10.75 11.55,11.26 10.91,11.9L10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M10,5.9A2.1,2.1 0 0,0 7.9,8A2.1,2.1 0 0,0 10,10.1A2.1,2.1 0 0,0 12.1,8A2.1,2.1 0 0,0 10,5.9M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14Z")
                  div.font5(style='line-height: 16px') Encontre um professor
          v-col(cols='4' style='padding: 4px')
            v-card.cardServices(dark style='border-radius: 10px;')
              v-ons-ripple
                div(style='height: 100%; width: 100%; padding: 8px 8px 8px 8px;')
                  svg(style="width:55px;height:55px" viewBox="0 0 24 24")
                    path(fill="currentColor" d="M7 7.76V16.25H11.08L11.68 15.34C12.84 13.55 14.93 12.75 16.47 12.75C17 12.75 17.45 12.84 17.79 13C18.7 13.41 18.95 14.18 19 14.74C19.08 15.87 18.5 17.03 17.5 17.71C16.6 18.33 14.44 19 11.87 19C10.12 19 7.61 18.69 5.12 17.3C5.41 14.85 6 10.88 7 7.76M7 3C4 7.09 3 18.34 3 18.34C5.9 20.31 9.08 21 11.87 21C14.86 21 17.39 20.21 18.64 19.36C21.64 17.32 21.94 12.71 18.64 11.18C18 10.89 17.26 10.75 16.47 10.75C14.17 10.75 11.5 11.96 10 14.25H9V7.09H11L12 4L7 3Z")
                  div.font5 Metas
                  div.font6 consultar
          v-col(cols='4' style='padding: 4px')
            v-card.cardServices(dark style='border-radius: 10px;')
              v-ons-ripple
                div(style='height: 100%; width: 100%; padding: 8px 8px 8px 8px;')
                  svg(style="width:55px;height:55px" viewBox="0 0 24 24")
                    path(fill="currentColor" d="M7,2C8.78,2 9.67,4.16 8.42,5.42C7.16,6.67 5,5.78 5,4A2,2 0 0,1 7,2M5.5,7H8.5A2,2 0 0,1 10.5,9V14.5H9V22H5V14.5H3.5V9A2,2 0 0,1 5.5,7M19,8H21L18,4L15,8H17V16H15L18,20L21,16H19M22,2H14V4H22M22,20H14V22H22")
                  div.font5 Dados corporais
                  div.font6 alterar
          v-col(cols='4' style='padding: 4px')
            v-card.cardServices(dark style='border-radius: 10px;')
              v-ons-ripple
                div(style='height: 100%; width: 100%; padding: 8px 8px 8px 8px;')
                  svg(style="width:55px;height:55px" viewBox="0 0 24 24")
                    path(fill="currentColor" d="M6,16.5L3,19.44V11H6M11,14.66L9.43,13.32L8,14.64V7H11M16,13L13,16V3H16M18.81,12.81L17,11H22V16L20.21,14.21L13,21.36L9.53,18.34L5.75,22H3L9.47,15.66L13,18.64")
                  div.font5 Progresso
                  div.font6 consultar
      v-divider
      v-ons-row(width='100%' style='padding: 16px 0 8px 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col Seu progresso
          v-col(cols='auto' style='font-weight: 500; font-size: 14px;') Ver mais
        v-row.font4(no-gutters style='padding: 4px 0 0 0;') Veja seu progresso na semana
      v-ons-row(width='100%' style='padding: 8px 0 16px 0;')
        v-row(no-gutters style='max-width: calc(100% + 10px); position: relative;')
          v-col(cols='6' style='text-align: center')
            v-progress-circular(:color='isDone === true ? "#4CAF50" : "#f05429"' width='5' size='100' rotate='90' :value="percentage") 
              div(v-if='isDone !== true')
                div(style='font-size: 18px; font-weight: 900; width: 100%;') {{ this.isDone }}
                div(style='font-size: 14px; font-weight: 700; color: rgb(23, 43, 62);') treinos
              div(v-else)
                v-icon(x-large color='#4CAF50') mdi-check-bold
                div(style='font-size: 18px; font-weight: 900; width: 100%;') {{ this.done + '/' + this.total }}
          v-col(cols='6' style='text-align: center; align-self: center')
            div
              div(style='font-size: 18px; font-weight: 500; color: #f05429') <b>2596</b> kcal
              div(style='font-size: 13px; font-weight: 700; color: rgb(23, 43, 62); line-height: 20px;') Total da semana
            div(style='margin-top: 8px;')
              div(style='font-size: 18px; font-weight: 500; color: #f05429') <b>403</b> kcal
              div(style='font-size: 13px; font-weight: 700; color: rgb(23, 43, 62); line-height: 20px;') Média por treino
      v-divider
      v-ons-row(width='100%' style='padding: 16px 0 8px 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col Seus treinos
          v-col(cols='auto' style='font-weight: 500; font-size: 14px;') Ver mais
        v-row.font4(no-gutters style='padding: 4px 0 0 0;') Veja seus treinos de hoje
      v-ons-row(width='100%')
        v-row(no-gutters style='max-width: calc(100% + 10px); position: relative;')
          v-slide-group.sliderGroupSetts(v-model='model' style='max-width: 100%;')
            v-slide-item(v-for='(treino, i) in treinos' :key='i')
              v-card.boxDone(v-if='i == 0' outlined height='274' width='200' style='margin: 4px 4px 20px 1px; overflow: hidden; position: relative; border-radius: 10px; filter: drop-shadow(0px 10px 5px rgba(27, 28, 32, 0.102));')
                v-img(height='274' :src='treino.picture_url' style='border-bottom-left-radius: 0px; border-bottom-right-radius: 0px')
                v-container(style='padding-top: 29px; position: absolute; bottom: 0; width: 100%; height: 94px; background: white;')
                  v-layout(column)
                    v-flex(xs12)
                      h5(style='display: inline; margin-bottom: 0; font-weight: 700; font-size: 14.5px; line-height: 14.5px; letter-spacing: -0.83px; color: #334856;') {{treino.name}}  
                      span(style='position: relative; top: 2px;')
                        svg(style="width:14px;height:14px;" viewBox="0 0 24 24")
                          path(fill="#2196F3" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z")
                  v-row(no-gutters style='padding: 0;')
                    v-col()
                      h5(style='margin: 5px 0 0 0; font-weight: 700; font-size: 12px; letter-spacing: -0.83px; color: #7D8184; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;') Treino 3/7:
                    v-col(cols='auto')
                      h5(style='margin: 5px 0 0 0; font-weight: 400; font-size: 12px; letter-spacing: -0.83px; color: #7D8184; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;') Treino Parte Superior
                  v-row(no-gutters style='padding: 0;')
                    v-col(style='padding: 3px 0 0 0;')
                      .modalidadeBadge {{ treino.modalidade }}
                v-avatar(color="#FFF" size="48" style='position: absolute; top: 156px; left: 50%; transform: translate(-45%, 0); -webkit-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); -moz-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); border-radius: 50%;')
                  v-progress-circular(:color='treino.done == 100 ? "#4CAF50" : "#f05429"' width='5' size='40' rotate='90' :value="treino.done") 
                    span(v-if='treino.done != 100' style='font-size: 11.5px; font-weight: 900;') {{ treino.done }}%
                    v-icon(v-else color='#4CAF50') mdi-check-bold
              v-card.boxDone(v-else outlined height='274' width='200' style='margin: 4px 4px 20px 4px; overflow: hidden; position: relative; border-radius: 10px; filter: drop-shadow(0px 10px 5px rgba(27, 28, 32, 0.102));')
                v-img(height='274' :src='treino.picture_url' style='border-bottom-left-radius: 0px; border-bottom-right-radius: 0px')
                v-container(style='padding-top: 29px; position: absolute; bottom: 0; width: 100%; height: 94px; background: white;')
                  v-layout(column)
                    v-flex(xs12)
                      h5(style='display: inline; margin-bottom: 0; font-weight: 700; font-size: 14.5px; line-height: 14.5px; letter-spacing: -0.83px; color: #334856;') {{treino.name}}  
                      span(style='position: relative; top: 2px;')
                        svg(style="width:14px;height:14px;" viewBox="0 0 24 24")
                          path(fill="#2196F3" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z")
                  v-row(no-gutters style='padding: 0;')
                    v-col()
                      h5(style='margin: 5px 0 0 0; font-weight: 700; font-size: 12px; letter-spacing: -0.83px; color: #7D8184; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;') Treino 3/7:
                    v-col(cols='auto')
                      h5(style='margin: 5px 0 0 0; font-weight: 400; font-size: 12px; letter-spacing: -0.83px; color: #7D8184; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;') Treino Parte Superior
                  v-row(no-gutters style='padding: 0;')
                    v-col(style='padding: 3px 0 0 0;')
                      .modalidadeBadge {{ treino.modalidade}}
                v-avatar(color="#FFF" size="48" style='position: absolute; top: 156px; left: 50%; transform: translate(-50%, 0); -webkit-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); -moz-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); border-radius: 50%;')
                  v-progress-circular(:color='treino.done == 100 ? "#4CAF50" : "#f05429"' width='5' size='40' rotate='90' :value="treino.done") 
                    span(v-if='treino.done != 100' style='font-size: 11.5px; font-weight: 900;') {{ treino.done }}%
                    v-icon(v-else color='#4CAF50') mdi-check-bold
</template>

<script>
import firebase from 'firebase'
export default {
  fiery: true,
  name: 'Home',
  computed: {
    isDone () {
      if (this.done === this.total) {
        return true
      } else {
        return this.done + '/' + this.total
      }
    },
    percentage () {
      return (this.done/this.total)*100
    }
  },
  data () {
    return {
      model: [],
      cardHeight: 500,
      showDiv: false,
      done: 0,
      total: 0,
      treinos: [
        {
          picture_url: 'https://blog.gsuplementos.com.br/wp-content/uploads/2018/08/229899-marcelo-faria-saiba-como-executar-os-exercicios-no-supino-reto-corretamente.jpg',
          name: 'Supino Reto',
          done: 30,
          modalidade: 'musculação'
        },
        {
          picture_url: 'https://static.wixstatic.com/media/c4822e_74eed0a3c1d84b4580f671de6ed82fd0~mv2.jpg',
          name: 'Resistência aeróbica',
          done: 70,
          modalidade: 'futebol'
        },
        {
          picture_url: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/05/burpees-1280x720.jpg',
          name: 'Burpees',
          done: 100,
          modalidade: 'natação'
        },
        {
          picture_url: 'https://www.feitodeiridium.com.br/wp-content/uploads/2017/01/melhores-exercicios-remada-curvada-600x400.jpg',
          name: 'Remada curvada na barra',
          done: 90,
          modalidade: 'musculação'
        },
        {
          picture_url: 'https://www.feitodeiridium.com.br/wp-content/uploads/2017/01/melhores-exercicios-remada-curvada-600x400.jpg',
          name: 'Remada curvada na barra',
          done: 100,
          modalidade: 'musculação'
        }
      ]
    }
  },
  created () {
    // const that = this
    // this.$fiery(firebase.firestore().collection('instrutores'), {
    //     query: q => q.where('musculacao', '==', true),
    //     onSuccess: (todos) => {
    //         console.log(todos)
    //         that.instrutores = todos
    //     }
    // })
    for (let i = 0; this.treinos.length > i; i++) {
      if (this.treinos[i].done === 100) {
        this.done++
      }
      this.total++
    }
  },
    computed: {
     authenticated(){
          console.log('Home'+this.$store.getters.user)
          return this.$store.getters.user
      }  
    }
}
</script>

<style scoped>
.background {
  background-color: rgb(250, 250, 250);
}
.content {
  padding: 32px 34px 16px 34px;
}
.font1 {
  font-family: roboto !important;
  font-size: 28px !important;
  line-height: 34px !important;
  letter-spacing: -0.84px !important;
}
.font2 {
  font-family: Roboto;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.84px;
  font-weight: 700;
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
  font-family: Roboto;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: -0.23px;
  font-weight: 500;
}
.font6 {
  font-family: Roboto;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.87px;
  font-weight: 300;
  color: rgba(250, 250, 250, 0.801);
}
.cardServices {
  background: linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%) !important;
  box-shadow: rgba(31, 70, 88, 0.3) 0px 3px 10px 0px;
  height: 110px;
}
.boxDone {
  position: relative;
  display: inline-block;
}
.doneBadge:before {
  content: "";
  z-index: -1;
  overflow: hidden;
  transform: rotate(-135deg);
  width: 120px;
  display: block; 
  background: #79A70A;
  background: linear-gradient(#9BC90D 0%, #79A70A 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 34px;
  right: -16px;
  clip-path: polygon(120px 20px, 90px -10px, 30px -10px, 0px 20px, 10px 30px,  110px 30px);
  height: 20px;
  width: 120px;
}
.doneBadge:after {
  content: "feito!";
  z-index: 1;
  overflow: hidden;
  font-size: 10px;
  font-weight: bold;
  color: #FFF;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  transform: rotate(45deg);
  width: 120px;
  display: block; 
  background: #79A70A;
  background: linear-gradient(#9BC90D 0%, #79A70A 100%);
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 20px;
  right: -30px;
  clip-path: polygon(120px 20px, 90px -10px, 30px -10px, 0px 20px, 10px 30px,  110px 30px)
}
.modalidadeBadge {
  border-radius: 10px;
  color: white;
  font-size: 10px;
  height: 18px;
  letter-spacing: 0;
  min-width: 20px;
  padding: 2px 6px;
  pointer-events: auto;
  position: absolute;
  text-align: center;
  text-indent: 0;
  top: auto;
  transition: .3s cubic-bezier(.25,.8,.5,1);
  white-space: nowrap;
  background-color: rgba(240,84,41,1)!important;
  border-color: rgba(240,84,41,1)!important;
}
</style>