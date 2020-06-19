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
                li.active Especialidades
                li Conta
          div.table-item.fill(style='position: relative')
            v-ons-row.background-section(style='height: 100%;')
              v-ons-col(width='100%')
                v-row(style='width: 100%' justify='space-around' no-gutters)
                  v-col(cols='12')
                    div.font2(style='margin-bottom: 10px;') Escolha 3 especialidades
                    div.font3(style='margin-bottom: 20px;') Preencha os campos abaixo para nos conhecermos melhor
                  v-row.row(cols='12' v-for="(especialidade,i) in especialidades" :key="i")
                    v-col.column
                      v-ons-card.card1(@click='changeColor()' v-bind:class="{corCinza: !isActive,corLaranja:isActive }")
                        p(style='font-size:15px;') {{especialidade.name}}
                 
              v-col(cols='12')
                ons-button.font1.custom-button(@click='nextPage()' style='max-width: 150px; width: 100%; text-align: center; float: right; margin-bottom: 25px;')
                  | Próximo
              
</template>
<script>
import firebase from 'firebase'
  export default {
    name: 'cadastroProf3',
    fiery:true,
    data () {
      return {
        genders: [
          {text: 'Masculino'},
          {text: 'Feminino'},
          {text: 'Outros'}
        ],
        cadastroStep: 1,
        color:'black',
        especialidades: this.$fiery(firebase.firestore().collection('especialidades')),
        isActive:true,
        cadastroProfessor: this.$fiery(firebase.firestore().collection('professor')),
      }
    },
    methods: {
      nextPage() {
        this.$router.push("/cadastroprofessor4")
      },
      changeColor(){
        this.isActive ^= true
      },
    },
    computed: {
     authenticated(){
          console.log('Home'+this.$store.getters.user)
          return this.$store.getters.user
      }  
    }
  }
</script>
<style scoped>
.font {
	font-family: roboto;
}
.corCinza{
  background-color:rgba(232, 232, 232, 0.7);
}
.corLaranja{
  background: rgba(240,84,41,1) !important;
}
.font2 {
  font-size: 1.7rem!important;
  line-height: 2.5rem;
  letter-spacing: .0073529412em!important;
  font-weight: 600;
  font-family: Roboto,sans-serif!important;
}
.column{
  float: left;
  width: 25%;
  padding: 0 10px;
}
.row{
  margin: 0 -5px;
}
.font3 {
  font-size: 1rem;
  line-height: 1.2;
  color: #D3D3D3;
  letter-spacing: .0073529412em!important;
  font-weight: 600;
  font-family: Roboto,sans-serif!important;
}
.test{
  width: 35%;
  padding: 0 0px;
}
.background {
  background-image: url('../../imagens/background-login-muie(3).png');
  background-origin: content-box;
  background-position: center;
  background-size: cover;
}
.card1{
  border-radius:20px;
  color:rgba(0,0,0, 0.5);
  /* background-color:rgba(232, 232, 232, 0.7); */
  text-align:center;
  padding: 16px;
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
  box-shadow: rgba(31, 70, 88, 0.04) 0px 8px 10px 0px;
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
  box-shadow: rgba(31, 70, 88, 0.04) 0px 8px 10px 0px;
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
  color: #afafaf !important;
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

.select-input--material:focus {
  background-image: linear-gradient(rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%) !important
}
.select-input--material__label--active {
  background: -webkit-linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.select-input--material {
  color: #afafaf !important;
  text-transform: uppercase;
  font-size: 20px;
}
.custom-button {
  border-radius: 25px;
  background: rgb(239,41,41) !important;
  background: linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%) !important;
  /* position: absolute; */
  margin-top: 30px;
  bottom: 0;

}
</style>

<style>
.select-input--material {
  color: #afafaf !important;
  font-size: 20px !important;
}
</style>

