<template>
  <NuxtPage />
  <ModalsContainer />
</template>

<script setup lang="ts">
import useProfileStore from "./store/useProfileStore";
import { ModalsContainer } from "vue-final-modal";
const profileStore = useProfileStore();

onMounted(() => {
  console.log(profileStore);
});
</script>

<style lang="scss" scoped></style>
