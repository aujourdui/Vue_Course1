<script>
// export default {
//   props: ['searchTerm'],
//   emits: ['search'],
//   setup(context) {
//     const search = (event) => {
//       context.emit('search', event.target.value.value);
//     };

//     return {
//       search,
//     };
//   },
// };
export default {
  props: ['searchTerm'],
  emits: ['search'],
  methods: {
    search(event) {
      this.$emit('search', event.target.value);
    },
  },
};
</script>

<template>
  <form>
    <input
      type="search"
      @input="search"
      :value="searchTerm"
      placeholder="Filter items"
    />
  </form>
</template>

<style scoped>
input {
  font: inherit;
  width: 100%;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #00006b;
  background-color: #eeeeff;
}
</style>
