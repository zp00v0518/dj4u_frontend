<template>
  <header class="header">
    <nav class="nav-links">
      <NuxtLink to="/account">My account</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/pricing">Pricing</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>

    <div class="header-actions">
      <button class="btn-primary">Try for free</button>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  padding: 13px 27px;
  border-radius: var(--radius-main);
  background: var(--bg-secondary-color);
  backdrop-filter: blur(5px);
  width: fit-content;
  display: flex;
  justify-content: space-between;

  .nav-links {
    a {
      color: var(--txt-primary-color);
      text-decoration: none;
      &:visited {
        color: inherit;
      }
    }
  }
}
</style>
