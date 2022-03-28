<script>
import { computed } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props) {
    // const age = ref('age');
    // const fName = re
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    return {
      userName,
    };
  },
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   },
  // },
};
</script>

<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>
