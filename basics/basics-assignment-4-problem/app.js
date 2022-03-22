const app = Vue.createApp({
  data() {
    return {
      name: "",
      bColor: "",
      visibility: true,
    };
  },
  computed: {
    // handleVisibility() {
    //   return this.visibility ? "visible" : "hidden";
    // },
    handleVisibility() {
      return {
        user1: this.name === "user1",
        user2: this.name === "user2",
        visible: this.visibility,
        hidden: !this.visibility,
      };
    },
  },
  methods: {
    toggleVisibility() {
      this.visibility = !this.visibility;
    },
  },
});

app.mount("#assignment");
