

export default {
    computed: {
    },
    components: {
    },
    methods: {
        change: function () {

        },
        loadNextQn: function () {
            this.selectedQnIndex += 1
        },
        loadPrevQn: function () {
            this.selectedQnIndex -= 1
        },
        submit: function () {
            for (let index = 0; index < this.questions.length; index++) {
                console.log(index + 1 + ':', this.questions[index].answer)
            }
        }
    },
    data: () => ({
        questions: require('../../assets/json/data.json'),
        selectedQnIndex: 0
    }),

    /* Lifecycle methods */
    created: function () {
    }
};