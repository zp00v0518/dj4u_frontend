<template>
  <div class="account" v-if="profile">
    <h1 class="account__greeting">Welcome, &nbsp; {{ profile.fullName }}!</h1>
    <h4 class="account__subtitle">Choose your plan to start mixing</h4>

    <Plans />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import useProfileStore from "@/store/useProfileStore";
import { storeToRefs } from "pinia";

import Plans from "@/components/molecules/Plans.vue";

const { profile } = storeToRefs(useProfileStore());

onMounted(() => {
  useProfileStore().checkLogin();
});
</script>

<style lang="scss" scoped>
.account {
  background-image: url("/img/main-banner.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100dvh;
  margin-top: calc(0px - var(--header-height));
  margin-left: calc(0px - var(--padding-side-main));
  margin-right: calc(0px - var(--padding-side-main));
  padding-top: calc(30px + var(--header-height));
  padding-right: 45px;
  padding-left: 45px;

  &__greeting {
    font-family: "Martian Mono";
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 27px;
  }

  &__subtitle {
    font-weight: 400;
  }
}
</style>
