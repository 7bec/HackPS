<template lang='pug'>
	<v-ons-page>
		div.background
		v-ons-toolbar(modifier='transparent')
			div.left
				v-icon(x-large) mdi-chevron-left
			div.center.font.title(style='text-align: center;') Treine em casa
		div.font.subtitle(style='text-align: center; margin-top: 30px;') Escolha sua modalidade de treino
		ListaModalidades
	</v-ons-page>
</template>

<script>
import ListaModalidades from '../components/ListaModalidades'
export default {
    components: {
        ListaModalidades
    }
}
</script>
<style scoped>
.font {
	font-family: roboto;
}
.background {
	background-color: white;
}
.subtitle {
	font-size: 1em;
	font-weight: 450;

	opacity: 0.6;
}
.title {
	font-size: 1.4;
	text-transform: uppercase;
	font-weight: 600;
}
</style>