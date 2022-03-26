<script>
export default {
  methods: {
    addOne() {
      this.$store.dispatch('increment');
    },
  },
};
</script>

<template>
  <button @click="addOne">Add 2</button>
</template>
