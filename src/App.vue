<template>
  <div id="app">
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "./modules/RegisterForm/RegisterForm.vue";
import featureContext from "./context";

export default {
  name: "App",
  components: {
    RegisterForm,
  },
  provide() {
    return {
      featureContext,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
