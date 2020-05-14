<template lang='pug'>
  v-container(style='padding-right: 0')
    v-row(no-gutters style='margin: 0 0 12px 0;')
        span.title-text.font instutores populares
    div
        v-slide-group(v-model="model")
            v-slide-item(v-for="instrutor in instrutoresPopulares" :key='instrutor.uid')
                div(style='padding: 0; margin: 0 4px; width: 100px')
                    div
                        v-img(style='border-radius: 50%; height: 100px;' :src='instrutor.picture_url')
                    div(style='max-width: 100px; margin: 4px; text-align: center;  word-break: break-word; word-wrap: break-word; overflow-wrap: break-word;')
                        p.name.font(style='max-width: 100px; word-break: break-word; white-space: normal; word-wrap: break-word;') aaaaaaaa da silva pereira
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
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,700&display=swap');
.font {
    font-family: roboto !important;
}
.title-text {
    text-transform: uppercase;
    color: black;
    font-weight: 300;

}
.name {
    font-weight: 300;
    color: black;
    font-size: 0.8em;
}
</style>