<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };
      console.log(formData);
    },
  },
};
</script>

<template>
  <form>
    <div @submit.prevent="submitForm" class="form-control">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description"></textarea>
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate" v-model="areas" />
    </div>
    <div class="form-control">
      <h3>Area of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" />
        <label for="career">Career Advisory</label>
      </div>
    </div>
    <BaseButton>Register</BaseButton>
  </form>
</template>
