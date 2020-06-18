<template lang='pug'>
  v-container(style='padding-bottom: 0;')
    v-row(justify='center' no-gutters)
        v-text-field.font(rounded solo hide-details flat background-color='#d3d3d3' label="Pesquise por instrutores")
          template(v-slot:prepend-inner)
            v-icon(style='margin: 0 10px;') mdi-magnify
    v-row(no-gutters style='padding: 20px 0 12px 0;')
        span.title-text.font sugestões para você
    v-row(no-gutters v-for='instrutor in instrutores' :key='instrutor.uid' style='margin-top: 12px;' @click="selecionaInstrutor(instrutor)")
        v-col(cols='4')
            v-img(:src='instrutor.picture_url' style='border-radius: 10px;' height="25vh")
        v-col.font(cols='8' style='padding-left: 30px;')
            v-row()
                span.instrutor-name() Dr. {{instrutor.name}}
            v-row
                span Recife - PE
            v-row
                span.especializacao Especializado em emagrecimento e hipertensão
            v-row()
                v-chip-group()
                    v-chip( dark :style="`background-color: ${strengthColor(forca)};`" v-for="forca in forcas" :key="forca") {{forca}}
            v-row()
                span.quantidade-alunos Apenas {{instrutor.qtd_alunos}} vagas restantes!
            //- v-row()
            //-     <star-rating v-model='instrutor.rating' :star-size="15" :increment='0.01' :show-rating='false' :read-only='true' :glow="0.1"  glow-color='#0xFF' :border-width="0"></star-rating>
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

            forcas: [
                'Segurança na prescrição',
                'Afetividade do treino',
                'Feedback',
                'Tempo de entrega'
            ]
        }
    },
    methods: {
        strengthColor (forca) {
            if (forca == 'Segurança na prescrição'){
                return 'green'
            }else if ( forca == 'Afetividade do treino') {
                return '#800080'
            }else if ( forca == 'Feedback') {
                return '#3d8def'
            } else if ( forca == 'Tempo de entrega') {
                return '#ed9121'
            }else {
                return 'red'
            }
        },
        selecionaInstrutor (instrutor) {
            let uid = instrutor['.uid']
            let id =  uid.split('/')[4]
            this.$router.push('/professorprofile/' + id)

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap');
.font {
    font-family: 'Cairo', sans-serif;
}
.title-text {
    text-transform: uppercase;
    color: black;
    font-weight: 300;

}
.back {
   font-family: 'Cairo', sans-serif; 
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

.especializacao {
    font-size: 0.7em;
    color: gray;

}
 
</style>