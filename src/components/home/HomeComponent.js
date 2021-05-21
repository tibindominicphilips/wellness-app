import Survey from "../survey-component/Survey"
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            appData: (state) => state.appData,
        })
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