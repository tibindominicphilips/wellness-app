import Survey from "../survey-component/Survey"
import Result from "../result/Result"
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
    computed: {
        ...mapState({
            appData: (state) => state.appData,
        })
    },
    components: {
        Survey,
        Result
    },
    methods: {
        ...mapActions(["updateUserProfile", "updateQuestionnaire"]),
        navigateToSurvey() {
            this.displaySurvey = true;
        },
        mainPage() {
            this.$router.replace("/login");
            let userProfile = { username: '', authenticated: false };
            this.updateUserProfile(userProfile);
        },
        calculateAndDisplayResult() {
            this.displaySurvey = false;
            this.displayResult = true;
        },
        backToHome() {
            this.displaySurvey = false;
            this.displayResult = false;
        }
    },
    data: () => ({
        displaySurvey: false,
        displayResult: false,
        items: [
            { title: 'Logout' }
        ],
        offset: true
    }),

    /* Lifecycle methods */
    created: function () {
        if (!(!!this.appData && !!this.appData.userProfile && !!this.appData.userProfile.authenticated)) {
            this.mainPage();
        }
        this.updateQuestionnaire([])
    },
};