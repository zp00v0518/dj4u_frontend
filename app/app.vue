<template>
  <NuxtPage />
  <ModalsContainer />
</template>

<script setup lang="ts">
import useProfileStore from "@/store/useProfileStore";
import { ModalsContainer } from "vue-final-modal";
const { checkLogin } = useProfileStore();

onMounted(() => {
  checkLogin();
});
</script>

<style lang="scss" scoped></style>
