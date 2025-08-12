<template>
  <VueFinalModal
    class="modal"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="modal__content">
      <slot />
    </div>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from "vue-final-modal";
</script>

<style lang="scss"></style>
