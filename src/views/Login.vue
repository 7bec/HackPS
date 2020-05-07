<template>
  <div class="background-login">
    <v-container class="backgroundLogin-cell">   
      <v-layout justify-center style="margin-bottom: -40px;">
        <v-flex xs12>
          <img class="logoImg" src="../../imagens/logo-ipsum.svg" alt="Logo">
        </v-flex>
      </v-layout>
      <v-layout align-center justify-center>
        <v-flex xs10 sm7 md5 lg4 xl3>
          <v-card elevation="0" style="max-width: 380px; margin-left: auto; margin-right: auto;" text dark color="rgb(1, 11, 22, 0)">
            <v-card-text style="padding: 0; margin: 0;">
              <v-container>
                <form @submit.prevent="onsignIn">
                  <v-flex xs12>
                    <v-text-field
                    light
                    hide-details
                    style="border-radius: 0px"
                    background-color="white"
                    color="#757575"
                    class="v-text-field-input my-4"                                        
                    name="email"
                    label="Email"
                    placeholder=""
                    id="email"
                    v-model="login.email"
                    type="email"
                    required
                    outlined
                    single-line></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field
                    light
                    hide-details
                    style="border-radius: 0px"
                    background-color="white"
                    color="#757575" 
                    class="v-text-field-input my-4"          
                    name="password"
                    label="Senha"
                    placeholder=""
                    id="password"
                    v-model="login.password"
                    type="password"
                    required 
                    outlined
                    single-line></v-text-field>
                  </v-flex>
                  
                  <v-layout>
                    <v-flex xs6 mr-1>
                      <v-btn tile depressed outlined height="56" color="white" class="font-size" style="background-image: linear-gradient(to right,#ef2929,#f05429); border: 1px solid #ef2929; width: 100%;" dark type="submit" :disabled="login.loading" :loading="login.loading">
                        Entrar
                        <span slot="loader" class="custom-loader">
                          <v-icon light>cached</v-icon>
                        </span>
                      </v-btn>
                    </v-flex>
                    <v-flex xs6 ml-1>
                      <v-btn tile depressed outlined height="56" color="white" class="font-size" style="background-image: linear-gradient(to right,#ef2929,#f05429); border: 1px solid #ef2929; width: 100%;" dark type="submit" :disabled="login.loading" :loading="login.loading">
                        Cadastrar
                        <!-- <span slot="loader" class="custom-loader">
                          <v-icon light>cached</v-icon>
                        </span> -->
                      </v-btn>
                    </v-flex>
                  </v-layout>
                  <v-flex xs12 ma-1 style="position: relative">
                    <v-btn style="left: 50%; transform: translate(-50%, 0%); text-transform: none" text color="white">
                      Esqueceu sua senha?
                    </v-btn>
                  </v-flex>
                  <v-layout>
                    <v-flex xs6 mr-1>
                      <v-btn style="width: 100%" rounded x-large color="#d34836" @click="google" class="my-1 font-style font-size">
                        <v-icon color="white" left>fab fa-google</v-icon>
                        <span class="hidden-sm-and-up" style="font-size: 14px">Google</span>
                        <span class="hidden-xs-only">Google</span>
                      </v-btn>
                    </v-flex>
                    <v-flex xs6 ml-1>
                      <v-btn style="width: 100%" rounded x-large color="#3b5998" @click="facebook" class="my-1 font-style font-size">
                        <v-icon color="white" left>fab fa-facebook</v-icon>
                        <span class="hidden-sm-and-up" style="font-size: 12px">Facebook</span>
                        <span class="hidden-xs-only">Google</span>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
      }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
  .background-login {
    height: 100vh;
    width: 100vw;
    background-image: url('../../imagens/shutterstock_649876828(2).jpg');
    background-origin: content-box;
    background-position: center;
    background-size: cover;
    display: table;
  }
  .backgroundLogin-cell {
    display: table-cell;
    vertical-align: middle;
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
</style>