<template>
  <Field id="fullName" label="Full Name" />
  <Field id="location" label="Location" />
  <Field id="email" label="Email" />
  <Field id="password" label="Password" type="password" />
</template>

<script>
import Field from "../../../../components/Field.vue";

export default {
  name: "CoreFields",
  components: {
    Field,
  },
};
</script>
