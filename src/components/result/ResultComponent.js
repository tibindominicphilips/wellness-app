
import { mapActions, mapState } from 'vuex'
import Chart from '../chart/Chart'
import physicalImage from '@/assets/images/physical.jpg'
import mentalImage from '@/assets/images/mental.jpg'
import spiritualImage from '@/assets/images/spiritual.jpg'
import socialImage from '@/assets/images/social.jpg'
import intellectualImage from '@/assets/images/intellectual.jpg'

export default {
  computed: {
    ...mapState({
      categories: state => state.questionnaire,
    })
  },
  components: {
    Chart
  },
  methods: {
    ...mapActions(["updateQuestionnaire"]),
    setChartData: function (chartData) {
      this.getStrengthAndWeakness(chartData)
    },
    backToHome: function () {
      this.updateQuestionnaire([]);
      this.$emit('backToHome');
    },
    getStrengthDescription: function (category) {
      return this.descriptionData.find(description => description.category === category).StrengthDescription;
    },
    getWeaknessDescription: function (category) {
      return this.descriptionData.find(description => description.category === category).weaknessDescription;
    },
    getStrengthAndWeakness: function (chartData) {
      let strengthData = { strengths: [], weakness: [] }
      chartData.forEach(element => {
        if (element.value >= 12) {
          strengthData.strengths.push({ category: element.category, description: this.getStrengthDescription(element.category) })
        } else {
          strengthData.weakness.push({ category: element.category, description: this.getWeaknessDescription(element.category) })
        }
      });
      this.strengthAndWeakness = strengthData;
      if (!this.strengthAndWeakness.strengths.length && !this.strengthAndWeakness.weakness.length) {
        this.$router.replace("/home");
      }
    },
    getCategoryImage: function (category) {
      if (category === "Physical") {
        return physicalImage;
      } else if (category === "Social") {
        return socialImage
      } else if (category === "Spiritual") {
        return spiritualImage;
      } else if (category === "Mental and Emotional") {
        return mentalImage;
      } else if (category === "Intellectual Health") {
        return intellectualImage
      }
    },
  },
  data: () => ({
    showLessStressDialog: false,
    showBetterMentalHealthDialog: false,
    showNatureDialog: false,
    descriptionData: [
      {
        category: "Physical",
        weaknessDescription: ["Get better sleep", "Get the nutrients your body needs to maintain health", "Have stronger muscles and bones"],
        StrengthDescription: ["Diet & Nutrition", "Physical Activity & Fitness", "Sleep"]
      },
      {
        category: "Social",
        weaknessDescription: ["Connect to community", "Enhance feelings of social trust", "Make a positive impact on others", "Spend time with Family and Friends"],
        StrengthDescription: ["Community Wellbeing", "Relationships", "Family"]
      },
      {
        category: "Mental and Emotional",
        weaknessDescription: ["Learn to master stress", "Reduce your risk for cardiovascular disease", "Slow down the aging process"],
        StrengthDescription: ["Stress Mastery", "Thoughts & Emotions", "Sleep"]
      },
      {
        category: "Spiritual",
        weaknessDescription: ["Increase feelings of hope, compassion, and gratitude", "Improve health with clean air and water", "Create calm with your own healing environment"],
        StrengthDescription: ["Relationship with Nature", "Life Purpose", "Home Environment"]
      },
      {
        category: "Intellectual Health",
        weaknessDescription: ["Face your fears", "Think more clearly", "Experience calm"],
        StrengthDescription: ["Time Management", "Facing Fear & Anxiety", "Sleep"]
      }
    ],
    strengthAndWeakness: { strengths: [], weakness: [] }
  })
};

