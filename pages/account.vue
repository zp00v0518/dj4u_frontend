<template>
  <div class="account" v-if="profile">
    <div class="account__main">
      <h1 class="account__greeting">Welcome, &nbsp; {{ profile.fullName }}!</h1>
      <h4 class="account__subtitle">Choose your plan to start mixing</h4>
      <Plans />
    </div>
    <div class="account__mix">
      <div class="account__mix__top">
        <div class="account__mix__label">create a mix</div>
        <MoleculesUpload />
      </div>
      <div class="account__mix__bottom">
        <div class="account__mix__menu">
          <NuxtLink
            v-for="menuItem in menu"
            :key="menuItem.path"
            :to="menuItem.path"
            >{{ menuItem.label }}</NuxtLink
          >
        </div>
        <div class="account__mix__description">
          From Tracks to Atmosphere — Instantly.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import Plans from "@/components/molecules/Plans.vue";
import useProfileStore from "@/store/useProfileStore";
import useLayuotStore from "@/store/useLayuotStore";

const { getMenu: menu } = storeToRefs(useLayuotStore());

const { profile } = storeToRefs(useProfileStore());

onMounted(() => {
  useProfileStore().checkLogin();
});
</script>

<style lang="scss" scoped>
.account {
  --account-padding-side: 45px;

  &__main {
    background-image: url("/img/main-banner.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100dvh;
    margin-top: calc(0px - var(--header-height));
    margin-left: calc(0px - var(--padding-side-main));
    margin-right: calc(0px - var(--padding-side-main));
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

  &__mix {
    margin-top: 96px;

    &__top {
      display: flex;
      justify-content: space-between;
      gap: max(150px, 10%);
    }

    .upload-section {
      flex-grow: 2;
    }

    &__label {
      font-family: "Martian Mono";
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
    }

    &__bottom {
      margin-top: 100px;
      display: flex;
      justify-content: space-between;
      align-items: end;
      margin-bottom: 36px;
    }

    &__description {
      font-family: "Martian Mono";
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
    }

    &__menu {
      display: flex;
      flex-direction: column;
      gap: 26px;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
      }
    }
  }

  @media (orientation: portrait) and (max-width: 768px) {
    --account-padding-side: 20px;
    margin-left: -10px;
    margin-right: -10px;

    &__main {
      height: auto;
    }
    &__greeting {
      font-size: 24px;
    }

    .account__mix {
      margin-top: 50px;
      &__top {
        flex-direction: column;
        gap: max(70px, 10%);
      }

      &__bottom {
        flex-direction: column;
        align-items: start;
      }

      &__description {
        margin-top: 30px;
        font-size: 24px;
      }
    }
  }
}
</style>
