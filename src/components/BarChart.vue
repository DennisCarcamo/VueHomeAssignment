<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { Bar } from 'vue-chartjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  props: ['chartLabels', 'chartDatas', 'label', 'color'],
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: this.chartLabels,
        datasets: [{ data: this.chartDatas, label: this.label, backgroundColor: this.color ?? '#78c0e0' }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
