

import goTo from 'vuetify/es5/services/goto'

export default {
    computed: {

    },
    components: {
    },
    methods: {
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
            const validCategoryCount = this.categories.reduce((count, category) => (category.isValid ? count + 1 : count), 0);
            return (validCategoryCount / this.categories.length) * 100;
        },
        change: function (questionIndex) {
            this.validateCategory();
            if (document.getElementById("qn" + this.selectedCategoryIndex + (questionIndex + 1))) {
                goTo("#qn" + this.selectedCategoryIndex + (questionIndex + 1), this.scrollOption());
            }
        },
        loadNextQn: function () {
            this.selectedCategoryIndex += 1;
            goTo(0, this.scrollOption());
        },
        loadPrevQn: function () {
            this.selectedCategoryIndex -= 1;
            goTo(0, this.scrollOption());
        },
        submit: function () {
            console.log('Submitted values: ', this.categories)
        }
    },
    data: () => ({
        categories: require('../../assets/json/data.json'),
        options: require('../../assets/json/options.json'),
        selectedCategoryIndex: 0
    }),

    /* Lifecycle methods */
    mounted: function () {
        goTo(0);
    },

};