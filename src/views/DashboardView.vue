<!-- eslint-disable max-len -->
<template>
  <BContainer class="main-layout">
    <h1 class="text-center py-2">Dashboard</h1>
    <BRow>
      <BCol cols="3" class="col-1">
        <FormInputDatePicker placeholder="No Date Selected" locale="en-En" v-model="date" date-format="en-En">
        </FormInputDatePicker>
      </BCol>
      <BCol cols="3" class="col-1">
        <FormInputSelect :options="options"></FormInputSelect>
      </BCol>
      <BCol cols="3" class="col-1">
        <h2>Bye</h2>
      </BCol>
      <BCol cols="3" class="col-1">
        <h2>Bye</h2>
      </BCol>
    </BRow>
    <BContainer>
      <h3 class="text-center">Let's Start</h3>
      <h4 class="text-center primary-text">Use the above fields to set the data fields</h4>
    </BContainer>
  </BContainer>
</template>

<script setup lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
import { onMounted, ref } from 'vue';
import DashboardServices from '@/services/DashboardServices';
import ChartData from '../types/ChartData';

const date = ref();

const options = ref([{ value: 'someValue', text: 'Some value' }]);

const chartdata = ref<ChartData>();

onMounted(async () => {
  try {
    const response = await DashboardServices.getChart();
    chartdata.value = response.data;
    console.log(chartdata);
  } catch (error) {
    alert(error);
  }
});
</script>

<style lang="css" scoped>
.main-layout {
  background-color: lightblue;
  height: 200px;
  width: 100%;
}

.col-1 {
  background-color: aqua;
}

.primary-text {}
</style>
