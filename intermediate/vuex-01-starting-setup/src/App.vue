<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter';
import FavoriteValue from './components/FavoriteValue';
import UserAuth from './components/UserAuth';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    addOne() {
      // this.$store.dispatch('increase', { value: 10 });
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>

<template>
  <BaseContainer title="Vuex" v-if="isAuth">
    <TheCounter />
    <FavoriteValue />
    <button @click="addOne">Add 10</button>
    <ChangeCounter />
  </BaseContainer>
  <BaseContainer title="Auth">
    <UserAuth />
  </BaseContainer>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
