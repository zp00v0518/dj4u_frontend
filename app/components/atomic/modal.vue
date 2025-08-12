<template>
  <VueFinalModal
    class="modal"
    content-class="modal__content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="modal__body">
      <slot />
    </div>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from "vue-final-modal";
</script>

<style lang="scss">
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
}

.modal__content {
  width: max(65%, 500px);
  background-color: var(--bg-color);
  padding: 30px max(14%, 50px);
  border-radius: 30px;
}
</style>
