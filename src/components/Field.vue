<template>
  <label style="{}">{{label ? `${label}: ` : ''}}</label>
  <input v-bind:type="type" v-bind:id="id" />
  <br />
  <br />
</template>

<script>
export default {
  name: "Field",
  props: {
    label: String,
    id: String,
    type: {
      defaut: 'text',
      type: String,
    },
  },
};
</script>

<style scoped>
label {
  width: 160px;
  display: inline-block;
}
</style>