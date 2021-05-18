

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
            console.log(this.categories)
        }
    },
    data: () => ({
        categories: require('../../assets/json/data.json'),
        options: require('../../assets/json/options.json'),
        selectedQnIndex: 0
    }),

    /* Lifecycle methods */
    created: function () {
    }
};