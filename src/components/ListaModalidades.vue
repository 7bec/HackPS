<template lang='pug'>
  v-container(fill-height)
    v-row( align='center' justify='center')
        v-col(cols='12' v-for='modalidade in modalidades' :key='modalidade.name' align-self='center' justify='center')
            v-row( style='margin-bottom: -10px; justify-content: center;')
                v-card.mx-10.rounded-card(ripple width="90vw" elevation='0' @click='goTo(modalidade.name)')
                    <div class="v-responsive v-image pls">
                        <div class="v-responsive__sizer" style="padding-bottom: 66.6667%;"></div>
                        <div class="v-image__image v-image__image--cover" :style='`background-image: url(${modalidade.background_url}); background-position: center center; width:100%;`'></div>
                        <div class="v-responsive__content" style="width: 100%; flex: 0 0 auto; position: relative">
                            <div class="overlay"></div>
                            <div class="titulo-card">{{modalidade.name}}</div>
                        </div>
                    </div>
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
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,700&display=swap');
.rounded-card{
    border-radius: 10px !important;
}


.titulo-card {
    color: #fff;
    font-family: Montserrat !important;
    font-weight: 800;
    font-size: 1.8em;
    z-index: 10;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    padding-bottom: 16px;
    text-transform: uppercase;
    
}

.overlay {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:9;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 52%, rgba(0,0,0,0.7791491596638656) 71%);
}
.padding0 {
    padding: 0;
}

.pls{
    flex: 0 0 auto !important;
}
</style>