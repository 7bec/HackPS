<template lang='pug'>
    <v-ons-page class="page">
        div.background
        v-ons-toolbar(modifier='transparent')
            div.left
                v-row(no-gutters)
                    v-icon(x-large) mdi-chevron-left
                    span.voltar
            div.center.font.title
        vendaInstrutor(:instrutor="instrutor")
    </v-ons-page>
</template>

<script>
import firebase from 'firebase'
import vendaInstrutor from '../components/VendaInstrutor'
export default {
    fiery: true,
    components: {
        vendaInstrutor
    },
    data () {
        return {
            instrutor: {},
            name: ''
        }
    },
    updated () {
      
    },
    created () {
        const idInstrutor = this.$route.params.idInstrutor
        console.log(idInstrutor)
        this.instrutor = this.$fiery(firebase.firestore().collection('instrutores').doc(idInstrutor))
        console.log(this.instrutor)

    },
    computed: {

    }
}
</script>

<style scoped>
.background {
  background-color: white !important;
}
.page {
    height: 100vh;
}
.bot{
    position: absolute;
    bottom: 0;
    z-index: 9;
}
.title {
	font-size: 1.4;
	text-transform: uppercase;
	font-weight: 600;
}
.voltar {
    font-family: roboto;
    
}
.font {
	font-family: roboto;
}
</style>