import Survey from "../survey-component/Survey"
import { mapState } from "vuex";
import { mapActions } from "vuex";
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
        ...mapActions(["updateUserProfile"]),
        navigateToSurvey() {
            this.displaySurvey = true;
        },
        mainPage(){
            this.$router.replace("/login");
            let userProfile = { username: '' };
            this.updateUserProfile(userProfile);
        }
          },
    data: () => ({
        displaySurvey: false,
        items: [
       { title: 'Logout' }
        ],
        offset: true  
    }),

    /* Lifecycle methods */
    created: function () {
    },
};