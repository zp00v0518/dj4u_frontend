<template>
  <footer class="footer-base">
    <span>All rights reserved</span>
    <atomic-copyright />
    <span>Made by BarvaStudio</span>
  </footer>
</template>

<style lang="scss" scoped>
.footer-base {
  margin: 0 calc(0px - var(--padding-side-main));
  border-top: 1px solid var(--border-color);
  color: var(--txt-secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding-side-main);
  padding-top: 13px;
}
</style>
