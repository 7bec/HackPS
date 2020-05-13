<template>
    <v-ons-page class="page">
        <ListaInstrutores :instrutores='instrutores' :style='`height: calc(100vh - ${instrutoresPopularesHeight}px); overflow-y: auto;`'></ListaInstrutores>
        <InstrutoresPopulares id="instPop" :instrutoresPopulares='instrutoresPopulares'></InstrutoresPopulares>
    </v-ons-page>
</template>

<script>
import firebase from 'firebase'
import ListaInstrutores from '../components/ListaInstrutores'
import InstrutoresPopulares from '../components/InstrutoresPopulares'
export default {
    fiery: true,
    components: {
        ListaInstrutores,
        InstrutoresPopulares
    },
    data () {
        return {
            instrutoresPopularesHeight: 0,
            instrutores: [],
        }
    },
    mounted () {
        this.instrutoresPopularesHeight = document.getElementById('instPop').clientHeight;
        console.log(this.instrutoresPopularesHeight)
        
    },
    created () {
        var modalidade = this.$route.params.modalidade
        console.log(modalidade)
        let that = this
        this.$fiery(firebase.firestore().collection('instrutores'), {
                query: q => q.where(modalidade, '==', true),
                onSuccess: (todos) => {
                    console.log(todos)
                    that.instrutores = todos
                   
                }
            })

    },
    computed: {
        instrutoresPopulares () {
             var pop = this.instrutores.map((instrutor)=>{
                        console.log('oi')
                        if (instrutor.trending == true) return instrutor
                    })
            console.log(pop)
            return pop
        }
    }
}
</script>

<style scoped>
.page {
    height: 100vh;
}
</style>