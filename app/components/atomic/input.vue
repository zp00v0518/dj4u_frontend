<template>
  <div class="app-input-wrapper">
    <input
      :id="name"
      :name="name"
      :type="type"
      v-model="model"
      :placeholder="placeholder"
      class="app-input"
    />
    <div v-if="errorMessage" class="app-input-error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const model = defineModel()

const { errorMessage } = useField(toRef(props, "name"), toRef(props, "rules"));
</script>

<style lang="scss" scoped>

.app-input-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 10px;
}

.app-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border-color);
  padding: 0.5rem 0;
  color: var(--txt-primary-color);
  font-size: rem(16px);
  transition: border-bottom-color 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: var(--txt-accent-color);
  }

  &::placeholder {
    color: var(--txt-secondary-color);
    font-size: inherit;
  }
}

.app-input-error {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: rem(12px);
  transform: translateY(100%);
  color: var(--txt-accent-color);
}
</style>
