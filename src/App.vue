<template>
  <v-app>
    <v-app-bar
      v-if='$route.meta.showToolbar'
      app
      color="transparent"
      dark
    >

      <v-spacer></v-spacer>

      <v-btn icon text>
        <v-icon large>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App'
};
</script>
