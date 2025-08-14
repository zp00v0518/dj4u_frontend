<template>
  <atomic-modal @closed="closeModal('subscription')">
    <header class="subscription-header">
      <div>
        <h2 class="subscription-title">Subscription Details</h2>
        <p class="subscription-subtitle">Your Plan: Free</p>
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
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 2rem;
  font-size: rem(24px);
  font-weight: 500;
  line-height: normal;
  text-align: center;
  position: relative;
}

.subscription-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--txt-primary-color);
}

.subscription-subtitle {
  font-size: 0.875rem;
  color: var(--txt-secondary-color);
  margin-top: 0.5rem;
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
