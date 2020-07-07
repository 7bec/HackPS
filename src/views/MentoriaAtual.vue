<template lang='pug'>
  v-ons-page
    div.background
    div.content
      v-ons-row(width='100%' vertical-align='top' text-align='center')
        v-ons-col(style='color: #172B3E')
            <img style='width: 40%; max-height: 100px;' src="../../imagens/logoPortoSocial.png">

      v-ons-row(width='100%' style='padding: 32px 0 8px 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col Projetos    
      v-ons-row(width='100%' style='padding: 0 0 16px 0')
        v-row(style='padding: 0; margin-top:0px; width: 100%;')
          v-col(cols='12' style='padding: 4px')
            v-card.cardServices(dark style='border-radius: 10px;  margin-bottom:5px; justify-content:center;text-align:center'  v-for="(projeto, i) in projetos" :key="i" @click="goTo(projeto)")
              v-ons-ripple
                div(style='height: 100%; width: 100%; padding: 8px 8px 8px 8px;')
                  svg(style="width:55px;height:55px" viewBox="0 0 24 24")
                    path(fill="currentColor" d="M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14")
                  div.font5 {{projeto.nomeProjeto}}


                  
</template>

<script>
import firebase from 'firebase'
export default {
  fiery: true,
  name: 'Home',
  computed: {
  },
  data () {
    return {
      model: [],
      cardHeight: 500,
      showDiv: false,
      done: 0,
      total: 0,
      projetos: this.$fiery(firebase.firestore().collection('projetos'), {
                query: q => q.where( 'nomeMentor','==', 'Carlos').where('aceito','==',true)
      })    }    
  },
  created () {

  },
  methods:{
    goTo (projeto) {
      console.log(projeto)
      this.$store.commit('setProjeto', projeto.nomeProjeto)
      this.$router.push('/infoMentoria')
    },
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
  color: black;
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
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.23px;
  font-weight: 500;
}
.font6 {
  font-family: Roboto;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: -0.87px;
  font-weight: 300;
  color: rgba(250, 250, 250, 0.801);
}
.cardServices {
  background: linear-gradient(90deg, rgb(30,144,255) 0%, rgb(30,144,255) 45%) !important;
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