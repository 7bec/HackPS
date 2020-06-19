<template lang='pug'>
  v-ons-page
    div.background
    div.content
      v-ons-row(width='100%' vertical-align='top')
        v-ons-col(style='color: #172B3E')
        v-card(flat tile height='300' style='width: 100%; overflow: hidden;')
          v-img(height='300' src='https://www.thispersondoesnotexist.com/image' style='transform: scale(1.1); -webkit-filter: blur(15px); -moz-filter: blur(15px); -o-filter: blur(15px); -ms-filter: blur(15px); filter: blur(15px);')
          v-container(style='padding: 20px 10px 10px 10px; position: absolute; top: 0; width: 100%; height: 100%;')
            v-row(no-gutters style='justify-content: space-between;')
              v-col(cols='auto' style='background-color: rgba(0,0,0,0.2); border-radius: 10px; height: 34px;')
                v-icon(dark style='width: 34px; height: 34px; font-size: 34px;') mdi-chevron-left
              v-col(cols='auto' style='background-color: rgba(0,0,0,0.2); border-radius: 10px; height: 34px; width: 34px; text-align: center; padding-top: 2px;')
                v-icon( v-if='favorite' small dark style='width: 30px; height: 30px; font-size: 30px;') mdi-heart
                v-icon(v-else small dark style='width: 30px; height: 30px; font-size: 30px;') mdi-heart-outline
            v-row(no-gutters style='justify-content: space-around; height: 246px;')
              v-col(cols='auto' style='align-self: center;')
                v-avatar(size='130' style='box-shadow: rgba(31, 70, 88, 0.1) 0px 3px 10px 10px;')
                  img(:src="instrutor.picture_url")
                div(style='margin-top: 8px; font-size: 18px; color: #FFFFFF; font-weight: bold; text-align: center;')
                  | {{instrutor.name}} &nbsp;
                  svg(style="width:14px;height:14px;" viewBox="0 0 24 24")
                    path(fill="#2196F3" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z")
                div(style='font-size: 14px; color: #FFFFFF; font-weight: lighter; text-align: center; width: 130px;') Recife - PE
                div(v-if='rating.quantity > 0' style='text-align: center; width: 130px; margin-top: 4px;')
                  v-rating(color='#FFEB3B' background-color='#FFEB3B' half-increments readonly dense v-model='rating.value' small)
                  div(style='text-transform: uppercase; color: white; font-weight: 500; font-size: 10px;') {{rating.quantity}} Avaliações
              v-col(cols='auto' style='align-self: center;')
                div(style='font-size: 14px; color: #FFFFFF; font-weight: lighter; text-align: center; font-family: rift-soft, sans-serif; font-style: normal; font-weight: 300;') MODALIDADES
                div(style='color: white; font-weight: bold; text-align: center; margin-top: 8px;')
                  v-avatar(color="#FFF" size="48" style='-webkit-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); -moz-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); border-radius: 50%;')
                    v-icon(color='#f05429') fas fa-futbol
                  div(style='font-size: 14px; font-family: europa, sans-serif; margin-top: 4px;') Futebol
                div(style='color: white; font-weight: bold; text-align: center; margin-top: 8px;')
                  v-avatar(color="#FFF" size="48" style='-webkit-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); -moz-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); border-radius: 50%;')
                    v-icon(color='#f05429') fas fa-running
                  div(style='font-size: 14px; font-family: europa, sans-serif; margin-top: 4px;') Atletismo
      v-ons-row(width='100%' style='padding: 16px 12px 0 12px;')
        v-ons-row(width='100%' vertical-align='top')
          //- v-row(no-gutters style='width: 100%; padding-left: 12px;')
          //-   v-col(cols='12' style='font-size: 12px; font-weight: 600; color: #666666; height: 100%; line-height: 18px;')
          //-     div(style='font-size: 12px; color: #999999; line-height: 18px;') Redes sociais
          //-     img(src='../../imagens/instagram-logo.svg' style='height: 18px; width: 18px; vertical-align:middle;')
          //-     span(style='padding-left: 4px; font-weight: 500; display:inline-block;vertical-align:middle;') @luciano_m1
          v-row(no-gutters style='width: 100%; padding-top: 16px;')
            v-col(@click='showLess = !showLess' cols='12')
              v-card(tile color='#fafafa' style='box-shadow: none; filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.078)); width: 100%;')
                div(:class='{ "showLess boxSmall": showLess, "boxGrow": !showLess }' style='padding: 12px;')
                  div(style='font-size: 10px; color: #999999; line-height: 18px;') Especialidades
                  div(style='font-size: 12px; color: #666666; line-height: 17px;') {{makePhrase(instrutor.especialidades)}}
                  div(style='font-size: 10px; color: #999999; line-height: 18px;') Graduação
                  div(style='font-size: 12px; color: #666666; line-height: 17px;') {{instrutor.graduacao}}
                  div(style='font-size: 10px; color: #999999; line-height: 18px;') Especialização
                  div(style='font-size: 12px; color: #666666; line-height: 17px;') {{instrutor.especializacao}}
                  div(style='font-size: 10px; color: #999999; line-height: 18px;') Mestrado
                  div(style='font-size: 12px; color: #666666; line-height: 17px;') {{instrutor.mestrado}}
                  div(style='font-size: 10px; color: #999999; line-height: 18px;') Doutorado
                  div(style='font-size: 12px; color: #666666; line-height: 17px;') {{instrutor.mestrado}}
                  div(style='font-size: 10px; color: #999999; line-height: 18px;') Experiência na área
                  div(style='font-size: 12px; color: #666666; line-height: 17px;') {{instrutor.tempo_experiencia}} <br>{{instrutor.ocupacao_atual}} <br> {{instrutor.historico_experiencia}}
        v-ons-row(width='100%' style='padding: 16px 12px 8px 12px;')
          template(v-if="percentageProgress.time > 50")
            v-row(no-gutters style='padding: 0; width: 100%;')
              v-col(cols='12' style='font-size: 12px; font-weight: 600; color: #666666; height: 100%; line-height: 18px;')
                div(style='font-size: 12px; color: #999999; line-height: 18px;') Tempo de entrega do treino
            v-row(no-gutters style='padding: 0; width: 100%;')
              v-col(cols='12')
                v-progress-linear(color='#00C853' active height='12' rounded buffer-value='100' :value='percentageProgress.time')
                  template(v-slot="{ value }")
                    strong(style='font-size: 12px; color: white;') {{ Math.ceil(value) }}%
          template(v-if="percentageProgress.feedback > 50")
            v-row(no-gutters style='padding-top: 4px; width: 100%;')
              v-col(cols='12' style='font-size: 12px; font-weight: 600; color: #666666; height: 100%; line-height: 18px;')
                div(style='font-size: 12px; color: #999999; line-height: 18px;') Atenção e feedback
            v-row(no-gutters style='padding: 0; width: 100%;')
              v-col(cols='12')
                v-progress-linear(color='#00C853' active height='12' rounded buffer-value='100' :value='percentageProgress.feedback')
                  template(v-slot="{ value }")
                    strong(style='font-size: 12px; color: white;') {{ Math.ceil(value) }}%
          template(v-if="percentageProgress.afetivity > 50")
            v-row(no-gutters style='padding-top: 4px; width: 100%;')
              v-col(cols='12' style='font-size: 12px; font-weight: 600; color: #666666; height: 100%; line-height: 18px;')
                div(style='font-size: 12px; color: #999999; line-height: 18px;') Afetividade do treino
            v-row(no-gutters style='padding: 0; width: 100%;')
              v-col(cols='12')
                v-progress-linear(color='#00C853' active height='12' rounded buffer-value='100' :value='percentageProgress.afetivity')
                  template(v-slot="{ value }")
                    strong(style='font-size: 12px; color: white;') {{ Math.ceil(value) }}%
          template(v-if="percentageProgress.relation > 50")
            v-row(no-gutters style='padding-top: 4px; width: 100%;')
              v-col(cols='12' style='font-size: 12px; font-weight: 600; color: #666666; height: 100%; line-height: 18px;')
                div(style='font-size: 12px; color: #999999; line-height: 18px;') Relação Tempo x Execução do treino
            v-row(no-gutters style='padding: 0; width: 100%;')
              v-col(cols='12')
                v-progress-linear(color='#00C853' active height='12' rounded buffer-value='100' :value='percentageProgress.relation')
                  template(v-slot="{ value }")
                    strong(style='font-size: 12px; color: white;') {{ Math.ceil(value) }}%
          template(v-if="percentageProgress.sample > 50")
            v-row(no-gutters style='padding-top: 4px; width: 100%;')
              v-col(cols='12' style='font-size: 12px; font-weight: 600; color: #666666; height: 100%; line-height: 18px;')
                div(style='font-size: 12px; color: #999999; line-height: 18px;') Exemplo ruim
            v-row(no-gutters style='padding: 0; width: 100%;')
              v-col(cols='12')
                v-progress-linear(color='#00C853' active height='12' rounded buffer-value='100' :value='percentageProgress.sample')
                  template(v-slot="{ value }")
                    strong(style='font-size: 12px; color: white;') {{ Math.ceil(value) }}%
          template(v-if="percentageProgress.mastery > 50")
            v-row(no-gutters style='padding-top: 4px; width: 100%;')
              v-col(cols='12' style='font-size: 12px; font-weight: 600; color: #666666; height: 100%; line-height: 18px;')
                div(style='font-size: 12px; color: #999999; line-height: 18px;') Domínio e Segurança na prescrição
            v-row(no-gutters style='padding: 0; width: 100%;')
              v-col(cols='12')
                v-progress-linear(color='#00C853' active height='12' rounded buffer-value='100' :value='percentageProgress.mastery')
                  template(v-slot="{ value }")
                    strong(style='font-size: 12px; color: white;') {{ Math.ceil(value) }}%
        v-ons-row(width='100%' style='padding: 0 0 0 0')
          v-row(style='padding: 0; width: 100%;')
            v-col(cols='12' style='padding: 12px 0 0 0;')
              v-tabs(v-model="tab" grow show-arrows color='#f05429')
                v-tab(key='Plano 1')
                  strong Plano 1
                v-tab(key='Plano 2')
                  strong Plano 2
                v-tab(key='Plano 3')
                  strong Plano 3
                v-tab(key='Plano 4')
                  strong Plano 4
              v-tabs-items(v-model='tab')
                v-tab-item(key='Plano 1')
                  v-card(flat)
                    v-card-text
                      div(style='font-size: 12px; color: #666666; line-height: 17px;') Receba meus treinos com foco em emagrecimento super rápidos e práticos que podem ser feitos em qualquer local! Perfeito para quem busca uma vida mais ativa e alto gasto calórico!
                      div(style='font-size: 10px; color: #999999; line-height: 18px; margin-top: 8px;') Mídia
                      v-row(no-gutters)
                        v-col(cols='6' style='padding: 0 6px 0 0')
                          card(flat tile)
                            v-img(aspect-ratio="0.915" style='border-radius: 7px;' src='../../imagens/gym.jpeg')
                        v-col(cols='6' style='padding: 0 0 0 6px')
                          v-row(no-gutters)
                            v-col(cols='12' style='padding: 0 0 6px 0')
                              card(flat tile)
                                v-img(:aspect-ratio="16/9" style='border-radius: 7px;' src='../../imagens/jogging.jpg')
                          v-row(no-gutters)
                            v-col(cols='6' style='padding: 6px 6px 0 0')
                              card(flat tile)
                                v-img(aspect-ratio="1" style='border-radius: 7px;' src='../../imagens/gym-2.jpg')
                            v-col(cols='6' style='padding: 6px 0 0 6px')
                              card(flat tile)
                                v-img(aspect-ratio="1" style='border-radius: 7px;' src='../../imagens/jogging-2.jpg')
                                  div(style='height: 100%; width: 100%; position: absolute; top: 0; left: 0; background-color: rgba(0,0,0,0.4); vertical-align:middle;')
                                    div(style='text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)')
                                      div(style='font-size: 16px; color: white; line-height: 18px; font-weight: 500') +4
                                      div(style='font-size: 16px; color: white; line-height: 18px; font-weight: 500') mais 
                      v-row(no-gutters style='justify-content: center; margin-top: 8px')
                        v-col(cols='auto')
                          ons-button.font1.custom-button(style='text-align: center; min-width: 270px;') ESCOLHER PLANO (R$ 235,00)
                v-tab-item(key='Plano 2')
                  v-card(flat)
                    v-card-text 2
                v-tab-item(key='Plano 3')
                  v-card(flat)
                    v-card-text 3
                v-tab-item(key='Plano 4')
                  v-card(flat)
                    v-card-text 4
</template>

<script>
import firebase from 'firebase'
export default {
  fiery: true,
  name: 'Home',
  props: [
    'instrutor'
  ],
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
      instrutor: {},
      favorite: false,
      rating: {
        quantity: 7,
        value: 4.5
      },
      showLess: true,
      percentageProgress: {
        time: 90,
        feedback: 100,
        afetivity: 85,
        relation: 100,
        mastery: 97,
        sample: 35
      },
      tab: 'Plano 1',
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

    const idInstrutor = this.$route.params.idInstrutor
    console.log(idInstrutor)
    this.instrutor = this.$fiery(firebase.firestore().collection('instrutores').doc(idInstrutor))
    console.log(this.instrutor)

    for (let i = 0; this.treinos.length > i; i++) {
      if (this.treinos[i].done === 100) {
        this.done++
      }
      this.total++
    }
  },
  methods: {
    makePhrase (especialidades) {
      let frase = ''
      let i = 0
      especialidades.forEach((especialidade)=>{
        if (i != especialidades.length){
          frase += especialidade + ',' + ' '
        } else {
          frase += 'e' + ' ' +especialidade
        }
        i++;
      })
      return frase
    }
  }
}
</script>

<style scoped>
.background {
  background-color: rgb(250, 250, 250);
}
.boxSmall {
  height: 150px;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.showLess:before {
  content: '';
  width:100%;
  height:100%;    
  position:absolute;
  left:0;
  top:0;
  background:linear-gradient(transparent 30px, white);
}
.boxGrow {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.custom-button {
  border-radius: 25px;
  text-transform: uppercase;
  background: rgb(239,41,41) !important;
  background: linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%) !important;
}
.font1 {
  font-weight: 500 !important;
  font-family: roboto !important;
  font-size: 0.875rem !important;
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