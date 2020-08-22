<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import store from '@/store/index';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    async test() {
      await store.dispatch('incrWheelsAction', 2)
      const axles = store.getters.axles
      console.log('axles value:', axles);

      await store.dispatch('incrWheelsAction', 2)
      const axlesAndWheels = store.getters.axlesAndWheels
      console.log('axlesDouble value:', axlesAndWheels.axlesDouble);
    },
  },
  created() {
    this.test();
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
