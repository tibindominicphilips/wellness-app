<style lang="scss" >
@import "../../assets/scss/variables.scss";
@import "./Survey.scss";
</style>
<template>
  <div>
    <v-card elevation="2" class="ma-auto">
      <div class="pa-5">
        <h1 class="font-weight-medium mb-10 mt-5">
          {{ categories[selectedCategoryIndex].name }}
        </h1>
        <v-form>
          <div
            v-for="(question, questionIndex) in categories[
              selectedCategoryIndex
            ].questions"
            :key="question.id"
            v-bind:id="'qn' + selectedCategoryIndex + questionIndex"
          >
            <v-radio-group
              class="questions"
              v-bind:label="question.question"
              v-model="question.answer"
              @change="change(questionIndex)"
            >
              <v-radio
                v-for="option in options"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              ></v-radio>
            </v-radio-group>
          </div>
          <div class="text-center mt-5 pb-0 actionButtonGroup">
            <v-btn
              elevation="2"
              color="secondary"
              @click="loadPrevQn()"
              v-if="selectedCategoryIndex !== 0"
              >Previous</v-btn
            >
            <v-btn
              class="mx-2"
              elevation="2"
              color="primary"
              @click="loadNextQn()"
              :disabled="!this.categories[this.selectedCategoryIndex].isValid"
              v-if="selectedCategoryIndex !== categories.length - 1"
              >Next</v-btn
            >
            <v-btn
              class="mx-2"
              elevation="2"
              :disabled="!this.categories[this.selectedCategoryIndex].isValid"
              color="primary"
              @click="submit()"
              v-if="selectedCategoryIndex == categories.length - 1"
              >Submit</v-btn
            >
            <div class="progressbar">
              <v-progress-linear
                v-bind:value="getProgress()"
              ></v-progress-linear>
              <div style="clear: both"></div>
            </div>
          </div>
        </v-form>
      </div>
      <!-- <div class="progressbar">
        <v-progress-linear v-bind:value="getProgress()"></v-progress-linear>
        <div style="clear: both"></div>
      </div> -->
    </v-card>
    <div style="height: 100vh"></div>
  </div>
</template>
<script src="./SurveyComponent.js">
</script>
