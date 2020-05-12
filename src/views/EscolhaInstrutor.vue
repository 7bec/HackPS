<template>
    <v-ons-page class="page">
        <ListaInstrutores class="listaVertical"></ListaInstrutores>
        <InstrutoresPopulares></InstrutoresPopulares>
    </v-ons-page>
</template>

<script>
import ListaInstrutores from '../components/ListaInstrutores'
import InstrutoresPopulares from '../components/InstrutoresPopulares'
export default {
    components: {
        ListaInstrutores,
        InstrutoresPopulares
    }
}
</script>

<style scoped>
.page {
    height: 100vh;
}
.listaVertical {
    overflow-y: auto;
}
</style>