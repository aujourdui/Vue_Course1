<script>
import TheHeader from './components/layout/TheHeader';
import TheResources from './components/learning-resources/TheResources';

export default {
  components: {
    TheHeader,
    TheResources,
  },
};
</script>

<template>
  <TheHeader title="RememberMe" />
  <TheResources />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
