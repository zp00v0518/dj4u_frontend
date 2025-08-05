<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="input-group">
      <atomic-input
        v-bind="fullName"
        name="fullName"
        type="text"
        placeholder="Full name"
        :rules="rules.fullName"
      />
    </div>
    <div class="input-group">
      <atomic-input
        v-bind="email"
        name="email"
        type="email"
        placeholder="E-mail"
        :rules="rules.email"
      />
    </div>
    <div class="input-group">
      <atomic-input
        v-bind="password"
        name="password"
        type="password"
        placeholder="Password"
        :rules="rules.password"
      />
    </div>
    <div class="input-group">
      <atomic-input
        v-bind="passwordConfirm"
        name="passwordConfirm"
        type="password"
        placeholder="Password confirm"
        :rules="rules.passwordConfirm"
      />
    </div>
    <atomic-button label="Create account" @click="submitForm" />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

const emit = defineEmits(["close"]);
const rules = {
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required"),
};

const {
  values: formData,
  validate,
  defineComponentBinds,
} = useForm({
  validationSchema: rules,
  initialValues: {
    fullName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  },
});

const email = defineComponentBinds("email");
const fullName = defineComponentBinds("fullName");
const password = defineComponentBinds("password");
const passwordConfirm = defineComponentBinds("passwordConfirm");

const submitForm = async () => {
  console.log(formData);
  const { valid } = await validate();
  if (valid) {
    console.log("Registration successful with data:", formData);
    emit("close");
  } else {
    console.log("Form has validation errors.");
  }
};
</script>

<style lang="scss" scoped></style>
