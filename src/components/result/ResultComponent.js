
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            categories: state => state.questionnaire,
        })
    },
    mounted: function () {
        console.log('result page categories values from store:', this.categories);
    },

};