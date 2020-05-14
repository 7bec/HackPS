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
                    v-text-field(v-model='login.email' label="Informe o email cadastrado" dark hide-details style='margin-bottom: 15px')
                      template(v-slot:prepend-inner)
                        v-icon(style='margin: 0 10px;') mdi-at
                  v-col(cols='12' style='padding: 0 5px 0 10px;')
                    v-ons-row(style='justify-content: center;')
                      ons-button.font1.custom-button(@click='forgotPassword' :disabled='loading.join' style='max-width: 200px; width: 100%; text-align: center; margin-top: 8px;')
                        | Redefinir senha
    v-ons-dialog( cancelable='' status-bar-fill='' :visible.sync="dialogVisible" style='display: block; z-index: 10001;' data-device-back-button-handler-id='5')
        .dialog-mask(style='z-index: 20000; ')
        .dialog(style='z-index: 20001;border-radius:25px;')
            .dialog-container
                .white.v-card.v-sheet.theme--light()
                    .v-card__text.pt-0.pb-0()
                        .row.justify-center()
                        .pt-0.col()
                            .col.col-12()
                                .row.justify-center()
                                    p.font2(style='text-align:center;')  Você receberá um email para redefinir sua senha
                        .col.col-12( align='center')
                        img.logoImg( src='../images/logo.svg' alt='Logo' style='max-width: 70px;')
                    .v-card__actions()
                        .col.col-12( style='padding: 0px 5px 0px 10px;')
                            ons-row( style='justify-content: center;')
                                ons-button.font1.custom-button.button(@click="goHome" style='max-width: 200px; width: 100%; text-align: center; margin-bottom:10px;') OK

</template>

<script>
import firebase from 'firebase'
export default {
  name: 'RedefinirSenha',
  data () {
    return {
      login: {
        email: '',
        loading: false,
      },
      dialogVisible: false,
      loading: {
        join: false,
      }
    }
  },
  methods: {
    forgotPassword(){
      var auth = firebase.auth();
      var emailAddress = this.login.email;
      this.dialogVisible=true
      const that = this
      auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
        // that.dialogVisible = true
      }).catch(function(error) {
        // An error happened.
      });
    },
    goBack() {
        console.log(this.$route.matched)
        this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
    },
    goHome(){
        this.dialogVisible=false
        console.log(this.$router)
        this.$router.push('/login')
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
.font2 {
    font-weight: 500 !important;
    font-family: roboto !important;
    font-size: 1.050rem !important;
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