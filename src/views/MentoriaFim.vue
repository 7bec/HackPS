<template lang='pug'>
  
  v-ons-page
    div.background
    div.content
      v-ons-row(width='100%' vertical-align='top')
        v-row(no-gutters style='padding: 0; width: 100%; justify-content: space-between')
          v-col(cols='auto')
            // v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
          v-col(style='position: relative; text-align: center; align-self: center;')
            div.font1() <b>Registro de mentoria- IMC 2020</b>
          v-col(cols='auto' style='opacity: 0;')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
      v-divider(style='margin-top: 16px')
      v-ons-row(width='100%' style='padding: 16px 0 0 0;')
        v-row.font4(no-gutters style='padding: 0; width: 100%;')
          v-col(cols='auto' style='margin-bottom: 16px;') Tema da mentoria
          v-col(cols='12')
            ons-input.custom-input(placeholder=''  style='width: 100%' modifier='material')
              input.text-input.text-input--material(type='text' v-model='temaMentoria')
              span.text-input__label.text-input--material__label
          v-col(cols='auto' style='margin-bottom: 16px; margin-top:20px;') Descrição da mentoria 
          v-col(cols='12')
          ons-input.custom-input(placeholder=''  style='width: 100%' modifier='material')
            input.text-input.text-input--material(type='text' v-model='descMentoria')
            span.text-input__label.text-input--material__label
              
          v-col(cols='auto' style='margin-bottom: 16px; margin-top:20px;') Benefícios alcançados coma mentoria
          v-col(cols='12')
            ons-input.custom-input(placeholder=''  style='width: 100%' modifier='material')
              input.text-input.text-input--material(type='text' v-model='beneficioMentoria')
              span.text-input__label.text-input--material__label
          v-col(cols='auto' style='margin-bottom: 16px; margin-top:20px;') Data e horário da próxima mentoria
          v-col(cols='12')
            ons-input.custom-input(placeholder='Descreva sobre o projeto'  style='width: 100%' modifier='material')
              input.text-input.text-input--material(type='text' v-model='proxMentoria')
              span.text-input__label.text-input--material__label
          v-ons-row( width='100%' vertical-align='bottom' style=' justify-content: center; text-align: center')
            ons-button.font3.custom-button2(@click='novoProjetoX()' style='margin-bottom: 10px; min-width: 270px;') Finalizar mentoria
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
export default {
  fiery:true,
  data () {
    return {
        activeBtn: 1,
        novoProjeto: this.$fiery(firebase.firestore().collection('projetos')),
        nomeProjeto:'',
        nomeMentor:'',
        nomeMentorado:'',
        emailMentor:'carlosdoportosocial@gmail.com',
        descricao:'',
        mentorSelecionado:'',
        temaMentoria:'',
        descMentoria:'',
        beneficioMentoria:'',
        proxMentoria:'',
        projeto: this.$fiery(firebase.firestore().collection('projetos').doc(this.$store.getters.getSelectedProjeto)),
        
    }
  },//eles mesmos marcam suas mentorias - comprovar mentorias - mentor definir vezes de reuniões por semana- meta - status do projeto -mentorado acompanhar o andamento do projeto- duvidas específicas
  methods:{
    novoProjetoX() {
        this.$fires.novoProjeto.doc(this.projeto.nomeProjeto).update({
        email:'carlosdoportosocial@gmail.com',
        temaMentoria:this.temaMentoria,
        descMentoria:this.descMentoria,
        beneficioMentoria:this.beneficioMentoria,
        data:this.proxMentoria,
        hora:'14:00:00',
        tipoMentoria:'anjo',

        })
        this.WppMessage()
        this.$router.push('/homeMentor')
        
    },
    WppMessage(){
      axios.defaults.baseURL = 'https://api.maytapi.com/api/fa8d815d-f26b-42ee-be29-cef382e01f6e'
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['x-maytapi-key'] = '7cb0cb61-bcb7-4494-a1f8-9503cba6e805'
      return new Promise((resolve, reject) => {
          axios.post('/3366/sendMessage', {
            "to_number": '5591998359822', 
            "message": "Sua mentoria foi marcada! Ela está agendada para o dia " + this.proxMentoria +'às 14:00:00', 
            "type": "text"
          })
            .then(response => {
             
              console.log(response);
            })
            .catch(error => {
              console.log(error.response)
            })
          })
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
.font3 {
  font-weight: 500 !important;
  font-family: roboto !important;
  font-size: 0.875rem !important;
  /* color: rgba(240,84,41,1); */
  color:white;

}
.font2 {
  font-family: Roboto;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.84px;
  font-weight: 700;
  color: #7d8184;
}

.custom-button2 {
  border-radius: 25px;
  text-transform: uppercase;
  /*background: linear-gradient(90deg, rgba(217,217,25) 0%, rgba(255,255,0,1) 45%) !important;*/
    background: #e7c34e;

    margin-top:20%;

}
.font4 {
  font-family: Roboto;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.84px;
  font-weight: 700;
  color: black;
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
.custom-button {
  border-radius: 25px;
  text-transform: uppercase;
  /*background: linear-gradient(90deg, rgba(217,217,25) 0%, rgba(255,255,0,1) 45%) !important;*/
  background:#d4452e;
}
</style>