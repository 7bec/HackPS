<template lang='pug'>
  v-container.padding0(fill-height)
    v-row.padding0(no-gutters align='center' justify='center')
        v-col.padding0(cols='12' v-for='modalidade in modalidades' :key='modalidade.name' align-self='center' justify='center')
            v-row.padding0(no-gutters style='justify-content: center;')
                v-col(cols='12')
                    v-card.mx-10.rounded-card(max-width="99vw" elevation='0' @click='goTo(modalidade.name)' style='width: 100%; height: 35vh')
                        div(:style='`background-image: url(${modalidade.background_url}); height: 100%;`')
                            div(style='width: 100%; height: 100%;')
                                div.overlay
                                v-row(style='margin-top: 15px; margin-left: 20px; height: 100%;')
                                    span.titulo-card {{modalidade.name}}
</template>

<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data () {
        return {
            modalidades: this.$fiery(firebase.firestore().collection('modalities'))
        }
    },
    methods: {
        stringToSlug (str) {
           return  str.toString().toLowerCase()
                    .replace(/[àÀáÁâÂãäÄÅåª]+/g, 'a')
                    .replace(/[èÈéÉêÊëË]+/g, 'e')
                    .replace(/[ìÌíÍîÎïÏ]+/g, 'i')
                    .replace(/[òÒóÓôÔõÕöÖº]+/g, 'o')
                    .replace(/[ùÙúÚûÛüÜ]+/g, 'u')
                    .replace(/[ýÝÿŸ]+/g, 'y')
                    .replace(/[ñÑ]+/g, 'n')
                    .replace(/[çÇ]+/g, 'c')
                    .replace(/[ß]+/g, 'ss')
                    .replace(/[Ææ]+/g, 'ae')
                    .replace(/[Øøœ]+/g, 'oe')
                    .replace(/[%]+/g, 'pct')
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]+/g, '')
                    .replace(/\-\-+/g, '-')
                    .replace(/^-+/, '')
                    .replace(/-+$/, '')
        },
        goTo(name) {
            var route = this.stringToSlug(name)
            this.$router.push(`/escolhainstrutor/${route}`)
        }
    },
    mounted () {
        console.log('OIIIII')
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,700&display=swap');
.rounded-card{
    border-radius: 10px !important;
}


.titulo-card {
    color: white;
    font-family: roboto !important;
    font-weight: 500;
    font-size: 1.2em;
    z-index: 10;
}

.overlay {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:9;
    background: rgba(19,19,19,1);
    background: -moz-linear-gradient(top, rgba(19,19,19,1) 0%, rgba(28,28,28,0.64) 9%, rgba(76,76,76,0.2) 20%, rgba(43,43,43,0.2) 24%, rgba(17,17,17,0.2) 40%, rgba(0,0,0,0.2) 49%, rgba(44,44,44,0.2) 50%, rgba(71,71,71,0.2) 61%, rgba(102,102,102,0.2) 75%, rgba(89,89,89,0.2) 88%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(19,19,19,1)), color-stop(9%, rgba(28,28,28,0.64)), color-stop(20%, rgba(76,76,76,0.2)), color-stop(24%, rgba(43,43,43,0.2)), color-stop(40%, rgba(17,17,17,0.2)), color-stop(49%, rgba(0,0,0,0.2)), color-stop(50%, rgba(44,44,44,0.2)), color-stop(61%, rgba(71,71,71,0.2)), color-stop(75%, rgba(102,102,102,0.2)), color-stop(88%, rgba(89,89,89,0.2)));
    background: -webkit-linear-gradient(top, rgba(19,19,19,1) 0%, rgba(28,28,28,0.64) 9%, rgba(76,76,76,0.2) 20%, rgba(43,43,43,0.2) 24%, rgba(17,17,17,0.2) 40%, rgba(0,0,0,0.2) 49%, rgba(44,44,44,0.2) 50%, rgba(71,71,71,0.2) 61%, rgba(102,102,102,0.2) 75%, rgba(89,89,89,0.2) 88%);
    background: -o-linear-gradient(top, rgba(19,19,19,1) 0%, rgba(28,28,28,0.64) 9%, rgba(76,76,76,0.2) 20%, rgba(43,43,43,0.2) 24%, rgba(17,17,17,0.2) 40%, rgba(0,0,0,0.2) 49%, rgba(44,44,44,0.2) 50%, rgba(71,71,71,0.2) 61%, rgba(102,102,102,0.2) 75%, rgba(89,89,89,0.2) 88%);
    background: -ms-linear-gradient(top, rgba(19,19,19,1) 0%, rgba(28,28,28,0.64) 9%, rgba(76,76,76,0.2) 20%, rgba(43,43,43,0.2) 24%, rgba(17,17,17,0.2) 40%, rgba(0,0,0,0.2) 49%, rgba(44,44,44,0.2) 50%, rgba(71,71,71,0.2) 61%, rgba(102,102,102,0.2) 75%, rgba(89,89,89,0.2) 88%);
    background: linear-gradient(to bottom, rgba(19,19,19,1) 0%, rgba(28,28,28,0.64) 9%, rgba(76,76,76,0.2) 20%, rgba(43,43,43,0.2) 24%, rgba(17,17,17,0.2) 40%, rgba(0,0,0,0.2) 49%, rgba(44,44,44,0.2) 50%, rgba(71,71,71,0.2) 61%, rgba(102,102,102,0.2) 75%, rgba(89,89,89,0.2) 88%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#131313', endColorstr='#595959', GradientType=0 );    
    color:black;
}
.padding0 {
    padding: 0;
}
</style>