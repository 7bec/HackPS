<template lang="pug">
    v-ons-page
      v-ons-toolbar(id='toolbar' modifier='transparent cover-content')
        div.left
          v-icon(dark style='width: 44px; height: 44px; font-size: 44px;') mdi-chevron-left
      div.background
      div.content
        div.table
          div.table-item
            div.step_progressbar
              ul
                li.active Sobre você
                li.active Contato
                li Conta
          div.table-item.fill(style='position: relative')
            v-ons-row.background-section(style='height: 100%;')
              v-ons-col(width='100%')
                v-row(style='width: 100%' justify='space-around' no-gutters)
                  v-col(cols='12')
                    div.font2(style='margin-bottom: 10px;') Cadastro no APP
                    div.font3(style='margin-bottom: 20px;') Preencha seus dados para continuar
                  v-col(cols='12')
                    ons-input.custom-input(placeholder='Língua' modifier='material' float)
                      input.text-input.text-input--material(type='text'  v-model='user.language' style='height: 40px; font-size: 20px;')
                      span.text-input__label.text-input--material__label(style='font-size: 20px; line-height: 20px; top: 7px;')
                  v-col(cols='12')
                    ons-input.custom-input(placeholder='Telefone' modifier='material' float)
                      input.text-input.text-input--material(type='text'  v-model='user.phone' style='height: 40px; font-size: 20px;')
                      span.text-input__label.text-input--material__label(style='font-size: 20px; line-height: 20px; top: 7px;')
                  v-col(cols='12')
                    ons-button.font1.custom-button(@click='$router.push("/cadastroAluno3")' style='max-width: 150px; width: 100%; text-align: center; float: right; margin-bottom: 25px;')
                      | Próximo
</template>
<script>
  export default {
    data () {
      return {
        cadastroStep: 1,
        user: {
          name: '',
          gender: '',
          born: '',
          country: '',
          city: '',
          state: '',
          gym: '',
          email: '',
          phone: '',
          password: '',
          language: ''
        }
      }
    },
    methods: {
    },
  }
</script>
<style scoped>
.font {
	font-family: roboto;
}
.font2 {
  font-size: 2.125rem!important;
  line-height: 2.5rem;
  letter-spacing: .0073529412em!important;
  font-weight: 600;
  font-family: Roboto,sans-serif!important;
}
.font3 {
  font-size: 1rem;
  line-height: 1.2;
  color: #D3D3D3;
  letter-spacing: .0073529412em!important;
  font-weight: 600;
  font-family: Roboto,sans-serif!important;
}
.background {
  background-image: url('../../imagens/background-login-muie(3).png');
  background-origin: content-box;
  background-position: center;
  background-size: cover;
}
.table {
  height: 100%;
  width: 100%;
  display: table;
}
.table-item {
  display: table-row;
  height: 0;
}
.table-item.fill {
  height: auto;
}
.step_progressbar {
  display: block;
  width: 100%;
  margin: 25px auto 50px auto;
  background-color: #EFEFF400;
}
ul {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  counter-reset: step;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  position: relative;
  width: 33.33%;
  text-align: center;
  margin: 15px 0;
  color: white;
}
li:before {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  line-height: 50px;
  text-align: center;
  content: counter(step);
  counter-increment: step;
  margin: 10px auto;
  position: relative;
  z-index: 2;
  font-size: 20px;
}
li.active {
  color: rgba(240,84,41,1);
  font-weight: bold;
}
li:after {
  content: "";
  width: 100%;
  height: 3px;
  background: white;
  position: absolute;
  top: 35px;
  left: -50%;
  z-index: 1;
}
li:first-child:after {
  content: none;
}
li.active + li:after {
  background: linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%);
}
li.active:before {
  background: linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%);
  color: #fff;
}
li:before {
  color: #394139
}
.background-section {
  background-color: white;
  border-radius: 50px 50px 0 0;
  padding: 40px 24px 0 24px;
}
.custom-input {
  width: 100%;
  margin-bottom: 25px;
}
.text-input--material:focus {
  background-image: linear-gradient(rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%) !important
}
.text-input--material__label--active {
  background: -webkit-linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.custom-button {
  border-radius: 25px;
  background: rgb(239,41,41) !important;
  background: linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%) !important;
  position: absolute;
  bottom: 0;
  right: 24px;
}
</style>