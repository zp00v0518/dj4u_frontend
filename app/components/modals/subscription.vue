<template>
  <atomic-modal @closed="emit('close')">
    <header class="modal-header">
      <div>
        <h2 class="modal-title">Subscription Details</h2>
        <p class="modal-subtitle">Your Plan: Free</p>
      </div>
      <button class="close-button" @click="emit('close')">&times;</button>
    </header>

    <div class="modal-body">
      <div class="details">
        <p class="detail-item">
          <span class="detail-label">Usage:</span>
          4 of 10 mixes used this month
        </p>
        <p class="detail-item">
          <span class="detail-label">Next reset:</span>
          August 31, 2025
        </p>
      </div>

      <p class="limit-message">
        Limited to 10 mixes per month. Upgrade for unlimited access.
      </p>

      <div class="button-group">
        <atomic-button label="Upgrade to Pro" type="white" />
        <atomic-button label="Upgrade to Business" />
      </div>

      <div class="footer">
        <a href="#" class="cancel-link">Want to cancel subscription?</a>
        <span class="copyright">2025©</span>
      </div>
    </div>
  </atomic-modal>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
</script>

<style lang="scss" scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 2rem;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--txt-primary-color);
}

.modal-subtitle {
  font-size: 0.875rem;
  color: var(--txt-secondary-color);
  margin-top: 0.5rem;
}

.close-button {
  background: none;
  border: none;
  color: var(--txt-secondary-color);
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.modal-body {
  padding-top: 1.5rem;
}

.details {
  margin-bottom: 2rem;
  line-height: 1.5;
  text-align: center;
}

.detail-item {
  color: var(--txt-primary-color);
}

.detail-label {
  font-weight: 500;
  color: var(--txt-secondary-color);
  margin-right: 0.5rem;
}

.limit-message {
  text-align: center;
  color: var(--txt-secondary-color);
  margin-bottom: 2rem;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
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