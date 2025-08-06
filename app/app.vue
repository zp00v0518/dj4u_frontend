<template>
  <NuxtPage />
  <ModalsContainer />
</template>

<script setup lang="ts">
import useProfileStore from "./store/useProfileStore";
import { ModalsContainer } from "vue-final-modal";
const { checkLogin } = useProfileStore();

onMounted(() => {
  console.log(checkLogin());
});
</script>

<style lang="scss" scoped></style>
