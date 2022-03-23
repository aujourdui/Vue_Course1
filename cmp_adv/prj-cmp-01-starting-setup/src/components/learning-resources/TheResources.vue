<script>
import StoredResources from "./StoredResources"
import AddResource from "./AddResource"

export default {
  components:{
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectTab: 'stored-resources',
    };
  },
  methods {
    setSelectedTab(tab) {
      this.selectedTab = tab
    }
  }
};
</script>

<template>
  <BaseCard>
    <BaseButton @click="setSelectedTab('stored-resources')"
      >Stored Resources</BaseButton
    >
    <BaseButton @click="setSelectedTab('add-resource')"
      >Add Resource</BaseButton
    >
  </BaseCard>
  <Component :is="selectedTab" />
</template>
