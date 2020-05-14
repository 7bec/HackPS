<template lang='pug'>
  v-container(style='padding-right: 0; background-color: #FFF' )
    v-row(no-gutters style='margin: 0 0 12px 0;')
        span.title-text.font2 instrutores populares
    div
        v-slide-group(v-model="model")
            v-slide-item(v-for="instrutor in instrutoresPopulares" :key='instrutor.uid')
                div(style='padding: 0; margin: 0 4px; width: 60px')
                    div
                        v-img(style='border-radius: 50%; height: 60px;' :src='instrutor.picture_url')
</template>

<script>
export default {
    fiery: true,
    props: [
        'instrutoresPopulares'
    ],
    data () {
        return {
            model: '',
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap');
.font {
    font-family: roboto !important;
}
.font2{
    font-family: 'Cairo', sans-serif;
}
.title-text {
    text-transform: uppercase;
    color: #000;
    font-weight: 600;

}
.name {
    font-weight: 300;
    color: black;
    font-size: 0.8em;
}
</style>