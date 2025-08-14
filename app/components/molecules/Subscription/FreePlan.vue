<template>
  <div class="subscription-body">
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
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "@/assets/styles/molecules/Subscription/subscription.scss" as *;
</style>
