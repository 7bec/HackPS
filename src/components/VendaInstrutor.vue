<template lang="pug">
    v-container()
        v-row(no-gutters justify='center')
            div.cairo.name(style="text-align: center; width: 100%;") {{instrutor.name}}
        v-row.font(no-gutters :key='instrutor.uid' style='margin-top: 12px;' )
            v-col(cols='4')
                v-img(:src='instrutor.picture_url' style='border-radius: 10px;' height="25vh")
            v-col.font(cols='8' style='padding-left: 30px;')
                v-row()
                    v-col(style='padding: 0;')
                        span Doutor
                    v-col(style='padding: 0;')
                        span Recife - PE
                v-row
                    v-col
                        span Tempo de entrega do treino
                        v-progress-linear(v-model="p1" height="25" reactive)
                            strong {{p1}} %
                
</template>

<script>

export default {
    props: [
        'instrutor'
    ],
    data () {
        return {
            p1: 30,
        }
    }   
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap');
.cairo {
    font-family: 'Cairo', sans-serif;
}
.font {
	font-family: roboto;
}
.name {
    font-size: 1.5em;
    font-weight: 800;
}
</style>