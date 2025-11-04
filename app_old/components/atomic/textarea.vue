<template>
  <div class="app-textarea-wrapper">
    <textarea
      :id="name"
      :name="name"
      v-model="model"
      :placeholder="placeholder"
      class="app-textarea"
      :class="{ 'is-invalid': errorMessage }"
    />
    <div v-if="errorMessage" class="app-textarea-error">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRef } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  rules: {
    type: [String, Object],
    default: "",
  },
});

const model = defineModel<string | number>();
const { errorMessage } = useField(toRef(props, "name"), toRef(props, "rules"));
</script>

<style lang="scss" scoped>
.app-textarea-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
}

.app-textarea {
  width: 100%;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.75rem;
  color: var(--txt-primary-color);
  font-size: 16px;
  transition: border-color 0.3s ease;
  resize: vertical; 
  min-height: 100px; 

  &:focus {
    outline: none;
    border-color: var(--txt-accent-color);
  }

  &::placeholder {
    color: var(--txt-secondary-color);
    font-size: inherit;
  }

  &.is-invalid {
    border-color: red;
  }
}

.app-textarea-error {
  position: absolute;
  bottom: -1.2rem;
  left: 0;
  font-size: 12px;
  color: var(--txt-accent-color);
}
</style>