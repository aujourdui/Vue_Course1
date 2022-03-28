<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    function inc() {
      store.dispatch('increment');
    }

    return { inc };
  },
};
</script>

<template>
  <button @click="inc">Increment</button>
</template>
