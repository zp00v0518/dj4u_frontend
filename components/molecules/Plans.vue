<template>
  <div class="plans">
    <div v-for="planItem in plans" :key="planItem.label" class="plans__item">
      <div class="label">{{ planItem.label }}</div>
      <div class="description">{{ planItem.description }}</div>
      <atomic-button label="Choose" :type="planItem.btnType" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const plans = [
  {
    label: "Free Plan",
    description: "Up to 10 mixes per month Standard audio processing",
    btnType: "",
  },
  {
    label: "Pro Plan",
    description: "Unlimited mixes Priority processing Audio effects",
    btnType: "white",
  },
  {
    label: "Business Plan",
    description: "API access Multi-user accounts Dedicated support",
    btnType: "",
  },
];
</script>

<style lang="scss" scoped>
.plans {
  --btn-width: max(45%, 173px);
  margin-top: 42px;
  display: flex;
  gap: 20px;

  &__item {
    padding: 24px 70px 27px 70px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 273px;
    border-radius: 41.668px;
    border: 1.042px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);

    .label {
      font-size: rem(24px);
      font-weight: 500;
    }

    .description {
      margin: 0 auto;
      flex-grow: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  @media (orientation: portrait) and (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px;
    &:deep() {
      .plans__item {
        padding: 24px 40px 27px 40px;
      }
    }
  }
}
</style>
