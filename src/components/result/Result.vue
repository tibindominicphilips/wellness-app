<style lang="scss" >
@import "../../assets/scss/variables.scss";
@import "./Result.scss";
</style>
<template>
  <v-container fluid>
    <v-col class="text-center mt-5">
      <h1>Let's analyze together!</h1>
    </v-col>
    <v-col class="text-center">
      <Chart />
    </v-col>
    <v-col class="text-center mt-5">
      <h1>Celebrate your strengths!</h1>
      <p class="text-subtitle-1">
        An important part of the wellbeing journey is recognizing the positive
        aspects you already have going for you.
      </p>
      <v-row class="justify-center">
        <v-col
          class="col-md-3 d-flex"
          v-for="(positive, positiveIndex) in positives"
          :key="positiveIndex"
        >
          <v-card class="mx-auto my-5">
            <v-img
              height="250"
              :src="getCategoryImage(positive.category)"
            ></v-img>
            <v-card-title class="justify-center">{{
              positive.category
            }}</v-card-title>
            <v-card-text class="text-align-justify">
              {{ positive.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col>
      <h1 class="text-center">Get to work on changes</h1>
      <p class="text-center text-subtitle-1">
        Let's see what you can improve!
      </p>
      <v-row class="justify-center">
        <v-col
          class="col-md-3 d-flex"
          v-for="(negative, negativeIndex) in negatives"
          :key="negativeIndex"
        >
          <v-card class="mx-auto my-5">
            <v-img
              height="250"
              :src="getCategoryImage(negative.category)"
            ></v-img>
            <v-card-title class="justify-center">{{
              negative.category
            }}</v-card-title>
            <v-card-text class="text-align-justify">
              {{ negative.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="text-center mb-5">
      <v-btn color="primary" to="/home">Take assessment again</v-btn>
    </v-col>
  </v-container>
</template>
<script src="./ResultComponent.js">
</script>
