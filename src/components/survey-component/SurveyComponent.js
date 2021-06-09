import goTo from 'vuetify/es5/services/goto'
import { mapActions, mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            categories: state => JSON.parse(JSON.stringify(state.questionnaire)),
        })
    },
    components: {
    },
    methods: {
        ...mapActions(["updateQuestionnaire"]),
        scrollOption: function () {
            return {
                duration: 300,
                offset: 80,
                easing: 'linear',
            }
        },
        validateCategory: function () {
            const questionIndex = this.categories[this.selectedCategoryIndex].questions.findIndex(question => question.answer === undefined);
            this.categories[this.selectedCategoryIndex].isValid = (questionIndex === -1) ? true : false;
        },
        getProgress: function () {
            const validCategoriesCount = this.categories.reduce((count, category) => (category.isValid ? count + 1 : count), 0);
            this.progress = (validCategoriesCount / this.categories.length) * 100;
        },
        change: function (questionIndex) {
            this.updateQuestionnaire(this.categories)
            this.validateCategory();
            if (document.getElementById("qn" + this.selectedCategoryIndex + (questionIndex + 1))) {
                goTo("#qn" + this.selectedCategoryIndex + (questionIndex + 1), this.scrollOption());
            }
        },
        loadNextQn: function () {
            this.selectedCategoryIndex += 1;
            goTo(0, this.scrollOption());
            this.getProgress();
        },
        loadPrevQn: function () {
            this.selectedCategoryIndex -= 1;
            goTo(0, this.scrollOption());
        },
        submit: function () {
            this.isLoading = true;
            this.getProgress();
            setTimeout(() => {
                this.isLoading = false;
                this.$router.replace('/results');
            }, 300);
        }
    },
    data: () => ({
        options: require('../../assets/json/options.json'),
        selectedCategoryIndex: 0,
        progress: 0,
        isLoading: false
    }),

    /* Lifecycle methods */
    beforeMount: function () {
        this.updateQuestionnaire(require('../../assets/json/data.json'))
    },
    mounted: function () {
        goTo(0);
    },
    updated: function () {
    },

};