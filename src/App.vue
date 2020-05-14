<template>
  <div id="app">
    <v-ons-navigator swipeable swipe-target-width="200px"
      :page-stack="pageStack"
      :pop-page="goBack"
    ></v-ons-navigator>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      pageStack: []
    }
  },
  methods: {
    /* Override default pop behavior and delegate it to the router */
    goBack() {
      // Go to the parent route component
      this.$router.push({ name: this.$route.matched[this.$route.matched.length - 2].name });
      // this.$router.go(-1); // Could work but might be misleading in some situations
    }
  },
  created() {
    /* Define how routes should be mapped to the page stack.
     * This assumes all the routes contain VOnsPage components
     * and are provided in the 'default' view.
     * For nested named routes or routes that for some reason
     * should not be mapped in VOnsNavigator, filter them out here.
     */
    const mapRouteStack = route => this.pageStack = route.matched.map(m => m.components.default);
    /* Set initial pageStack depending on current
     * route instead of always pushing 'Home' page
     */
    mapRouteStack(this.$route);
    /* On route change, reset the pageStack to the next route */
    this.$router.beforeEach((to, from, next) => mapRouteStack(to) && next());
  }
}
</script>

<style scoped>
  .content {
    height: 100vh;
    width: 100vw;
  }
  .background {
    background-image: url('../imagens/background-login.png');
    background-origin: content-box;
    background-position: center;
    background-size: cover;
  }
  .backgroundLogin-cell {
    height: 100%;
    padding: 12px;
  }
  .logoImg {
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .font-style {
    font-family: 'Montserrat', sans-serif !important;
  }
  .font-size {
    font-size: 14px !important;
  }
  .text-input--material__label--active {
    color: rgb(255, 0, 0) !important;
  }
  .text-input--material:focus {
    background-image: -webkit-linear-gradient(rgb(255, 0, 0), red), -webkit-linear-gradient(bottom, transparent 1px, #afafaf 1px) !important;
    background-image: linear-gradient(red, red), linear-gradient(to top, transparent 1px, #afafaf 1px) !important;
  }
  .text-input {
    color: white !important;
  }
</style>