<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const counter = computed(() => {
      return store.getters.counter;
    });

    return { counter };
  },
};
</script>

<template>
  <h2>{{ counter }}</h2>
</template>
