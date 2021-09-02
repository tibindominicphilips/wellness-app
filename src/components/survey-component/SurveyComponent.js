import goTo from 'vuetify/es5/services/goto'
import { mapActions, mapState } from "vuex";
import axios from 'axios'

export default {
    computed: {
        ...mapState({
            categories: state => JSON.parse(JSON.stringify(state.questionnaire)),
        }),
    },
    components: {
    },
    methods: {
        ...mapActions(["updateQuestionnaire"]),
        scrollOption: function () {
            return {
                duration: 300,
                offset: 80,
                easing: 'linear',
            }
        },
        getScreenWidth: function () {
            return (window.innerWidth > 0) ? window.innerWidth : screen.width;
        },
        scrollTo: function (postion, options) {
            if (options) {
                if (this.getScreenWidth() <= 810) {
                    goTo(postion, this.scrollOption());
                }
            } else {
                goTo(postion);
            }
        },
        validateCategory: function () {
            const questionIndex = this.categories[this.selectedCategoryIndex].questions.findIndex(question => question.answer === undefined);
            this.categories[this.selectedCategoryIndex].isValid = (questionIndex === -1) ? true : false;
        },
        getProgress: function () {
            const validCategoriesCount = this.categories.reduce((count, category) => (category.isValid ? count + 1 : count), 0);
            this.progress = (validCategoriesCount / this.categories.length) * 100;
        },
        change: function (questionIndex) {
            this.updateQuestionnaire(this.categories)
            this.validateCategory();
            if (document.getElementById("qn" + this.selectedCategoryIndex + (questionIndex + 1))) {
                setTimeout(() => {
                    this.scrollTo("#qn" + this.selectedCategoryIndex + (questionIndex + 1), this.scrollOption());
                    this.activeQuestion = "qn" + this.selectedCategoryIndex + (questionIndex + 1)
                }, 1000);
            }
        },
        getQuestionClass: function (value) {
            return value !== this.activeQuestion ? "inActiveQuestion" : "";
        },
        setActiveQuestion: function (value) {
            this.activeQuestion = value;
        },
        getOptions:function(){
            axios.get('http://localhost:8005/api/options').then(res=>{
                if(!!res.data && res.data.length){
                    this.options=res.data;
                } else {
                    this.options=[];
                }
            }).catch(()=>{
                this.options=[];       
            })
        },
        getQuestions:function(){
            axios.get('http://localhost:8005/api/sections').then(res=>{
                if(!!res.data && res.data.length){
                    var data = res.data.map(el=>{return {id:el.id,name:el.name,questions:el.Questions}})
                    this.updateQuestionnaire(data)
                } else {
                    this.updateQuestionnaire([])
                }
            }).catch(()=>{
                this.updateQuestionnaire([])        
            })
        },
        loadNextQn: function () {
            this.selectedCategoryIndex += 1;
            this.setActiveQuestion("qn" + this.selectedCategoryIndex + 0);
            goTo(0, this.scrollOption());
            this.getProgress();
        },
        loadPrevQn: function () {
            this.selectedCategoryIndex -= 1;
            this.setActiveQuestion("qn" + this.selectedCategoryIndex + 0);
            goTo(0, this.scrollOption());
        },
        submit: function () {
            this.isLoading = true;
            this.getProgress();
            setTimeout(() => {
                this.isLoading = false;
                this.$emit('calculateAndDisplayResult', true);
               // this.$router.replace('/results');
            }, 300);
        }
    },
    data: () => ({
        options: [],
        selectedCategoryIndex: 0,
        activeQuestion: "qn00",
        progress: 0,
        isLoading: false
    }),

    /* Lifecycle methods */
    beforeMount: function () {
        this.getOptions();
        this.getQuestions();
    },
    mounted: function () {
        goTo(0);
    },
    updated: function () {
    },

};