<template>
  <Field id="vaccineDate" label="Vaccination Date" />
  <Field id="vaccineLocation" label="Vaccination Location" />
  <Field id="waitingList" label="Are you waiting for Vaccine?" type="checkbox" />
</template>

<script>
import Field from './Field.vue'

export default {
  name: "CovidInfo",
  props: {},
  components: {
    Field
  } 
};
</script>

<style scoped>
</style>