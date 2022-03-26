<script>
export default {
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
  },
};
</script>

<template>
  <button @click="addOne">Add 2</button>
</template>
