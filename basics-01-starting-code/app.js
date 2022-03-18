const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      vueLink: "https://vuejs.org/guide/quick-start.html#without-build-tools",
    };
  },
});

app.mount("#user-goal");
