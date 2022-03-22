const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      // result: "",
    };
  },
  watch: {
    // counter(Value) {
    //   if (Value < 37) {
    //     this.result = "Not there yet";
    //   } else if (Value === 37) {
    //     this.result = this.counter;
    //   } else if (Value > 37) {
    //     this.result = "Too much!!";
    //     setTimeout(() => {
    //       this.result = "";
    //       this.counter = 0;
    //     }, 2000);
    //   }
    // },
    // counter(Value) {
    //   if (Value > 37) {
    //     setTimeout(() => {
    //       this.counter = 0;
    //     }, 2000);
    //   }
    // },
    result() {
      const that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 2000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return "Too much!!";
      }
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount("#assignment");
