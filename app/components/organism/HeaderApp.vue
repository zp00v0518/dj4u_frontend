<template>
   <header class="header-base surface">
    <div class="logo">
      <div class="logo-placeholder"></div>
      <span class="logo-text">YOUR LOGO</span>
    </div>

    <nav class="nav-links">
      <NuxtLink to="/account">My account</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/pricing">Pricing</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>

    <div class="header-actions">
      <button class="btn-primary">
        Try for free
      </button>
      </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>