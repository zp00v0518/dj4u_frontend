<template>
  <!-- <atomic-button
    v-if="isDev"
    label="click"
    :style="{ position: 'fixed', cursor: 'pointer', zIndex: 99999 }"
    @click="madeDevAction"
  ></atomic-button> -->

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
const isDev = computed(() => {
  return import.meta.env.DEV;
});
onMounted(() => {
  checkLogin();
});

async function madeDevAction() {
  const { registration } = useProfileStore();
  const data = await registration({
    fullName: "adasd sdfsdf sdfsf",
    email: "d222fdfh47dq@gmail.com",
    password: "111111",
    passwordConfirm: "111111",
  });
}

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
@use "./node_modules/vue-final-modal/dist/style.css";
</style>

<style lang="scss" scoped>
.main {
  padding: 0px var(--padding-side-main);
  // overflow-x: hidden;
}
</style>
