<script>
import { inject, computed } from 'vue';

export default {
  props: ['pid'],
  setup(props) {
    const products = inject('products');

    // const title = ref('');
    // const price = ref(null);
    // const description = ref('');

    const selectedProduct = computed(() => {
      return products.value.find((product) => product.id === props.pid);
    });

    const title = computed(() => {
      return selectedProduct.value.title;
    });
    const price = computed(() => {
      return selectedProduct.value.price;
    });
    const description = computed(() => {
      return selectedProduct.value.description;
    });

    return { title, price, description };
  },
};
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <RouterLink to="/products/p2">Product2</RouterLink>
  </section>
</template>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
