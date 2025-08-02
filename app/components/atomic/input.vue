<template>
  <div class="app-input-wrapper">
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
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
  modelValue: {
    type: [String, Number],
    default: "",
  },
  rules: {
    type: [String, Object],
    default: "",
  },
});

const { errorMessage } = useField(toRef(props, "name"), toRef(props, "rules"));
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>

.app-input-wrapper {
  position: relative;
  width: 100%;
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
  bottom: -1.5rem;
  left: 0;
  font-size: 0.75rem;
  color: var(--txt-accent-color);
}
</style>
