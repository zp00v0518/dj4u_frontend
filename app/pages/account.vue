<template>
  <div class="account" v-if="profile">
    <div class="account__main">
      <h1 class="account__greeting">Welcome, &nbsp; {{ profile.fullName }}!</h1>
      <h4 class="account__subtitle">Choose your plan to start mixing</h4>

      <Plans />
    </div>
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
  --account-padding-side: 45px;

  padding-right: var(--account-padding-side);
  padding-left: var(--account-padding-side);

  &__main {
    background-image: url("/img/main-banner.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100dvh;
    margin-top: calc(0px - var(--header-height));
    margin-left: calc(
      0px - var(--padding-side-main) - var(--account-padding-side)
    );
    margin-right: calc(
      0px - var(--padding-side-main) - var(--account-padding-side)
    );
    padding-top: calc(30px + var(--header-height));
    padding-right: var(--account-padding-side);
    padding-left: var(--account-padding-side);
    display: flex;
    flex-direction: column;
  }

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

  .plans {
    margin-top: auto;
    margin-bottom: rem(88px);
  }
}
</style>
