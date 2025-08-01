<template>
  <button
    :disabled="props.isDisabled || null"
    type="button"
    class="app-btn"
    :class="[props.type, { 'full-width': props.isFullWidth }]"
  >
    <slot v-if="$slots.default" />
    <span v-else>{{ props.label }}</span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: "" | "grey" | "white";
    isDisabled?: boolean;
    isFullWidth?: boolean;
    label?: string;
  }>(),
  {
    type: "",
    isDisabled: false,
    isFullWidth: false,
    label: "",
  },
);
</script>

<style lang="scss">
.app-btn {
  width: var(--btn-width, fit-content);
  padding: 13px 30px;
  border-radius: 30px;
  background: transparent;
  outline: none;
  border-radius: 40px;
  border: 1px solid var(--border-color);
  color: var(--txt-primary-color);
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:disabled {
    color: var(--txt-secondary-color);
    cursor: not-allowed;
  }

  &.full-width {
    width: 100%;
  }

  &.grey {
    background: var(--bg-secondary-color);
    border: none;
  }

  &:hover {
    background: var(--bg-active-color);
    color: var(--bg-color);
  }
}
</style>
