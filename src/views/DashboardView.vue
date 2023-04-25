<!-- eslint-disable max-len -->
<template>
  <KPI></KPI>
  <BContainer class="main-layout mt-5">
    <h2 class="text-center">VLC Daily View</h2>
    <BRow>
      <BCol cols="12" md="9">
      </BCol>
      <BCol class="text-end">
        <FormInputDatePicker
          placeholder="No Date Selected"
          locale="en-En"
          v-model="date"
          date-format="mm-dd-yyyy"
        >
        </FormInputDatePicker>
      </BCol>
    </BRow>
    <BarChart
      class="my-2"
      v-if="!loading"
      :chart-labels="['Experimental Group', 'Control Group']"
      :chartDatas="chartDatas"
      label="Totals"
    ></BarChart>
  </BContainer>
</template>

<script setup lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { onMounted, ref, watch } from 'vue';
import DashboardServices from '@/services/DashboardServices';
import KPI from '@/components/KPI.vue';
import ChartData from '../types/ChartData';
import BarChart from '../components/BarChart.vue';

const date = ref('');

const chartDatas = ref<Array<number>>([]);

const loading = ref(false);

const loadData = async () => {
  try {
    loading.value = true;
    chartDatas.value = [];
    const response = await DashboardServices.getChart();

    if (date.value !== '' && date.value !== null) {
      const dateObj = new Date(date.value);
      const dateTime = dateObj.getTime();
      response.data = response.data.filter((element: ChartData) => {
        const elementDateOb = new Date(element.label);
        const elementDateTime = elementDateOb.getTime();
        if (elementDateTime <= dateTime) {
          return true;
        }
        return false;
      });
    }

    let experimentalsum = 0;
    response.data.forEach((element: ChartData) => {
      experimentalsum += element.expSum;
    });

    let controlSum = 0;
    response.data.forEach((element: ChartData) => {
      controlSum += element.ctrlSum;
    });

    chartDatas.value.push(experimentalsum, controlSum);
    loading.value = false;
  } catch (error) {
    console.log(error);
    loading.value = false;
  }
};

onMounted(async () => {
  loadData();
});

watch(date, (newDate, oldDate) => {
  loadData();
});
</script>

<style lang="css" scoped>
.main-layout {
  margin: 0%;
  min-width: 100%;
  max-height: 50%;
}

:deep(.form-control) {
  border-radius: 0% !important;
  border: 0% !important;
}
.col-1 {
  background-color: aqua;
}

.primary-text {
}
</style>
