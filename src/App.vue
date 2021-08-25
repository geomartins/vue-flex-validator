<template>
  <img alt="Vue logo" src="./assets/logo.png" @click="submit()">
</template>

<script>
import { inject } from "vue";

export default {
  name: "App",
  setup() {
    const flexValidator = inject("flexValidator");
    return {
      flexValidator,
    }; 
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        location: "",
      },
    };
  },
  components: {},
  methods: {
    submit() {
      try {
        console.log(this.flexValidator);
        new this.flexValidator(this.formData).check({
          name: "required|notNull",
          email: "required|notNull|email",
          location: "required|min:30",
        });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};
</script>

<style>

</style>
