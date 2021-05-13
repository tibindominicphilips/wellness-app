

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
        isValid: function () {
            const index = this.categories[this.selectedQnIndex].questions.findIndex(question => question.answer === undefined);
            return index === -1 ? false : true;
        },
        change: function (index) {
            goTo("#qn" + this.selectedQnIndex + (index + 1), this.scrollOption())
        },
        loadNextQn: function () {
            this.selectedQnIndex += 1
            goTo(0, this.scrollOption());
        },
        loadPrevQn: function () {
            this.selectedQnIndex -= 1
            goTo(0, this.scrollOption());
        },
        submit: function () {
            console.log(this.categories)
        }
    },
    data: () => ({
        categories: require('../../assets/json/data.json'),
        options: require('../../assets/json/options.json'),
        selectedQnIndex: 0
    }),

    /* Lifecycle methods */
    mounted: function () {
        goTo(0);
    },

};