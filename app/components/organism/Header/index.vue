<template>
  <header class="header" :class="{ 'home-page': isHomePage }">
    <nav class="nav-links">
      <NuxtLink v-if="isHomePage" @click="goToAProfile">My account</NuxtLink>

      <div class="nav-links__menu">
        <NuxtLink
          v-for="menuItem in menu"
          :key="menuItem.path"
          :to="menuItem.path"
          >{{ menuItem.label }}</NuxtLink
        >
      </div>
      <NuxtLink v-if="isHomePage" class="nav-links__free" to="/#try-free"
        >Try for free</NuxtLink
      >
    </nav>
  </header>
</template>

<script setup lang="ts">
import useModalStore from "@/store/useModalStore";
import useLayuotStore from "@/store/useLayuotStore";
import useProfileStore from "@/store/useProfileStore";
import { storeToRefs } from "pinia";
const { isLogin } = storeToRefs(useProfileStore());
const { getMenu: menu } = storeToRefs(useLayuotStore());

const router = useRouter();
const route = useRoute();

const isHomePage = computed(() => {
  return route.path === "/";
});

const { openModal } = useModalStore();

async function goToAProfile() {
  isLogin.value ? await router.push("/account") : await openModal("AuthForm");
}
</script>

<style lang="scss" scoped>
.header {
  --shift-top: 30px;
  height: var(--header-height);
  position: sticky;
  top: calc(0px - var(--shift-top));
  z-index: 9;
  padding-top: var(--shift-top);

  &:not(&.home-page) {
    .nav-links__menu {
      width: 100%;
    }
  }
}

.nav-links {
  padding: 13px 27px;
  border-radius: var(--radius-main);
  background: var(--bg-secondary-color);
  backdrop-filter: blur(5px);
  max-width: 719px;
  margin: 0 auto;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  a {
    color: var(--txt-primary-color);
    text-decoration: none;
    font-weight: 400;
    cursor: pointer;

    &:visited {
      color: inherit;
    }
  }

  &__menu {
    display: flex;
    gap: 44px;
    justify-content: space-between;
  }

  a.nav-links__free {
    color: var(--txt-accent-color);
  }
}
</style>
