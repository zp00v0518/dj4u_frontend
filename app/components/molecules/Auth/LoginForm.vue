<template>
  <form class="form" @submit.prevent="submitForm" >
    <div class="input-group">
      <atomic-input
        name="email"
        type="email"
        placeholder="E-mail"
        v-model="formData.email"
        :rules="rules.email"
      />
    </div>
    <div class="input-group">
      <atomic-input
        name="password"
        type="password"
        placeholder="Password"
        v-model="formData.password"
        :rules="rules.password"
      />
    </div>

    <div class="login-options">
      <label class="remember-me">
        <input type="checkbox" />
        Remember me
      </label>
      <a href="#" class="forgot-password-link"> Forgot password? </a>
    </div>

    <atomic-button label="Log in" />
  </form>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";

const emit = defineEmits(["close"]);

const rules = {
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
};

const {
  meta,
  values: formData,
  validate,
} = useForm({
  validationSchema: rules,
  initialValues: {
    email: "",
    password: "",
  },
});

const submitForm = async () => {
  const { valid } = await validate();
  if (valid) {
    // Тут буде логіка входу з formData
    console.log("Login successful with data:", formData);
    emit("close");
  } else {
    console.log("Form has validation errors.");
  }
};
</script>

<style lang="scss" scoped>
.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: var(--txt-secondary-color);
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  input[type="checkbox"] {
    width: auto;
  }
}

.forgot-password-link {
  color: var(--txt-secondary-color);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--txt-primary-color);
  }
}
</style>
