<style scoped lang="scss" >
@import "../../assets/scss/variables.scss";
@import "Home.scss";
</style>
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span class="c-p header-text">Wellness Assessment</span>
      <v-spacer> </v-spacer>
      <v-btn
        class="text-center white--text px-0 btn_icon"
        elevation="0"
        color="primary"
        v-if="appData && appData.userProfile && appData.userProfile.username"
        >{{ appData.userProfile.username }}
      </v-btn>
      <v-menu
        :offset-y="offset"
        open-on-hover
        class="menu_content"
        :elevation="0"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-icon class="ml-2 mr-6" v-bind="attrs" dark v-on="on">
            mdi-menu-down
          </v-icon>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title
              elevation="0"
              class="menu_item white--text"
              @click="mainPage"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container class="px-0" fluid>
        <v-col
          md="12"
          lg="6"
          xl="6"
          sm="12"
          class="my-3 mx-auto text-center"
          v-if="!displaySurvey && !displayResult"
        >
          <v-card elevation="2" class="ma-auto">
            <v-row class="mx-0 pt-2 d-flex">
              <img
                class="homeimage"
                alt=""
                src="../../assets/images/homeIcon.jpg"
              />
            </v-row>
            <p class="pa-6 text-align-justify homePageText">
              Wellbeing is an essential component of excelling in academics and
              in life. Maintaining your wellbeing requires intentionality,
              reflection, and a committment to choosing thoughts and behaviors
              that help you to be at your best. Please complete the following
              assessment, answering each question honestly (as it is, not as you
              wish it would be). There is no "right" result, except the one that
              is most accurate for you. This tool will help you to develop an
              Individual Plan for Ehnanced Wellbeing that could dramatically
              enhance your academic as well as life experience.
            </p>
            <v-spacer> </v-spacer>
            <v-btn class="ma-2 primaryButton mb-4" @click="navigateToSurvey()"
              >I am ready. Let's Start</v-btn
            >
          </v-card>
        </v-col>
        <v-col
          md="12"
          lg="8"
          xl="6"
          sm="12"
          class="ma-auto px-8"
          v-if="displaySurvey"
        >
          <Survey @calculateAndDisplayResult="calculateAndDisplayResult" />
        </v-col>
        <v-col
          md="12"
          lg="8"
          xl="6"
          sm="12"
          class="ma-auto px-8"
          v-if="displayResult"
        >
          <Result />
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>
<script src="./HomeComponent.js">
</script>