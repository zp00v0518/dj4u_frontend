<template>
  <header class="header" :class="{ 'home-page': isHomePage }">
    <nav class="nav-links desktop">
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
    <div class="header--mob">
      <div class="gamburger" @click="openMenu"></div>
      <NuxtLink v-if="isHomePage" @click="goToAProfile">My account</NuxtLink>
      <div class="header--mob__menu" :class="{ show: isShowMenu }">
        <atomic-icon id="close" @click="closeMenu"></atomic-icon>
        <nav class="nav-links">
          <NuxtLink
            v-for="menuItem in menu"
            :key="menuItem.path"
            :to="menuItem.path"
            >{{ menuItem.label }}</NuxtLink
          >
          <NuxtLink v-if="isHomePage" class="nav-links__free" to="/#try-free"
            >Try for free</NuxtLink
          >
        </nav>
      </div>
    </div>
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

const isShowMenu = ref(false);

function openMenu() {
  isShowMenu.value = true;
}

function closeMenu() {
  isShowMenu.value = false;
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

  @media (orientation: portrait) and (max-width: 756px) {
    .nav-links.desktop {
      display: none;
    }
    .header--mob {
      display: flex;
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

.header--mob {
  display: none;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;

  .gamburger {
    width: 48px;
    height: 14px;
    border: 1px solid var(--txt-primary-color);
    border-left: none;
    border-right: none;
    cursor: pointer;
  }

  &__menu {
    position: fixed;
    width: 70%;
    max-width: 70dvw;
    height: 100dvh;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    transition-duration: 0.2s;

    &.show {
      transform: translateX(0%);
    }

    .nav-links {
      flex-direction: column;
      border-radius: unset;
      height: 100%;
      justify-content: unset;
      padding-top: 24px;

      a {
        margin-bottom: 24px;
      }
    }

    .icon.close {
      position: absolute;
      z-index: 1;
      top: 16px;
      right: 16px;
    }
  }
}
</style>
