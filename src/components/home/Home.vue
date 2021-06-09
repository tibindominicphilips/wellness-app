<style scoped lang="scss" >
@import "../../assets/scss/variables.scss";
@import "Home.scss";
</style>
<template>
  <v-app>
    <v-app-bar app color="primary" dark
      ><span class="c-p header-text">Wellness Assessment</span>
      <v-spacer> </v-spacer>
      <v-app-bar-title
        class="pr-5 text-center"
        v-if="appData && appData.userProfile && appData.userProfile.username"
        >{{ appData.userProfile.username }}</v-app-bar-title
      >
    </v-app-bar>
    <v-main>
      <v-container class="px-0" fluid>
        <v-col class="ma-auto" v-if="!displaySurvey">
          <h1 class="text-center">Wellness Assessment</h1>
        </v-col>
        <v-col class="ma-auto d-flex" v-if="!displaySurvey">
          <img
            class="homeimage"
            alt=""
            src="../../assets/images/homeIcon.jpg"
          />
        </v-col>
        <v-col
          md="12"
          lg="6"
          xl="6"
          sm="12"
          class="ma-auto text-center"
          v-if="!displaySurvey"
        >
          <h2 class="pa-6 text-align-justify">
            Wellbeing is an essential component of excelling in academics and in
            life. Maintaining your wellbeing requires intentionality,
            reflection, and a committment to choosing thoughts and behaviors
            that help you to be at your best. Please complete the following
            assessment, answering each question honestly (as it is, not as you
            wish it would be). There is no "right" result, except the one that
            is most accurate for you. This tool will help you to develop an
            Individual Plan for Ehnanced Wellbeing that could dramatically
            enhance your academic as well as life experience.
          </h2>
          <v-spacer> </v-spacer>
          <v-btn
            class="ma-2"
            elevation="2"
            color="primary"
            @click="navigateToSurvey()"
            >I am ready. Let's Start</v-btn
          >
        </v-col>
        <v-col
          md="12"
          lg="6"
          xl="6"
          sm="12"
          class="ma-auto px-8"
          v-if="displaySurvey"
        >
          <Survey />
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>
<script src="./HomeComponent.js">
</script>