<template>
  <header class="header">
    <nav class="nav-links">
      <NuxtLink to="/account">My account</NuxtLink>

      <div class="nav-links__menu">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/pricing">Pricing</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
      <span class="nav-links__free">Try for free</span>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  padding: 13px 27px;
  border-radius: var(--radius-main);
  background: var(--bg-secondary-color);
  backdrop-filter: blur(5px);
  max-width: 719px;
  margin: 0 auto;

  .nav-links {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;

    a {
      color: var(--txt-primary-color);
      text-decoration: none;
      font-weight: 400;
      &:visited {
        color: inherit;
      }
    }

    &__menu {
      display: flex;
      gap: 44px;
    }

    &__free {
      color: var(--txt-accent-color);
    }
  }
}
</style>
