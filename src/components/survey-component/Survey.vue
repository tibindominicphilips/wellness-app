<style lang="scss" >
@import "../../assets/scss/variables.scss";
@import "./Survey.scss";
</style>
<template>
  <div>
    <v-card elevation="2" class="ma-auto">
      <div class="pa-5">
        <h1 class="font-weight-medium mb-10 mt-5">
          {{ categories[selectedQnIndex].name }}
        </h1>
        <v-form>
          <div
            v-for="(question, index) in categories[selectedQnIndex].questions"
            :key="question.id"
            v-bind:id="'qn' + selectedQnIndex + index"
          >
            <v-radio-group
              class="questions"
              v-bind:label="question.question"
              v-model="question.answer"
              @change="change(index)"
            >
              <v-radio
                v-for="option in options"
                :key="option.label"
                :label="option.label"
                :value="option.value"
              ></v-radio>
            </v-radio-group>
          </div>
          <div class="text-center mt-5">
            <v-btn
              elevation="2"
              color="primary"
              @click="loadPrevQn()"
              v-if="selectedQnIndex !== 0"
              >Previous</v-btn
            >
            <v-btn
              class="mx-2"
              elevation="2"
              color="primary"
              @click="loadNextQn()"
              :disabled="isValid()"
              v-if="selectedQnIndex !== categories.length - 1"
              >Next</v-btn
            >
            <v-btn
              class="mx-2"
              elevation="2"
              :disabled="isValid()"
              color="primary"
              @click="submit()"
              v-if="selectedQnIndex == categories.length - 1"
              >Submit</v-btn
            >
          </div>
        </v-form>
      </div>
      <!-- <div class="pa-5">
        Question {{ selectedQnIndex + 1 }} of {{ questions.length }}
      </div> -->
    </v-card>
    <!-- <div class="mt-3">
      <h3>Answers</h3>
      <div v-for="(qn, index) in questions" :key="index">
        <b>Qn no {{ index + 1 }}:&nbsp;</b>{{ qn.answer }}
      </div>
    </div> -->
    <div style="height: 100vh"></div>
  </div>
</template>
<script src="./SurveyJS.js">
</script>
