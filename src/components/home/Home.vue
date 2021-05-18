<style scoped lang="scss" >
@import "../../assets/scss/variables.scss";
@import "Home.scss";
</style>
<template>
  <v-app>
    <v-app-bar app color="primary" dark
      ><span class="c-p header-text">Wellness Application</span>
      <v-spacer> </v-spacer>
      <v-app-bar-title class="pr-5 text-center">{{
        entered_name
      }}</v-app-bar-title>
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
<script src="./HomeComponent.js">
</script>