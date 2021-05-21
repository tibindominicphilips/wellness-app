import Survey from "../survey-component/Survey"

export default {
    computed: {
       entered_name() {
            return sessionStorage.getItem("loggedInUser")
          }
    },
    components: {
        Survey
    },
    methods: {
    },
    data: () => ({
    }),

    /* Lifecycle methods */
    created: function () {
    },
};