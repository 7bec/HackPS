<template lang='pug'>
  v-ons-page
    v-ons-toolbar(modifier='transparent' :visible='$route.meta.showToolbar')
      .center Title
    .background
    .content
      v-ons-row.backgroundLogin-cell(vertical-align='center')
        v-ons-col(width='100%')
          v-ons-row(vertical-align='center' style='justify-content: center')
            v-ons-col
              img.logoImg(style='max-width: 600px;' src='../../imagens/logo-ipsum copy.svg' alt='Logo')
          form(@submit.prevent='onsignIn')
            v-ons-row(vertical-align='center' style='width: 100%; padding: 0 16px;')
              v-ons-col(width='100%')
                v-row(style='width: 100%' justify='space-around' no-gutters)
                  v-col(cols='12' style='padding: 0 5px 0 10px;')
                    v-text-field(v-model='login.email' label="E-mail" dark hide-details style='margin-bottom: 15px')
                      template(v-slot:prepend-inner)
                        v-icon(style='margin: 0 10px;') mdi-at
                  v-col(cols='12' style='padding: 0 5px 0 10px;')
                    v-text-field(v-model='login.password' label="Senha" type='password' dark hide-details style='margin-bottom: 30px;')
                      template(v-slot:prepend-inner)
                        v-icon(style='margin: 0 10px;') mdi-lock
                  v-col(cols='12' style='padding: 0 5px 0 10px;')
                    v-ons-row(style='justify-content: center;')
                      ons-button.font1.custom-button(@click='google' :disabled='loading.join' style='max-width: 200px; width: 100%; text-align: center;')
                        | Entrar
                  v-col(cols='12' style='padding: 0 10px 0 5px;')
                    ons-button.font1.button-text(@click='google' :disabled='loading.join' modifier='quiet' style='width: 100%; text-align: center;')
                      | Esqueceu a senha?
      v-ons-row(width='100%' style='position: absolute; bottom: 0; margin-bottom: 20px')
        v-ons-row(style='justify-content: center;')
          v-ons-fab(modifier='mini' style='margin-right: 6px;')
            v-ons-icon(icon='fa-google' size='22px')
          v-ons-fab(modifier='mini' style='margin-left: 6px;')
            v-ons-icon(icon='fa-facebook' size='22px')
        v-ons-row
          ons-button.font1.button-text(@click='google' :disabled='loading.join' modifier='quiet' style='width: 100%; text-align: center;')
            | Já tem uma conta? Entre agora
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      login: {
        email: '',
        password: '',
        loading: false
      },
      loading: {
        join: false,
      }
    }
  },
  methods: {
    onsignUp(){
      // this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    },
    google() {
      // this.$store.dispatch('signUserGoogle')
    },
    facebook() {
      // this.$store.dispatch('signUserFacebook')
    },
    onsignIn () {
      //
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
  .content {
    height: 100vh;
    width: 100vw;
  }
  .background {
    background-image: url('../../imagens/background-login-muie(3).png');
    background-origin: content-box;
    background-position: center;
    background-size: cover;
  }
  .backgroundLogin-cell {
    height: 100%;
    padding: 12px;
  }
  .logoImg {
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .font-style {
    font-family: 'Montserrat', sans-serif !important;
  }
  .font-size {
    font-size: 14px !important;
  }
  .text-input--material__label--active {
    color: rgb(255, 0, 0) !important;
  }
  .text-input--material:focus {
    background-image: -webkit-linear-gradient(rgb(255, 0, 0), red), -webkit-linear-gradient(bottom, transparent 1px, #afafaf 1px) !important;
    background-image: linear-gradient(red, red), linear-gradient(to top, transparent 1px, #afafaf 1px) !important;
  }
  .text-input {
    color: white !important;
  }
  .search-bar { 
    background-color: white !important;
  }
  .font1 {
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
  .button-text {
    color: white !important;
  }
  ons-fab.fab {
    background-color: #212A31 !important;
    color: white !important;
  }
  ons-fab.fab:active {
    background-color: #212A3150 !important;
  }
</style>