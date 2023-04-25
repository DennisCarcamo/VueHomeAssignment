<!-- eslint-disable max-len -->
<template>
  <BContainer class="main-layout-kpi">
    <h2 class="text-center">KPI'S</h2>
    <BRow class="justify-content-center">
      <BCol cols="6">
        <BarChart
          class="my-4"
          v-if="!loading"
          :chart-labels="['Total Offers']"
          :chartDatas="[chartDatas.totalOffers]"
          color="#4C4C9D"
          label="Offers"
        ></BarChart>
      </BCol>
      <BCol cols="6">
        <BarChart
          class="my-4"
          v-if="!loading"
          :chart-labels="['Experimental Group', 'Control Group']"
          :chartDatas="[chartDatas.totalRepeatersExp, chartDatas.totalRepeatersCtrl]"
          color="#712F79"
          label="Repeaters"
        ></BarChart>
      </BCol>
      <BCol cols="6">
        <BarChart
          class="my-4"
          v-if="!loading"
          :chart-labels="['Experimental Group', 'Control Group']"
          :chartDatas="[chartDatas.totalCLVExp, chartDatas.totalCLVCtrl]"
          label="CLV (Customer Lifetime Value)"
          color="#F7996E"
        ></BarChart>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { onMounted, ref, watch } from 'vue';
import DashboardServices from '@/services/DashboardServices';
import WidgetData from '../types/WidgetData';
import BarChart from './BarChart.vue';

const date = ref('');

const chartDatas = ref<WidgetData>({
  totalOffers: 0,
  totalRepeatersExp: 0,
  totalRepeatersCtrl: 0,
  totalCLVExp: 0,
  totalCLVCtrl: 0,
});

const loading = ref(false);

const loadData = async () => {
  try {
    loading.value = true;
    chartDatas.value = {
      totalOffers: 0,
      totalRepeatersExp: 0,
      totalRepeatersCtrl: 0,
      totalCLVExp: 0,
      totalCLVCtrl: 0,
    };

    const response = await DashboardServices.getWidgets();
    chartDatas.value = response.data;
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
.main-layout-kpi {
  min-width: 100%;
  margin: 0%;
  width: 100%;
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
