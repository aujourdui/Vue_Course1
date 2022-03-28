<script>
// composition API
// import { ref } from 'vue';
import { reactive } from 'vue';

export default {
  setup() {
    // separate ref
    // const myGoal = ref('master composition API');
    // const toggleIsVisible = ref(true);

    // ref object
    // const manageData = ref({
    //   myGoal: 'master composition API',
    //   toggleIsVisible: true,
    // });

    // reactive object
    const manageData = reactive({
      myGoal: 'master composition API',
      toggleIsVisible: true,
    });

    const toggleGoal = () => {
      // toggleIsVisible.value = !toggleIsVisible.value; // separate ref
      // manageData.value.toggleIsVisible = !manageData.value.toggleIsVisible; // ref object
      manageData.toggleIsVisible = !manageData.toggleIsVisible; // reactive object
    };

    return {
      manageData,
      toggleGoal,
      // myGoal,
      // toggleIsVisible,
      // toggleGoal,
    };
  },
};

// option API
// export default {
//   data() {
//     return {
//       myGoal: 'master option API',
//       toggleIsVisible: true,
//     };
//   },
//   methods: {
//     toggleGoal() {
//       this.toggleIsVisible = !this.toggleIsVisible;
//     },
//   },
// };
</script>

<template>
  <!-- option API -->
  <!-- <h2>My Course Goal</h2> -->
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- <h3 v-if="toggleIsVisible">{{ myGoal }}</h3> -->
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <!-- <button @click="toggleGoal">Toggle Goal</button> -->
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->

  <!-- composition API -->
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="manageData.toggleIsVisible">{{ manageData.myGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
