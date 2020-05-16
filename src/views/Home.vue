<template lang='pug'>
  v-ons-page
    <div class="center">
      <v-ons-row style='justify-content: center;'>
        <img style='width: 35%; max-height: 100px;' src="../../imagens/logo-ipsum.svg">
      </v-ons-row>
    </div>
    div.background
    v-ons-row(width='100%' vertical-align='bottom' style='height: 75%; justify-content: center; text-align: center')
      ons-button.font1.custom-button(@click='pushAluno' style='margin-bottom: 10px; min-width: 270px; ') Quero ser aluno
    v-ons-row(width='100%' vertical-align='bottom' style=' justify-content: center; text-align: center')
      ons-button.font3.custom-button1(@click='pushProfessor' style='margin-bottom: 10px; min-width: 270px;') Quero ser professor
    v-ons-row
      ons-button.font1.button-text(@click='pushLogin'  modifier='quiet' style='width: 100%; text-align: center;')
        | Já sou cadastrado
</template>

<script>
export default {
  name: 'Home',
  methods: {
    pushLogin () {
      this.$router.push('/')
    },
    pushAluno () {
      this.$router.push('/cadastroAluno')
    },
    pushProfessor () {
      this.$router.push('/cadastroProfessor')
    },
  }
}
</script>

<style scoped>
.background {
  background-image: url('../../imagens/shutterstock_638555473.png');
  -o-background-size: 50vmax auto;
  -webkit-background-size: 50vmax auto;
  -moz-background-size: 50vmax auto;
  background-size: 50vmax auto;
  background-color: #F6F5F3;
  background-origin: content-box;
  background-position: center;
}
.font1 {
  font-weight: 500 !important;
  font-family: roboto !important;
  font-size: 0.875rem !important;
}
.font3 {
  font-weight: 500 !important;
  font-family: roboto !important;
  font-size: 0.875rem !important;
  /* color: rgba(240,84,41,1); */
  color:black;
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
  background: rgb(239,41,41) !important;
  background: linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%) !important;
}
.custom-button1 {
  border-radius: 25px;
  text-transform: uppercase;
  background: white !important;
}
.button-text {
    color: grey !important;
}
</style>