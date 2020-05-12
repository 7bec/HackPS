<template lang='pug'>
  v-ons-page
    v-ons-toolbar(modifier='transparent' style='justify-content: center; height: 100px;')
      <div class="center">
        <v-ons-row style='justify-content: center;'>
          <img style='width: 35%; max-height: 100px;' src="../../imagens/logo-ipsum.svg">
        </v-ons-row>
      </div>
    div.background
    v-ons-row(width='100%' vertical-align='bottom' style='height: 100%; justify-content: center; text-align: center')
      ons-button.font1.custom-button(@click='pushCadastro' style='margin-bottom: 30px; min-width: 150px;') Começar!
</template>

<script>
export default {
  name: 'Home',
  methods: {
    pushCadastro () {
      this.$router.push('/login')
    }
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
.custom-button {
  border-radius: 25px;
  text-transform: uppercase;
  background: rgb(239,41,41) !important;
  background: linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%) !important;
}
</style>