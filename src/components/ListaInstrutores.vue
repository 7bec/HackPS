<template lang='pug'>
  v-container()
    v-row(no-gutters style='margin-top: 3vh;')
        v-icon(style='color: black; font-weight: 800;') mdi-chevron-left
    v-row(justify='center' no-gutters style='margin-top: 3vh;')
        v-text-field.search-bar.font(rounded dense flat label="Pesquise por instrutores" prepend-inner-icon="mdi-magnify")
    v-row(no-gutters style='margin-top: 3vh;')
        span.title-text.font sugestões para você
    v-row(no-gutters style='margin-top: 3vh;' v-for='instrutor in instrutores' :key='instrutor.name')
        v-col(cols='4')
            v-img(:src='instrutor.picture_url' style='border-radius: 10px;' height="13vh")
        v-col.font(cols='8' style='padding-left: 30px;')
            v-row()
                span.instrutor-name() {{instrutor.name}}
            v-row()
                span.quantidade-alunos {{instrutor.qtd_alunos}} alunos
            v-row()
                <star-rating v-model='instrutor.rating' :star-size="15" :increment='0.01' :show-rating='false' :read-only='true' :glow="0.1"  glow-color='#0xFF' :border-width="0"></star-rating>
</template>

<script>
import firebase from 'firebase'
export default {
    fiery: true,
    props: [
        'instrutores'
    ],
    data () {
        return {


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
    font-family: roboto !important;
}
.title-text {
    text-transform: uppercase;
    color: lightgray;
    font-weight: 300;

}
.back {
   font-family: roboto !important; 
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