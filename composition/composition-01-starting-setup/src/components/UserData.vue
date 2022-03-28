<script>
import { computed, inject } from 'vue';

export default {
  props: ['firstName', 'lastName'],
  // setup(props, context) {    // to use emit
  setup(props) {
    // const age = ref('age');
    // const fName = re
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    //context.emit('save-data', 1); // this.$emit("save-data", 1)

    return {
      userName,
      age,
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
