
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
                    backgroundColor: [],
                    borderColor: [],
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
        let data = [];
        let bgColorList = [];
        let borderColorList = [];
        this.categories.forEach(element => {
            chartLabel.push(element.name);
            let sum = 0;
            let bgColor = "";
            let borderColor = "";
            element.questions.forEach(question => {
                sum = sum + question.answer;
            })
            let totalValue = Math.round((sum / element.questions.length) * 4)
            data.push({ category: element.name, value: totalValue })
            if (totalValue >= 12) {
             bgColor = "rgba(75, 192, 192, 0.2)";
             borderColor = "rgba(75, 192, 192, 1)";
            }else if (totalValue > 8 & totalValue < 12) {
                bgColor = "rgba(255, 206, 86, 0.2)";
                borderColor = "rgba(255, 206, 86, 1)";
            }else {
                bgColor = "rgba(255, 99, 132, 0.2)";
                borderColor = "rgba(255,99,132,1)";
            }
            resultData.push(totalValue);
            bgColorList.push(bgColor);
            borderColorList.push(borderColor);
        });
        this.chartData.labels = chartLabel;
        this.chartData.datasets[0].data = resultData;
        this.chartData.datasets[0].backgroundColor = bgColorList;
        this.chartData.datasets[0].borderColor = borderColorList;
        this.$emit('setChartData', data);
    },
    mounted: function () {
        this.renderChart(this.chartData, this.options)
    },

};
