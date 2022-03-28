<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    // const uName = ref('Maximilian');
    const uAge = ref(31);

    const firstName = ref('');
    const lastName = ref('');
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31,
    // });

    const uName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    const setNewAge = () => {
      uAge.value = 33;
    };

    const setFirstName = () => {
      firstName.value = event.target.value;
    };

    const setLastName = () => {
      lastName.value = event.target.value;
    };

    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      setFirstName,
      setLastName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   },
  // },
};
</script>

<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <p>{{ age }}</p>
    <button @click="setAge">Change age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />
    </div>
  </section>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
