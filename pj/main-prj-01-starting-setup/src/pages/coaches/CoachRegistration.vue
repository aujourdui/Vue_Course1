<script>
import CoachForm from '../../components/coaches/CoachForm';

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data); //this is an action name
    },
  },
};
</script>

<template>
  <section>
    <BaseCard>
      <h2>Register as a coach</h2>
      <CoachForm @save-data="saveData" />
    </BaseCard>
  </section>
</template>
