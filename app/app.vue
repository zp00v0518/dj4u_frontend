<template>
  <organism-header />
  <main class="main">
    <NuxtPage />
  </main>
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

<style lang="scss" scoped>
.main {
  padding: 0px var(--padding-side-main);
}
</style>
