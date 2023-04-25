<template>
  <BContainer class="about-container">
    <p>
      World Grocer is a premium grocery chain. For several months, you have been working with World
      Grocer to implement a next-generation marketing personalization solution. The solution uses
      advanced statistical techniques to recommend which offer to send each customer to maximize
      Customer Lifetime Value (CLV)
    </p>
    <p>
      The upcoming pilot consists of a development period followed by a 2-month “go live & measure
      uplift” period. You have been asked to develop a data visualization tool to enable World
      Grocer stakeholders to analyze the performance over the course of the go-live period. A
      workshop with World Grocer helped define the requirements:
    </p>
  </BContainer>
  <VFooter></VFooter>
</template>

<script lang="ts" setup>
import VFooter from '@/components/VFooter.vue';
</script>

<style lang="css" scoped>
.about-container {
  min-width: 100%;
  height: 90%;
  min-height: 80vh;
  padding: 30px;
}
</style>
