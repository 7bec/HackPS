<template lang='pug'>
  
  v-ons-page
    div.background
    div.content
      v-ons-row(width='100%' vertical-align='top')
        v-row(no-gutters style='padding: 0; width: 100%; justify-content: space-between')
          v-col(cols='auto')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
          v-col(style='position: relative; text-align: center; align-self: center;')
            div.font1 <b>Criar Exercício</b>
          v-col(cols='auto' style='opacity: 0;')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
      v-divider(style='margin-top: 16px')
      v-ons-row(width='100%' style='padding: 16px 0 0 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col(cols='auto' style='margin-bottom: 16px;')  Nome do Exercício
          v-col(cols='12')
            ons-input.custom-input(placeholder='Escolha o nome do exercício' style='width: 100%' modifier='material')
              input.text-input.text-input--material(type='text')
              span.text-input__label.text-input--material__label
      v-ons-row(width='100%' style='padding: 16px 0 0 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          p Drag the p element back and forth between the two rectangles:
          .droptarget(v-on:drop='drop' v-on:dragover='allowDrop')
            p#dragtarget(v-on:dragstart='dragStart' v-on:drag='dragging' draggable='true')
              | Drag me!
          .droptarget(v-on:drop='drop' v-on:dragover='allowDrop')
          p(style='clear:both;')
            strong Note:
            |  drag events are not supported in Internet
            |         Explorer 8 and earlier versions or Safari 5.1 and earlier versions.
          p#demo
    div.tabbar
      v-bottom-navigation(:value='activeBtn' grow color='#f05429')
        v-btn
          span Início
          v-icon mdi-home
        v-btn
          span Treinos
          v-icon mdi-weight-lifter
        v-btn
          span Perfil
          v-icon mdi-account
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Training',
  data () {
    return {
      activeBtn: 1
    }
  },
  methods: {
    dragStart:function(event)  {
      console.log(event)
      jQuery.event.props.push('dataTransfer')
      event.dataTransfer.setData("Text", event.target.id)
    },
    dragging:function(event) {
      document.getElementById("demo").innerHTML =
        "The p element is being dragged";
    },
    allowDrop:function(event) {
      event.preventDefault();
    },
    drop:function(event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
      document.getElementById("demo").innerHTML =
        "The p element was dropped";
    }
  }
}
</script>

<style scoped>
.droptarget {
  float: left; 
  width: 100px; 
  height: 35px;
  margin: 15px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
.background {
  background-color: rgb(250, 250, 250);
}
.content {
  padding: 32px 16px 40px 16px;
}
.font1 {
  font-family: roboto !important;
  font-size: 20px !important;
  line-height: 20px !important;
  letter-spacing: -0.84px !important;
  color: #172B3E;
}
.font2 {
  font-family: Roboto;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.84px;
  font-weight: 700;
  color: #7d8184;
}
.font3 {
  font-family: Roboto;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.84px;
  font-weight: 700;
  color: rgb(202, 33, 33);
}
.font4 {
  font-family: Roboto;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.23px;
  font-weight: 500;
  color: #8498AE;
}
.font5 {
  font-family: roboto !important;
  font-size: 16px !important;
  font-weight: 700;
  line-height: 16px !important;
  letter-spacing: -0.84px !important;
  color: #172B3E;
}
.text-input--material__label--active {
  color: #f05429;
}
.text-input--material:focus {
  background-image: linear-gradient(#f05429, #f05429), linear-gradient(to top, transparent 1px, #afafaf 1px);
}
.list-custom-header {
  font-family: 'Roboto', 'Noto', sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  color: #757575;
  font-size: 14px;
  margin: 0;
  padding: 12px 0 12px 16px;
  font-weight: 500;
  line-height: 24px;
}
ons-fab.fab, ons-speed-dial-item.fab, button.fab {
    background-color: #4CAF50;
}
</style>