<style scoped lang="scss" >
@import "../../assets/scss/variables.scss";
@import "App.scss";
</style>
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/" tag="span"
        ><span class="c-p header-text">Wellness Application</span></router-link
      >
    </v-app-bar>
    <v-main>
      <v-container class="px-0" fluid>
        <v-col md="12" lg="6" xl="6" sm="12" class="ma-auto">
          <Survey />
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>
<script src="./AppJS.js">
</script>
