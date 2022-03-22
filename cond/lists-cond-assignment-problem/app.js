const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasks: [],
      visibility: true,
    };
  },
  computed: {
    // handleVisibility() {
    //   return { visible: this.visibility, hidden: !this.visibility };
    // },
    changeText() {
      return this.visibility ? "hide" : "show";
    },
  },
  methods: {
    addTasks() {
      this.tasks.push(this.inputTask);
    },
    toggleVisibility() {
      this.visibility = !this.visibility;
    },
  },
});

app.mount("#assignment");
