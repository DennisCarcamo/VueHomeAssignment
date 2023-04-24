<!-- eslint-disable no-tabs -->
<template>
  <BButton variant="primary" @click="onButtonclicked">Click Me</BButton>
</template>

<script lang="ts" setup>

// eslint-disable-next-line import/no-extraneous-dependencies
import { BButton } from 'bootstrap-vue-next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ref } from 'vue';

const show = ref(false);

const onButtonclicked = () => {
  show.value = !show.value;
};

</script>
