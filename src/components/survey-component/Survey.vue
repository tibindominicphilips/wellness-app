<style scoped lang="scss" >
@import "../../assets/scss/variables.scss";
@import "./Survey.scss";
</style>
<template>
  <div>
    <v-card elevation="2" class="ma-auto">
      <div class="pa-5">
        <v-form>
          <v-radio-group
            v-bind:label="questions[selectedQnIndex].question"
            v-model="questions[selectedQnIndex].answer"
            @change="change()"
          >
            <v-radio
              v-for="qn in questions[selectedQnIndex].options"
              :key="qn.label"
              :label="qn.label"
              :value="qn.value"
            ></v-radio>
          </v-radio-group>
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
              v-if="selectedQnIndex !== questions.length - 1"
              :disabled="questions[selectedQnIndex].answer == null"
              >Next</v-btn
            >
            <v-btn
              class="mx-2"
              elevation="2"
              color="primary"
              @click="submit()"
              :disabled="questions[selectedQnIndex].answer == null"
              v-if="selectedQnIndex == questions.length - 1"
              >Submit</v-btn
            >
          </div>
        </v-form>
      </div>
      <div class="pa-5">
        Question {{ selectedQnIndex + 1 }} of {{ questions.length }}
      </div>
    </v-card>
    <div class="mt-3">
      <h3>Answers</h3>
      <div v-for="(qn, index) in questions" :key="index">
        <b>Qn no {{ index + 1 }}:&nbsp;</b>{{ qn.answer }}
      </div>
    </div>
  </div>
</template>
<script src="./SurveyJS.js">
</script>
