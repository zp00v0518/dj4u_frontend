<template>
  <form class="form" @submit.prevent>
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
    <atomic-button
      label="Create account"
      :is-disabled="!meta.valid"
      @click="submitForm"
    />
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import useProfileStore from "@/store/useProfileStore";
const { registration } = useProfileStore();

const emit = defineEmits(["close"]);
const rules = {
  fullName: yup
    .string()
    .max(50, "Name must be less than 50 characters")
    .required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .required("Password confirmation is required")
    .test("passwords-match", "Passwords must match", (value, context) => {
      return value === context.options.context.password;
    }),
};

const {
  meta,
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
  const { valid } = await validate();
  if (valid) {
      const data = await registration(formData);
      console.log("Registration successful with data:", data);
    emit("close");
  } else {
    console.log("Form has validation errors.");
  }
};
</script>

<style lang="scss" scoped></style>
