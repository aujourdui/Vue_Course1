const app = Vue.createApp({
  data() {
    return {
      text: "",
      confirmedText: "",
    };
  },
  methods: {
    attention() {
      alert("Pay attention!!");
    },
    register(event) {
      this.text = event.target.value;
    },
    confirmInput() {
      this.confirmedText = this.text;
    },
  },
});

app.mount("#assignment");
