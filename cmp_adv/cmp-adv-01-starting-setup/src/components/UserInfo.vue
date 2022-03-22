<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>

<template>
  <section>
    <BaseCard>
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <BaseBadge :type="role" :caption="role.toUpperCase()"></BaseBadge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </BaseCard>
  </section>
</template>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
