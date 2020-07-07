<template lang='pug'>
  
  v-ons-page
    div.background
    div.content
      v-ons-row(width='100%' vertical-align='top')
        v-row(no-gutters style='padding: 0; width: 100%; justify-content: space-between')
          v-col(cols='auto')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
          v-col(style='position: relative; text-align: center; align-self: center;')
            div.font1 <b>Novo Projeto</b>
          v-col(cols='auto' style='opacity: 0;')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
      v-divider(style='margin-top: 16px')
      v-ons-row(width='100%' style='padding: 16px 0 0 0;')
        v-row.font4(no-gutters style='padding: 0; width: 100%;')
          v-col(cols='auto' style='margin-bottom: 16px;') Nome do projeto
          v-col(cols='12')
            ons-input.custom-input(placeholder='Informe nome do projeto social'  style='width: 100%' modifier='material')
              input.text-input.text-input--material(type='text' v-model='nomeProjeto')
              span.text-input__label.text-input--material__label

          v-col(cols='auto' style='margin-bottom: 16px; margin-top:20px;') Mentor do projeto
          v-col(cols='12')
            v-ons-select(style='width:100%;'   v-model="mentorSelecionado")
                option(v-for="mentor in mentores" :value="mentor.value") {{mentor.nome}}
               
          v-col(cols='auto' style='margin-bottom: 16px; margin-top:20px;') Mentorado 
          v-col(cols='12')
            ons-input.custom-input(placeholder='Informe o nome do mentorado'  style='width: 100%' modifier='material')
              input.text-input.text-input--material(type='text' v-model='nomeMentorado')
              span.text-input__label.text-input--material__label

          v-col(cols='auto' style='margin-bottom: 16px; margin-top:20px;') Número de celular do mentorado 
          v-col(cols='12')
            ons-input.custom-input(placeholder='Informe o número do mentorado'  style='width: 100%' modifier='material')
              input.text-input.text-input--material(type='text' v-model='numeroMentorado')
              span.text-input__label.text-input--material__label
          v-col(cols='auto' style='margin-bottom: 16px; margin-top:20px;') Descrição do projeto
          v-col(cols='12')
            ons-input.custom-input(placeholder='Descreva sobre o projeto'  style='width: 100%' modifier='material')
              input.text-input.text-input--material(type='text' v-model='descricao')
              span.text-input__label.text-input--material__label
          v-ons-row( width='100%' vertical-align='bottom' style=' justify-content: center; text-align: center')
            ons-button.font3.custom-button2(@click='novoProjetoX()' style='margin-bottom: 10px; min-width: 270px;') Criar novo projeto
</template>

<script>
import firebase from 'firebase'
export default {
  fiery:true,
  data () {
    return {
        activeBtn: 1,
        novoProjeto: this.$fiery(firebase.firestore().collection('projetos')),
        nomeProjeto:'',
        nomeMentor:'',
        nomeMentorado:'',
        descricao:'',
        mentores:this.$fiery(firebase.firestore().collection('mentores')),
        mentorSelecionado:'',
        numeroMentorado:''
    }
  },//eles mesmos marcam suas mentorias - comprovar mentorias - mentor definir vezes de reuniões por semana- meta - status do projeto -mentorado acompanhar o andamento do projeto- duvidas específicas
  methods:{
    novoProjetoX() {
        var docName=this.nomeProjeto
        console.log(docName)
        // this.$store.commit('setDocName', docName)
        this.$fires.novoProjeto.doc(docName).set({
        nomeProjeto: this.nomeProjeto,
        nomeMentor: this.mentorSelecionado,
        nomeMentorado: this.nomeMentorado,
        descricao:this.descricao,
        aceito:'nada',
        numeroMentorado:this.numeroMentorado
        })
        this.$router.go(-1)
 
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