<template lang='pug'>
  v-container(style='padding-bottom: 0')
    v-row(justify='center' no-gutters)
        v-text-field.font(rounded solo hide-details flat background-color='#fff' label="Pesquise por instrutores")
          template(v-slot:prepend-inner)
            v-icon(style='margin: 0 10px;') mdi-magnify
    v-row(no-gutters style='padding: 20px 0 12px 0;')
        span.title-text.font sugestões para você
    v-row(no-gutters v-for='instrutor in instrutores' :key='instrutor.uid')
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
.font {
    font-family: roboto !important;
}
.title-text {
    text-transform: uppercase;
    color: black;
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
    color: black;
}
 
</style>