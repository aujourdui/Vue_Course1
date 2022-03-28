<script>
import { ref, computed, provide } from 'vue';
import UserData from './components/UserData';

export default {
  components: {
    UserData,
  },
  setup() {
    // const uName = ref('Maximilian');
    const uAge = ref(31);

    provide('userAge', uAge);

    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31,
    // });

    const uName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    // watch([uAge, uName], (newValues, oldValues) => {
    //   console.log('old age ' + oldValues[0]);
    //   console.log('New age ' + newValues[0]);
    //   console.log('old name ' + oldValues[1]);
    //   console.log('New name ' + newValues[1]);
    // });

    const setNewAge = () => {
      uAge.value = 33;
    };

    const setLastName = () => {
      // lastName.value = this.$refs.lastNameInput.value;   // option API
      lastName.value = lastNameInput.value.value;
    };

    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      lastNameInput,
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
  //   watch: {
  //     age(val) {
  //       console.log(val);
  //     },
  //   },
};
</script>

<template>
  <section class="container">
    <UserData :first-name="firstName" :last-name="lastName" />
    <button @click="setAge">Change age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
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
