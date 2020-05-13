<template lang='pug'>
  v-ons-page
    v-col(cols='12' style='padding: 0 5px 0 10px;')
        v-ons-row(style='justify-content: center; ')
        ons-button.font1.button-text(@click='cadastroAluno' :disabled='loading.join' modifier='quiet' style='width: 100%; text-align: center;')
            | ALUNO?
        v-col(cols='12' style='padding: 0 10px 0 5px;')
        ons-button.font1.button-text(@click='cadastroProfessor' :disabled='loading.join' modifier='quiet' style='width: 100%; text-align: center;')
            | PROFESSOR?
  

</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loading: {
        join: false,
      }
    }
  },
  methods: {
    cadastroAluno(){
      this.$router.push('/cadastroAluno')
    },
    cadastroProfessor(){
      this.$router.push('/cadastroProfessor')
    }
  }
}
</script>