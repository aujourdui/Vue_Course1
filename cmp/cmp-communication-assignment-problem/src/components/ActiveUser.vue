<template>
  <h2>{{ username }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  data() {
    // return {
    //   username: "kyosuke",
    //   age: "31",
    // };
  },
};
</script>
