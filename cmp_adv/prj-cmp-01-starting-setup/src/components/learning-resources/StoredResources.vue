<script>
import LearningResource from './LearningResource';

export default {
  props: ['resources'],
  components: {
    LearningResource,
  },
};
</script>

<template>
  <ul>
    <LearningResource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    />
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
