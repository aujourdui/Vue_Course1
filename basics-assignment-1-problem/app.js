const app = Vue.createApp({
  data() {
    return {
      name: "kyosuke",
      age: 31,
      imageAddress:
        "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg",
    };
  },
  methods: {
    favoriteNumber() {
      const number = Math.random();
      return number;
    },
  },
});

app.mount("#assignment");
