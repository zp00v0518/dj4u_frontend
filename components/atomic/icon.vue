<template>
  <component :is="components[props.id]" class="icon" :class="[props.id]">
  </component>
</template>

<script lang="ts" setup>
import CloseIcon from "./icons/close.vue";
import trash from "./icons/trash.vue";

const props = defineProps({
  id: "",
});

const components = {
  close: CloseIcon,
  trash: trash,
};
</script>
