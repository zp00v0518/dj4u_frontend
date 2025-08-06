<template>
  <header class="header">
    <nav class="nav-links">
      <NuxtLink @click="goToAProfile">My account</NuxtLink>

      <div class="nav-links__menu">
        <NuxtLink to="/#about">About</NuxtLink>
        <NuxtLink to="/#pricing">Pricing</NuxtLink>
        <NuxtLink to="/#contacts">Contact</NuxtLink>
      </div>
      <NuxtLink class="nav-links__free" to="/#try-free">Try for free</NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import useModalStore from "@/store/useModalStore";
import useProfileStore from "@/store/useProfileStore";
import { storeToRefs } from "pinia";
const { isLogin } = storeToRefs(useProfileStore());

const router = useRouter();

const { openModal } = useModalStore();

async function goToAProfile() {
  console.log(isLogin);
  isLogin.value ? await router.push("/account") : await openModal("AuthForm");
}
</script>

<style lang="scss" scoped>
.header {
  padding: 13px 27px;
  border-radius: var(--radius-main);
  background: var(--bg-secondary-color);
  backdrop-filter: blur(5px);
  max-width: 719px;
  margin: 0 auto;
  margin-bottom: 50px;
  border-radius: 40px;
}

.nav-links {
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
  }

  a.nav-links__free {
    color: var(--txt-accent-color);
  }
}
</style>
