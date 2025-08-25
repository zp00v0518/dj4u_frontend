<template>
  <atomic-modal @closed="closeModal('subscription')">
    <header class="subscription-header">
      <div>
        <div class="subscription-title">Subscription Details</div>
        <div class="subscription-subtitle">Your Plan: Free</div>
      </div>
    </header>

    <FreePlan />

    <div class="footer">
      <a href="#" class="cancel-link">Want to cancel subscription?</a>
      <atomic-copyright />
    </div>
  </atomic-modal>
</template>

<script setup lang="ts">
import FreePlan from "@/components/molecules/Subscription/FreePlan.vue";
import useModalStore from "@/store/useModalStore";
const { closeModal } = useModalStore();

const emit = defineEmits(["close"]);
</script>

<style lang="scss">
.subscription-header {
  margin-bottom: 70px;
  font-size: rem(24px);
  font-weight: 500;
  line-height: normal;
  text-align: center;
  position: relative;
}

.subscription-title {
  margin-bottom: 18px;
}

.subscription-subtitle {
  font-size: rem(20px);
  font-weight: 400;
  line-height: 132.562%; /* 26.512px */
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  font-size: 0.875rem;
  color: var(--txt-secondary-color);
}

.cancel-link {
  color: var(--txt-secondary-color);
  text-decoration: none;
  border-bottom: 1px solid var(--txt-secondary-color);
  transition: color 0.3s ease, border-bottom-color 0.3s ease;

  &:hover {
    color: var(--txt-primary-color);
    border-bottom-color: var(--txt-primary-color);
  }
}
</style>
