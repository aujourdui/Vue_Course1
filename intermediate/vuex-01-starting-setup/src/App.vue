<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
  },
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
  },
};
</script>

<template>
  <base-container title="Vuex">
    <TheCounter />
    <button @click="addOne">Add 1</button>
    <ChangeCounter />
  </base-container>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
