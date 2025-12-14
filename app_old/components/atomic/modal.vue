<template>
  <VueFinalModal
    class="modal"
    content-class="modal__content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @closed="close"
  >
    <div class="modal__body">
      <button class="modal__close-button" @click="close">&times;</button>
      <slot />
    </div>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from "vue-final-modal";
import useModalStore from "@/store/useModalStore";
const { closeModal } = useModalStore();
const emit = defineEmits(["closed"]);
const props = defineProps({
  modalName: {
    type: String,
    required: "",
  },
});

function close() {
  closeModal(props.modalName);
  emit("closed");
}
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
  padding: 30px max(10%, 50px);
  border-radius: 30px;
  position: relative;
}

.modal__close-button {
  position: absolute;
  top: 0;
  right: 0;
  position: absolute;
  background: none;
  border: none;
  color: var(--txt-secondary-color);
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transform: translate(-100%, 50%);
}
</style>
