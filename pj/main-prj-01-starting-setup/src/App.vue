<script>
import TheHeader from './layout/TheHeader';

export default {
  components: {
    TheHeader,
  },
};
</script>

<template>
  <TheHeader />
  <RouterView />
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
