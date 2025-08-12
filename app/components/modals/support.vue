<template>
  <atomic-modal>
    <div class="support">
      <div class="support__title">Support</div>
      <div class="support__subtitle">
        Need personal assistance? Send us a message
      </div>
    </div>

    <form class="form" @submit.prevent="submitForm">
      <div class="input-group">
        <atomic-input
          v-bind="email"
          name="email"
          type="email"
          placeholder="Your Email"
          :rules="rules.email"
        />
      </div>
      <div class="input-group">
        <atomic-input
          v-bind="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          :rules="rules.subject"
        />
      </div>
      <div class="input-group">
        <atomic-textarea
          v-bind="message"
          name="message"
          placeholder="Message"
          :rules="rules.message"
        />
      </div>

      <atomic-button label="Send message" :is-disabled="!meta.valid" />

      <div class="support-options">
        <p>Are you a Business plan customer or using our API?</p>
        <a
          href="https://t.me/andriikalinichenko"
          class="account-manager-link"
          target="_blank"
          >Contact your account manager</a
        >
      </div>
    </form>
  </atomic-modal>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import * as yup from "yup";
import useProfileStore from "@/store/useProfileStore";
import { storeToRefs } from "pinia";

const { profile } = storeToRefs(useProfileStore());

const emit = defineEmits(["close"]);

const rules = {
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message cannot be empty"),
};

const {
  meta,
  values: formData,
  validate,
  errors,
  defineComponentBinds,
} = useForm({
  validationSchema: rules,
  initialValues: {
    email: profile.value?.email || "",
    subject: "",
    message: "",
  },
  validateOnInput: true,
});

const email = defineComponentBinds("email");
const subject = defineComponentBinds("subject");
const message = defineComponentBinds("message");

const submitForm = async () => {
  const { valid } = await validate();
  if (valid) {
    console.log("Support message sent with data:", formData);
    emit("close");
  } else {
    console.log("Form has validation errors.");
    console.log("Validation errors:", errors.value);
  }
};
</script>

<style lang="scss" scoped>
.support {
  text-align: center;
  margin-bottom: 53px;

  &__title {
    font-size: rem(24px);
    font-weight: 500;
    margin-bottom: 18px;
  }
}
.support-options {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.875rem;
  color: var(--txt-secondary-color);

  p {
    margin-bottom: 0.5rem;
  }
}

.account-manager-link {
  color: var(--txt-accent-color);
  text-decoration: none;
  border-bottom: 1px solid var(--txt-accent-color);
  transition: color 0.3s ease, border-bottom-color 0.3s ease;

  &:hover {
    color: var(--txt-primary-color);
    border-bottom-color: var(--txt-primary-color);
  }
}

.input-group {
  margin-bottom: 1.5rem;
}

.form {
  .app-btn {
    margin: 0 auto;
  }
}
</style>
