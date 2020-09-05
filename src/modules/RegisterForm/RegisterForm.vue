<template>
  <div id="register-form">
    <Field id="fullName" label="Full Name" />
    <Field id="location" label="Location" />
    <Field id="email" label="Email" />
    <Field id="password" label="Password" type="password" />
    <CovidInfo />
    <Field id="submit" type="submit" />
  </div>
</template>

<script>
import Field from "../../components/Field.vue";
import CovidInfo from "../../components/CovidInfo.vue";

export default {
  name: "RegisterForm",
  components: {
    Field,
    CovidInfo,
  },
};
</script>
