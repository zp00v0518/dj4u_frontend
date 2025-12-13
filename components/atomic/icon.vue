<template>
  <component :is="components[props.id]" class="icon" :class="[props.id]"> </component>
</template>

<script lang="ts" setup>
import CloseIcon from "./icons/close.vue";

const props = defineProps({
  id: "",
});

const components = {
  close: CloseIcon,
};
</script>
