<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>

<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>
