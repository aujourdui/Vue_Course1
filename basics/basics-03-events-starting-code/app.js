const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(Value) {
      if (Value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + "" + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log("running again");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    // setName(event, lastName) {
    //   this.name = `${event.target.value}`;
    // },
    submitForm() {
      alert("submitted!");
    },
    // confirmInput() {
    //   this.confirmedName = this.name;
    // },
    resetInput() {
      this.name = "";
      this.lastName = "";
      // this.fullname = "";
    },
  },
});

app.mount("#events");
