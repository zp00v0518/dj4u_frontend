<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import { useProfileStore } from "./store/useProfileStore";
const profileStore = useProfileStore();

onMounted(() => {
  console.log(profileStore);
});
</script>

<style lang="scss" scoped>
.login {
    color: red;
}

</style>