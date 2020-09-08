<template>
  <div id="register-form">
    <h1>Register Form</h1>
    <CoreFields />
    <CustomFields />
    <CovidInfo v-if="featureContext.getCovidInfo" />
    <Field id="submit" type="submit" />
  </div>
</template>

<script>
import Field from "../../components/Field.vue";
import CovidInfo from "../../components/CovidInfo.vue";

// Extensions.
import CoreFields from "./extensions/CORE/CoreFields.vue";
import USAFields from "./extensions/US/USAFields.vue";
import IndiaFields from "./extensions/IN/IndiaFields.vue";
import SingaporeFields from "./extensions/SG/SingaporeFields.vue";

let CustomFields = USAFields;

if (process.env.COUNTRY === 'IN') {
  CustomFields = IndiaFields;
} else if (process.env.COUNTRY === 'SG') {
  CustomFields = SingaporeFields;
}

export default {
  name: "RegisterForm",
  inject: ['featureContext'],
  components: {
    Field,
    CovidInfo,
    CoreFields,
    CustomFields,
  },
  data() {
    return {
      message: process.env.COUNTRY,
    };
  },
};
</script>
