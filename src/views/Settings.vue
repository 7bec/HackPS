<template lang='pug'>
v-ons-page
  v-ons-toolbar(style='background: white;')
    .left
      v-ons-back-button Voltar
    .center Configurações
  div.background
  div.content
    v-ons-list(style='margin-bottom: 28px;')
      v-ons-list-item(tappable)
        .left
          .list-item__thumbnail
            v-avatar(size='40' style='box-shadow: rgba(31, 70, 88, 0.1) 0px 3px 10px 0px;')
              img(src="https://www.thispersondoesnotexist.com/image")
        .center
          span.list-item__title.font1 Carlos Silva
          span.list-item__subtitle.font2 editar informações
        .right(style='padding-right: 6px;')
          svg(style="width:24px;height:24px" viewBox="0 0 24 24")
            path(fill="#c7c7cc" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z")
      v-ons-list-item.font3(modifier="chevron" tappable)
        | Configurações Gerais do Aplicativo
    v-ons-list(style='margin-bottom: 28px;')
      v-ons-list-header Edição de Modalidade
      v-ons-list-item(modifier="chevron" tappable) Musculação
      v-ons-list-item(modifier="chevron" tappable) Natação
      v-ons-list-item(tappable) Adicionar outra...
    v-ons-list(style='margin-bottom: 28px;')
      v-ons-list-header informações Adicionais
      v-ons-list-item(modifier="chevron" tappable)
        .center
          .list-item__title Endereço
        .right.colorPrimary Rua Aurora, 1234
      v-ons-list-item(modifier="chevron" tappable)
        .center
          .list-item__title CPF
        .right.colorPrimary 12345678910
      v-ons-list-item(modifier="chevron" tappable)
        .center
          .list-item__title E-mail
        .right.colorPrimary carlos_silva@gmail.com
      v-ons-list-item(modifier="chevron" tappable)
        .center
          .list-item__title Gênero
        .right.colorPrimary Masculino
    v-ons-list-item(tappable style='margin-bottom: 28px; background: white; text-align: center;')
      .center
        .list-item__title Restaurar compras
    v-ons-list(style='margin-bottom: 28px;')
      v-ons-list-header informações Adicionais
      v-ons-list-item(modifier="chevron" tappable) Histórico de Compras
      v-ons-list-item(modifier="chevron" tappable) Termos de Serviço
      v-ons-list-item(modifier="chevron" tappable) Licenças
      v-ons-list-item(modifier="chevron" tappable) Ajuda e Suporte
    v-ons-list-item(tappable style='margin-bottom: 28px; background: white; text-align: center;')
      .center
        .list-item__title(@click='signUserOut()') Sair
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
    }
  },
  methods:{
    signUserOut(){
      this.$store.dispatch('signUserOut')
    }
  }
}
</script>

<style scoped>
.background {
  background-color: #eeeeee;
}
.back-button {
  color: #F05429;
}
.toolbar-button--quiet {
  color: #F05429;
}
.colorPrimary {
  color: #F05429; 
}
.font1 {
  font-family: roboto !important;
  font-size: 20px !important;
  line-height: 34px !important;
  letter-spacing: -0.84px !important;
  font-weight: 500;
}
.font2 {
  font-family: Roboto;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: -0.23px;
  font-weight: 500;
  color: #8498AE;
  text-transform: uppercase;
}
.font3 {
  font-family: Roboto;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.23px;
  font-weight: 400;
}
.list-header {
  background: linear-gradient(to right, #eeeeee 0%, #eeeeee 50%, #eeeeee 51%, #eeeeee 71%, #eeeeee 100%) !important;
}
</style>