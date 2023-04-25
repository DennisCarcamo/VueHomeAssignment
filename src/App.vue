<template>
  <BRow class="text-end px-2 my-4">
    <BCol align-self="center text-title"><h1 class="text-start">
      {{ routename }}
    </h1></BCol>
    <BCol align-self="center">
      <nav>
        <router-link to="/">Dashboard</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </BCol>
  </BRow>

  <router-view />
</template>

<script lang="ts" setup>
// eslint-disable-next-line import/no-extraneous-dependencies
import { computed } from 'vue';
import ExampleView from './components/ExampleView.vue';
import router from './router';

const routename = computed(():string => {
  const currentRoute = router.currentRoute.value.name?.toString();
  let finalName = '';
  if (currentRoute) {
    finalName = currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1);
  }
  return finalName;
});

</script>

<style lang="scss">
.text-title{
  color:#0a58cad9;
}

nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
