<script>
import { computed } from 'vue';

export default {
  props: ['firstName', 'lastName', 'age'],
  setup(props, context) {
    // const age = ref('age');
    // const fName = re
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    context.emit('save-data', 1); // this.$emit("save-data", 1)

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
