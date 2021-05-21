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
        navigateToSurvey() {
            this.displaySurvey = true;
        }
    },
    data: () => ({
        displaySurvey: false
    }),

    /* Lifecycle methods */
    created: function () {
    },
};