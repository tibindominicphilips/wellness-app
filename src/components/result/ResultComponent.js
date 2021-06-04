
import { mapState } from 'vuex'
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
    setChartData: function (chartData) {
      this.getStrengthAndWeakness(chartData)
    },
    getDescription: function (category) {
      return this.descriptionData.find(description => description.category === category).description;
    },
    getStrengthAndWeakness: function (chartData) {
      let strengthData = { strengths: [], weakness: [] }
      chartData.forEach(element => {
        if (element.value > 12) {
          strengthData.strengths.push({ category: element.category, description: this.getDescription(element.category) })
        } else {
          strengthData.weakness.push({ category: element.category, description: this.getDescription(element.category) })
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
    descriptionData: [
      {
        category: "Physical",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
      {
        category: "Social",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      },
      {
        category: "Mental and Emotional",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      },
      {
        category: "Spiritual",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
      {
        category: "Intellectual Health",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
      }
    ],
    strengthAndWeakness: { strengths: [], weakness: [] }
  })
};

