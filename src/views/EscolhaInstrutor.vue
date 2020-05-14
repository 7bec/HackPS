<template lang='pug'>
    <v-ons-page class="page">
      div.background
      v-ons-toolbar(modifier='transparent' style='justify-content: center;')
        div.left
          v-ons-back-button Voltar
      ListaInstrutores(:instrutores='instrutores' :style='`height: calc(100vh - ${instrutoresPopularesHeight}px - 44px); overflow: auto;`')
      InstrutoresPopulares(class="bot" id="instPop" :instrutoresPopulares='instrutoresPopulares')
    </v-ons-page>
</template>

<script>
import firebase from 'firebase'
import ListaInstrutores from '../components/ListaInstrutores'
import InstrutoresPopulares from '../components/InstrutoresPopulares'
export default {
    fiery: true,
    components: {
        ListaInstrutores,
        InstrutoresPopulares
    },
    data () {
        return {
            instrutoresPopularesHeight: 0,
            instrutores: [],
        }
    },
    created () {
      this.instrutoresPopularesHeight = document.getElementById('instPop').clientHeight;
      console.log(this.instrutoresPopularesHeight) 
    },
    updated () {
      this.instrutoresPopularesHeight = document.getElementById('instPop').clientHeight;
      console.log(this.instrutoresPopularesHeight) 
    },
    created () {
        console.log('PELO AMOR DE DEUS')
        var modalidade = this.$route.params.modalidade
        console.log(modalidade)
        let that = this
        this.$fiery(firebase.firestore().collection('instrutores'), {
                query: q => q.where(modalidade, '==', true),
                onSuccess: (todos) => {
                    console.log(todos)
                    let aux = todos
                    let aux2 = todos
                    that.instrutores = [...aux, ...aux2]
                }
            })
    },
    computed: {
        instrutoresPopulares () {
             var pop = this.instrutores.map((instrutor)=>{
                        console.log('oi')
                        if (instrutor.trending == true) return instrutor
                    })
            console.log(pop)
            return pop
        }
    }
}
</script>

<style scoped>
.background {
  background-color: #F6F5F3 !important;
}
.page {
    height: 100vh;
}
.bot{
    position: absolute;
    bottom: 0;
    z-index: 9;
}
</style>