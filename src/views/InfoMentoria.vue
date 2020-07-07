<template lang='pug'>
  v-ons-page
    div.background
    div.content
      v-ons-row(width='100%' vertical-align='top' text-align='center')
        v-ons-col(style='color: #172B3E')
            <img style='width: 40%; max-height: 100px;' src="../../imagens/logoPortoSocial.png">

      v-ons-row(width='100%' style='padding: 32px 0 8px 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col(style='text-align:center;') Projeto {{projeto.nomeProjeto}}

      v-ons-row(width='100%' style='padding: 0 0 16px 0')
        v-row(style='padding: 0; margin-top:0px; width: 100%;')
          v-col(cols='12' style='padding: 4px')
          
            div(style='margin-top:20px;').font2 Nome do mentor: 
            div {{projeto.nomeMentor}}
            div(style='margin-top:20px;').font2 Nome do mentorado: 
            div {{projeto.nomeMentorado}}
            div(style='margin-top:20px;').font2 Descrição:
            div  {{projeto.descricao}}
            div(style='margin-top:20px; ').font2  Status
            div Em andamento
            div(style='margin-top:20px; ').font2  Data de mentoria
            div {{projeto.data}} às {{projeto.hora}}
        div(style='text-align:center; margin-top:20px' v-if="bool==true")
          v-ons-button.custom-button1(@click='inicioMentoria()' v-if="inicio==true") Iniciar mentoria
          v-ons-button.custom-button1(@click='fimMentoria(projeto)' v-else) Finalizar mentoria
          
        div(style='text-align:center; margin-top:20px')
          v-ons-button.custom-button1(@click='historico()') Acessar histórico de mentorias

</template>

<script>
import axios from 'axios'

import firebase from 'firebase'
export default {
    fiery: true,
    data () {
    return {
      model: [],
      cardHeight: 500,
      showDiv: false,
      // projeto: this.$fiery(firebase.firestore().collection('projetos'), {
      //   query: q => q.where('nomeProjeto','==',this.$store.getters.getSelectedProjeto),
      // }),
      projeto: this.$fiery(firebase.firestore().collection('projetos').doc(this.$store.getters.getSelectedProjeto)),
      bool:false,
      inicio:true,
    }
    },
    created () {
      var today = new Date(this.projeto.data+' '+this.projeto.hora);
      var dataMentoria= today.getTime();
      console.log(dataMentoria)
      console.log(Date.now())
      if(dataMentoria-Date.now()<86400000){
        console.log(this.projeto.wpp)
        if(this.projeto.wpp==false){
          this.WppMessage()
          this.$fires.projeto.update({
           wpp:true
          })
        }
      }
      if(dataMentoria<Date.now()){
        console.log(dataMentoria-Date.now())
        this.bool=true
      }
      else{this.bool=false}
      console.log(this.$store.getters.getSelectedProjeto)
    },
    methods:{
      AceitarMentoria(projeto){
          console.log(this.projeto.nomeProjeto)
          this.$fires.projeto.update({
              
              aceito:true
          })
      },
      RecusarMentoria(){
          this.$fires.usuario.doc(projeto.nomeProjeto).set({
          
              aceito:true
          })
      },
    historico(){
      console.log(this.projeto.nomeProjeto)
      this.$store.commit('setProjeto', this.projeto.nomeProjeto)
      this.$router.push('/historico')
    },
      WppMessage(){
        axios.defaults.baseURL = 'https://api.maytapi.com/api/fa8d815d-f26b-42ee-be29-cef382e01f6e'
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['x-maytapi-key'] = '7cb0cb61-bcb7-4494-a1f8-9503cba6e805'
        return new Promise((resolve, reject) => {
            axios.post('/3366/sendMessage', {
              "to_number": "5591998359822", 
              "message": "Olá mundo!", 
              "type": "text"
            })
              .then(response => {
              
                console.log(response);
              })
              .catch(error => {
                console.log(error.response)
              })
            })
      },
      inicioMentoria(){
        this.inicio=false
      },

    fimMentoria (projeto) {
      console.log(projeto.nomeProjeto)
      this.$store.commit('setProjeto', projeto.nomeProjeto)
      this.$router.push('/fimMentoria')
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
  font-weight: 500 !important;
  font-family: roboto !important;
  font-size: 0.875rem !important;
  color:white;
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
  color: rgb(30,144,255) 

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
  font-size: 17px;
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
  background: #d4452e;
  box-shadow: rgba(31, 70, 88, 0.3) 0px 3px 10px 0px;
  height: 300px;
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
.custom-button1 {
  border-radius: 25px;
  text-transform: uppercase;
  /*background: linear-gradient(90deg, rgba(217,217,25) 0%, rgba(255,255,0,1) 45%) !important;*/
  background: #1E90FF	;
}
</style>