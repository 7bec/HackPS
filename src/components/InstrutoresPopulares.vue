<template lang='pug'>
  v-container(style='padding-right: 0 !important;')
    v-row(no-gutters style='margin-top: 3vh;')
        span.title-text.font instutores populares
    div(style='margin-top: 3vh; overflow-x: auto; white-space: nowrap !important; display: flex;')
        v-col(cols='5' v-for='instrutor in instrutoresPopulares' :key='instrutor.name')
            v-row( justify='center')
                v-avatar(size='100')
                    img(:src='instrutor.picture_url')
            v-row(justify='center')
                v-container
                    span.name.font.text-xs-center {{instrutor.name}}
</template>

<script>
export default {
    fiery: true,
    props: [
        'instrutoresPopulares'
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
    font-family: 'Lato', sans-serif;
}
.title-text {
    text-transform: uppercase;
    color: lightgray;
    font-weight: 300;

}
.name {
    font-weight: 300;
    color: gray;
    font-size: 0.8em;
}
</style>