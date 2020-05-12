<template lang='pug'>
  v-container(style='padding-right: 0 !important;')
    v-row(no-gutters style='margin-top: 3vh;')
        span.title-text.font instutores populares
    div(style='margin-top: 3vh; overflow-x: auto; white-space: nowrap !important; display: flex;')
        v-col(cols='5' v-for='(i, instrutor) in instrutoresPopulares' :key='i')
            v-row( justify='center')
                v-avatar(size='100')
                    img(src='https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
            v-row(justify='center')
                v-container
                    span.name.font.text-xs-center Cláudio Castro
</template>

<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data () {
        return {
            instrutoresPopulares: 5,

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