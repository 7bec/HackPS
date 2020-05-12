<template lang='pug'>
  v-container()
    v-row(no-gutters style='margin-top: 3vh;')
        v-icon(style='color: black; font-weight: 800;') mdi-arrow-left
        span.back.font(style='margin-left: 5px;') Modalidades
    v-row(justify='center' no-gutters style='margin-top: 3vh;')
        v-text-field.search-bar.font(rounded dense flat label="Pesquise por instrutores" prepend-inner-icon="mdi-magnify")
    v-row(no-gutters style='margin-top: 3vh;')
        span.title-text.font sugestões para você
    v-row(no-gutters style='margin-top: 3vh;' v-for='(i, instrutor) in instrutores' :key='i')
        v-col(cols='4')
            v-img(src='https://images.pexels.com/photos/3772712/pexels-photo-3772712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' style='border-radius: 10px;')
        v-col.font.pl-6(cols='8')
            v-row()
                span.instrutor-name() Cláudio Castro
            v-row()
                span.quantidade-alunos 20 alunos
            v-row()
                <star-rating v-model="rating" :star-size="15" :show-rating='false' :read-only='true' :glow="0.1"  glow-color='#0xFF' :border-width="0"></star-rating>
</template>

<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data () {
        return {
            modalidades: this.$fiery(firebase.firestore().collection('modalities')),
            rating: 3.5,
            instrutores: 5,
            starBorder: '#C1C1C1'
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,700&display=swap');
.search-bar { 
    background-color: white !important;
}
.font {
    font-family: 'Lato', sans-serif;
}
.title-text {
    text-transform: uppercase;
    color: lightgray;
    font-weight: 300;

}
.back {
   font-family: 'Lato', sans-serif; 
   font-weight: 800;
   font-size: 1.4em;
}
.instrutor-name {
    font-weight: bold;
}
.quantidade-alunos {
    font-weight: 300;
    color: gray;
}
 
</style>