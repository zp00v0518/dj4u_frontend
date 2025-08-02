<template>
  <main class="main">
    <organism-header />
    <molecules-main-screen />
    <molecules-how-it-works id="about" />
    <molecules-description />
    <molecules-pricing id="pricing" />
    <molecules-try-free id="try-free" />
    <molecules-contacts id="contacts" />
    <organism-footer />
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main {
  padding: 20px var(--padding-side-main);
}
</style>
