<template lang="pug">
    v-container(style='padding-bottom: 0;')
        v-row(justify='center' no-gutters)
            v-slide-group(v-model="plansSlider")
                v-slide-item(v-for="plano in planos" :key='plano.name')
                   v-card
                        v-row(no-gutters)
                            v-img(:src='plano.img')
                        v-row(no-gutters)
                        v-row(no-gutters)
                            .v-card__actions()
                                .col.col-12( style='padding: 0px 5px 0px 10px;')
                                    ons-row( style='justify-content: center;')
                                        ons-button.font1.custom-button.button(@click="buyPlan()" style='max-width: 200px; width: 100%; text-align: center; margin-bottom:10px;') OK

</template>
<script>
export default {
    data () {
        return { 
            plansSlider: '',
            planos: [
                {
                    name: 'Basico',
                    img: ''
                }
            ]
        }
    },
    methods: {
        buyPlan() {
            console.log('comprooou')
        }
    }
}
</script>

<style scoped>
.font1 {
    font-weight: 500 !important;
    font-family: roboto !important;
    font-size: 0.875rem !important;
}

.custom-button {
    border-radius: 25px;
    text-transform: uppercase;
    background: rgb(239,41,41) !important;
    background: linear-gradient(90deg, rgba(239,41,41,1) 0%, rgba(240,84,41,1) 45%) !important;
}
</style>