<template>
  <VueFinalModal
    :click-to-close="false"
    class="modal-auth"
    content-class="modal-auth-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @close="closeModal('support')"
  >
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
        <a href="#" class="account-manager-link"
          >Contact your account manager</a
        >
      </div>
    </form>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import { useForm } from "vee-validate";
import * as yup from "yup";

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
    email: "",
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
</style>
