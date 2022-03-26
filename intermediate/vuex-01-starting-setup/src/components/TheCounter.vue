<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(['finalCounter']),
  },
};
</script>

<template>
  <h3>{{ finalCounter }}</h3>
</template>
