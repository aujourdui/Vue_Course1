const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullname() {
      console.log("running again");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "ito";
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = `${event.target.value}`;
    },
    submitForm() {
      alert("submitted!");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
      this.confirmedName = "";
    },
  },
});

app.mount("#events");
