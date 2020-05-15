<template lang='pug'>
    <v-ons-page class="page">
        div.background
        v-ons-toolbar(modifier='transparent')
            div.left
                v-row(no-gutters)
                    v-icon(x-large) mdi-chevron-left
            div.center.roboto Planos
        ListaPlanos
        
        
    </v-ons-page>
</template>

<script>
import ListaPlanos from '../components/ListaPlanos'
export default {
    components: {
        ListaPlanos
    }
}
</script>




<style scoped>
.background {
  background-color: white !important;
}
.roboto {
    font-family: roboto;
}

</style>