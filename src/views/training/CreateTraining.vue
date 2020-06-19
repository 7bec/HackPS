<template lang='pug'>
  
  v-ons-page
    div.background
    div.content
      v-ons-row(width='100%' vertical-align='top')
        v-row(no-gutters style='padding: 0; width: 100%; justify-content: space-between')
          v-col(cols='auto')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
          v-col(style='position: relative; text-align: center; align-self: center;')
            div.font1 <b>Novo treino</b>
          v-col(cols='auto' style='opacity: 0;')
            v-icon(dark style='width: 44px; height: 44px; font-size: 44px; color: #666666') mdi-chevron-left
      v-divider(style='margin-top: 16px')
      v-ons-row(width='100%' style='padding: 16px 0 0 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col(cols='auto' style='margin-bottom: 16px;')  Nome do Treino
          v-col(cols='12')
            ons-input.custom-input(placeholder='Escolha o nome do seu treino' style='width: 100%' modifier='material')
              input.text-input.text-input--material(type='text')
              span.text-input__label.text-input--material__label
      v-ons-row(width='100%' style='padding: 24px 0 8px 0;')
        v-row.font3(no-gutters style='padding: 0; width: 100%;')
          v-col Exercícios (8)
          v-col(@click='$router.push("/addExercise")' cols='auto' style='font-weight: 500; font-size: 14px;')
            span Adicionar novo
            span
              v-icon(small color='rgb(202, 33, 33)') mdi-plus
        v-row.font4(no-gutters style='padding: 4px 0 0 0;') Crie ou adicione exercícios predefinidos
      v-ons-row(width='100%' style='padding: 0 0 22px 0')
        v-row(v-for='(session, i) in sessions' :key='i' draggable style='padding: 0; width: 100%;')
          v-col(cols='6' style='padding: 0;')
            h3.list-custom-header {{session.name}}
          v-col(cols='6' style='padding: 0; align-self: center; text-align: right; padding-right: 16px;')
            v-icon(small style='margin-right: 8px;') mdi-pencil
            v-icon mdi-drag-horizontal-variant
          v-row(no-gutters style='width: 100%; margin-bottom: 4px;')
            v-col(v-if='j < 4' v-for='(exercise, j) in session.exercises' :key='j' cols='6' style='padding: 2px 4px;')
              v-card.boxDone(outlined style='height: 100%; overflow: hidden; position: relative; border-radius: 10px; filter: drop-shadow(0px 10px 5px rgba(27, 28, 32, 0.102));')
                v-img(@click='exercise.isSelected = !exercise.isSelected; selectItem()' height='150' :src='exercise.image' :style="exercise.isSelected ? { filter: 'sepia(100%) brightness(100%) grayscale(60%) hue-rotate(90deg) saturate(300%)' } : {}" style='border-bottom-left-radius: 0px; border-bottom-right-radius: 0px')
                v-container(@click='exercise.isSelected = !exercise.isSelected; selectItem()' style='padding-top: 16px; padding-bottom: 8px; width: 100%; background: white;')
                  v-layout(column)
                    v-flex(xs12)
                      h5(style='margin: 0; font-weight: 700; font-size: 14.5px; line-height: 14.5px; letter-spacing: -0.83px; color: #334856;') {{exercise.name}}
                div(style='background-color: white; height: 38px; width: 38px; position: absolute; top: 126px; left: 50%; transform: translate(-50%, 0); -webkit-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); -moz-box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); box-shadow: 0px 10px 15px 0px rgba(27,27,32,0.102); border-radius: 50%;')
                  div(style='height: 100%; width: 100%; position: relative; padding: 3px;')
                    label.checkbox.checkbox--material(style='background-color: none; overflow: visible; height: 100%; width: 100%;')
                      input.checkbox__input.checkbox--material__input(v-model='exercise.isSelected' v-on:change="selectItem()" type='checkbox')
                      .checkbox__checkmark.checkbox--material__checkmark
                v-ons-ripple(color='rgba(204, 204, 204, 0.2)')
          div.seeMore(style='padding: 8px 0 28px 0')
            span(style='display: inline-block;') VER TODOS
    v-ons-fab(v-if='isAnyoneSelected' position="bottom right" style='margin-bottom: 35px;')
      v-icon(color='#fff' style='margin-bottom: 4px;') mdi-pencil
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
const ponichinelo = {
  name: 'Polichinelo',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/01_-jumping_jacks.jpg',
  route: '/polichinelo',
  isSelected: false
},
corridaParada = {
  name: 'Corrida parada',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/09_high_knees_lower_body.jpg',
  route: '/corrida-parada',
  isSelected: false
},
alongQuadriceps = {
  name: 'Alongamento Quadríceps',
  image: 'https://saocamilo-sp.br/assets/uploads/a22.jpg',
  route: '/alongamento-quadriceps',
  isSelected: false
},
alongTorax = {
  name: 'Alongamento Tórax',
  image: 'https://1.bp.blogspot.com/-0B9qDWCizrY/UJZjQb7SuRI/AAAAAAAAIvI/kQbfSw2xtvU/s1600/Alongamento.jpeg',
  route: '/alongamento-torax',
  isSelected: false
}
const flexaoBraco = {
  name: 'Flexão de Braço',
  image: 'https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2015/11/flexao-exercicios-para-fazer-em-casa-2.jpg&format=webp&hash=ee7bc3379602eaaf7a39993f6ea4af791fa5da97dbc83713d980bf9670e1cc28',
  route: '/flexao-braco',
  isSelected: false
},
flexaoRotacao = {
  name: 'Flexão com rotação',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/11_pushup_and_rotation.jpg',
  route: '/flexao-rotacao',
  isSelected: false
},
barraFixa = {
  name: 'Barra Fixa',
  image: 'https://http2.mlstatic.com/barra-fixa-comprar-paralela-flexo-treino-em-casa-folha-D_NQ_NP_645456-MLB28072849592_092018-F.jpg',
  route: '/barra-fixa',
  isSelected: false
},
tricepsBanco = {
  name: 'Tríceps no Banco',
  image: 'https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2015/11/mergulho-no-banco-exercicios-para-fazer-em-casa.jpg&format=webp&hash=494a29a79f49ba4c6d9e660ecf63d01919476803ce8bba6a04bf83b93725c388',
  route: '/triceps-banco',
  isSelected: false
},
elevacaoLateral = {
  name: 'Elevação Lateral',
  image: 'https://www.hipertrofia.org/blog/wp-content/uploads/2017/09/execu%C3%A7%C3%A3o-eleva%C3%A7%C3%A3o-lateral-para-ombros.jpg',
  route: '/elevacao-lateral',
  isSelected: false
},
abdominal = {
  name: 'Abdominal',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/04_abdominal_crunch_core.jpg',
  route: '/abdominal',
  isSelected: false
}
const agachamentoParede = {
  name: 'Agachamento na Parede',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/02_wall_sit_lower_body.jpg',
  route: '/agachamento-parede',
  isSelected: false
},
subidaPernas = {
  name: 'Subida Alternada de Pernas',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/05_stepup_onto_chair.jpg',
  route: '/subida-pernas',
  isSelected: false
},
squat = {
  name: 'Squat',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/06_squat_lower_body.jpg',
  route: '/squat',
  isSelected: false
},
agachamentoCalice = {
  name: 'Agachamento Cálice',
  image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/7_minute_workout_slideshow/10_lunge_lower_body.jpg',
  route: '/agachamento-calice',
  isSelected: false
},
agachamentoUnilateral = {
  name: 'Agachamento Unilateral',
  image: 'https://files.incrivel.club/files/news/part_28/283360/9320810-489610-20-0-1500447708-1500447716-650-1-1500447716-650-cdbb8359d9-1590647493.jpg',
  route: '/agachamento-unilateral',
  isSelected: false
}
const esteira = {
  name: 'Esteira',
  image: 'https://images-americanas.b2w.io/produtos/01/00/img/1584690/3/1584690340_1GG.jpg',
  route: '/esteira',
  isSelected: false
},
pularCorda = {
  name: 'Pular corda',
  image: 'https://media.istockphoto.com/vectors/smiling-fit-girl-doing-exercises-with-jumping-rope-woman-in-vector-vector-id891569362',
  route: '/pular-corda',
  isSelected: false
}

import firebase from 'firebase'
export default {
  name: 'Training',
  data () {
    return {
      activeBtn: 1,
      isAnyoneSelected: false,
      objectsSelected: [],
      sessions: [
        // { name: generic, values: [] }, ESSE CAMPO seria pra caso fosse possível criar mais sessões, mas pelo visto as sessões "Aquecimento", "Parte Superior" etc vão ser predefinidas
        { name: 'Aquecimento',
          exercises: [
            ponichinelo,
            corridaParada,
            alongQuadriceps,
            alongTorax
          ]
        },
        { name: 'Parte Superior',
          exercises: [
            flexaoBraco,
            flexaoRotacao,
            barraFixa,
            tricepsBanco,
            elevacaoLateral,
            abdominal
          ]
        },
        { name: 'Parte Inferior',
          exercises: [
            agachamentoParede,
            subidaPernas,
            squat,
            agachamentoCalice,
            agachamentoUnilateral
          ]
        },
        { name: 'Aeróbico',
          exercises: [
            esteira,
            pularCorda
          ]
        }
      ]
    }
  },
  methods: {
    selectItem () {
      for(let i = 0; this.sessions.length > i; i++) {
        for(let j = 0; this.sessions[i].exercises.length > j; j++) {
          if (this.sessions[i].exercises[j].isSelected) {
            this.isAnyoneSelected = true
            return
          }
        }
      }
      this.isAnyoneSelected = false
    }
  }
}
</script>

<style scoped>
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
  padding: 4px 0 4px 16px;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
}
ons-fab.fab, ons-speed-dial-item.fab, button.fab {
    background-color: #4CAF50;
}
.boxDone {
  position: relative;
  display: inline-block;
}
.checkbox--material__checkmark:before {
  border-radius: 50%;
  height: 32px;
  width: 32px;
  border: 3px solid #4CAF50;
}
.checkbox--material__input:before {
  top: 20%;
  left: 20%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 0 11px #717171;
  box-sizing: border-box;
  background-color: #717171;
}
.checkbox__checkmark {
  height: 32px;
  width: 32px;
}
:checked + .checkbox--material__checkmark:before {
  border: 2px solid #4CAF50;
  background-color: #4CAF50;
  transition: background-color 0.1s linear, border-color 0.1s linear;
}
:checked + .checkbox--material__checkmark:after {
  position: absolute;
  top: 35%;
  left: 27%;
  transition: transform 0.2s ease 0.2s;
  width: 15px;
  height: 7.5px;
  transform: scale(1) rotate(-45deg);
  border-width: 3px;
}
.seeMore {
  font-family: Roboto;
  width: 100%;
  margin: 0 16px;
  padding: 8px 0 28px 0;
  color: rgba(240, 84, 41, 0.87);
  line-height: 15px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.84px;
  border: solid;
  border-width: thin 0 0 0;
  border-color: rgba(69, 69, 69, 0.12);
}
</style>