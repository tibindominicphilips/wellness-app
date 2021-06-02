
import { mapState } from 'vuex'
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    computed: {
        ...mapState({
            categories: state => state.questionnaire,
        })
    },
  data() {
        return {
          chartData: {
            labels: [
            ],
            datasets: [{
              label: '',
              borderWidth: 1,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              pointBorderColor: '#2554FF',
              data: []
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  display: true
                }
              }],
              xAxes: [{
                gridLines: {
                  display: false
                }
              }]
            },
            legend: {
              display: true
            },
            responsive: true,
            maintainAspectRatio: false
          }
        }
      },
      created() {
        let chartLabel = [];
        let resultData = [];
        this.categories.forEach(element => {
          chartLabel.push(element.name);
          let sum = 0;
          element.questions.forEach(question => {
            sum = sum+ question.answer;
          })
          resultData.push(sum);
        });
          this.chartData.labels = chartLabel;
          this.chartData.datasets[0].data = resultData;
      },
      mounted: function () {
        this.renderChart(this.chartData, this.options)
    },

};

