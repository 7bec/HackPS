<template lang='pug'>
  v-ons-page
    <div class="center">
      <v-ons-row style='justify-content: center; margin-top:10px;'>
         <img style='width: 40%; max-height: 100px;' src="../../imagens/logoPortoSocial.png">
      </v-ons-row>
    </div>
    div.background
    v-ons-row(width='100%' vertical-align='bottom' style='height: 60%; justify-content: center; text-align: center')
      h3 Entre no seu perfil
    v-ons-row(width='100%' vertical-align='bottom' style='height:10%; justify-content: center; text-align: center')
      ons-button.font1.custom-button(@click='pushMentor' style='margin-bottom: 10px; min-width: 270px; ') Mentor
    v-ons-row(width='100%' vertical-align='bottom' style=' justify-content: center; text-align: center')
      ons-button.font3.custom-button1(@click='pushPortoSocial' style='margin-bottom: 10px; min-width: 270px;') Porto social
    v-ons-row(width='100%' vertical-align='bottom' style=' justify-content: center; text-align: center')
      ons-button.font3.custom-button2(@click='pushProjetoSocial' style='margin-bottom: 10px; min-width: 270px;') Projeto social
    v-ons-row(width='100%' style='position: absolute; bottom: 0; margin-bottom: 20px')
          v-ons-row(style='justify-content: center;')
            v-ons-icon(@click='google' icon='fa-google'  style='margin-right:30px; color:#e7c34e' size='22px')
            v-ons-icon(@click='facebook' icon='fa-facebook' style='color: #1E90FF	;' size='22px')
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  methods: {
    pushLogin () {
      this.$router.push('/login')
    },
    pushMentor () {
      this.$router.push('/homeMentor')
    },
    pushProjetoSocial () {
   //   this.$router.push('/homePS')
    },
    pushPortoSocial () {
      this.$router.push('/homePS')
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
    }


  }
}
</script>

<style scoped>
.background {
   background-image: url('../../imagens/newlogops.png');
  -webkit-background-size: 50vmax auto;
  -moz-background-size: 50vmax auto;
  background-size: 50vmax auto;
  background-color: #F6F5F3;
  background-size: 200px;
  margin-top:-100px;
  background-origin: content-box;
  background-position: center;
}
.font1 {
  font-weight: 500 !important;
  font-family: roboto !important;
  font-size: 0.875rem !important;
  color:white;
}
.font3 {
  font-weight: 500 !important;
  font-family: roboto !important;
  font-size: 0.875rem !important;
  /* color: rgba(240,84,41,1); */
  color:white;
}
.font2 {
  font-weight: 600 !important;
  font-family: roboto !important;
  font-size: 1.75rem !important;
  color:white;
}
.custom-button {
  border-radius: 25px;
  text-transform: uppercase;
  background: #1E90FF	;
}
.custom-button1 {
  border-radius: 25px;
  text-transform: uppercase;
  /*background: linear-gradient(90deg, rgba(217,217,25) 0%, rgba(255,255,0,1) 45%) !important;*/
  background: #e7c34e
}
.custom-button2 {
  border-radius: 25px;
  text-transform: uppercase;
    background:#d4452e;

}

.button-text {
    color: grey !important;
}
</style>