<template>
  <form @submit.prevent="submitData">
    <label for="username">username</label>
    <input type="text" v-model="enteredUsername" />
    <label for="age">age</label>
    <input type="number" v-model="enteredAge" />
    <button>Set user data</button>
  </form>
</template>

<script>
export default {
  emit: ["pass-userdata"],
  data() {
    return {
      enteredUsername: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("pass-userdata", this.enteredUsername, this.enteredAge);
    },
  },
};
</script>
