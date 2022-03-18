const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
  },
});

app.mount("#events");
