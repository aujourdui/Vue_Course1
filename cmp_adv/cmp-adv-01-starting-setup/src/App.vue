<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('active-goals')">ActiveGoals</button>
    <button @click="setSelectedComponent('manage-goals')">ManageGoals</button>
    <!-- <ActiveGoals v-if="selectedComponent === 'active-goals'" />
    <ManageGoals v-if="selectedComponent === 'manage-goals'" /> -->
    <!-- <component :is="selectedComponent" /> -->
    <KeepAlive>
      <Component :is="selectedComponent" />
    </KeepAlive>
  </div>
</template>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
