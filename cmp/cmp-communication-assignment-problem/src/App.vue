<template>
  <div>
    <active-user :username="user.name" :age="user.age"></active-user>
    <user-data @pass-userdata="passData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "kyosuke",
        age: 31,
      },
    };
  },
  methods: {
    passData(name, age) {
      this.user = {
        name: name,
        age: age,
      };
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
#app input {
  margin-right: 1rem;
  margin-left: 3px;
}
</style>
