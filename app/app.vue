<template>
  <organism-header />
  <main class="main">
    <NuxtPage />
  </main>
  <organism-footer />
  <ModalsContainer />
</template>

<script setup lang="ts">
import useProfileStore from "@/store/useProfileStore";
import { ModalsContainer } from "vue-final-modal";
import useModalStore from "@/store/useModalStore";
const { openModal } = useModalStore();
const { checkLogin } = useProfileStore();

onMounted(() => {
  checkLogin();
});

const route = useRoute();

watch(
  () => route.query,
  () => {
    if (route.query?.openModal) {
      openModal(route.query?.openModal, route.query);
    } else {
    }
  },
  { deep: true },
);
</script>
<style lang="scss">
@use "../node_modules/vue-final-modal/dist/style.css";
</style>

<style lang="scss" scoped>
.main {
  padding: 0px var(--padding-side-main);
}
</style>
