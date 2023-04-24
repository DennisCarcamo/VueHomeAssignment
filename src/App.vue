<template>
  <BRow class="text-end">
    <BCol></BCol>
    <BCol align-self="end">
      <nav>
        <router-link to="/">Dashboard</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </BCol>
  </BRow>

  <router-view />
</template>

<script lang="ts" setup>
import ExampleView from './components/ExampleView.vue';
</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
