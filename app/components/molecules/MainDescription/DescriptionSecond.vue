<template>
  <div class="descr-second">
    <NuxtImg
      src="img/description_2_bg.png"
      format="webp"
      alt="description_2_bg.png"
      width="1274"
      height="847"
      densities="x1 x2"
      :placeholder="[100, 50, 100, 1]"
    />

    <div class="content">
      <div class="header">
        <div class="header__title">
          Made for Any Music-Driven Space
          <span class="txt-dance">(Use cases)</span>
        </div>
        <atomic-copyright />
      </div>
      <div class="type-of-busines">
        <div v-for="type in typeBusines" :key="type" class="div">
          {{ type }}
        </div>
      </div>
      <div class="header__title">Choose your plan</div>

      <div class="plans">
        <div
          v-for="planItem in plans"
          :key="planItem.label"
          class="plans__item"
        >
          <div class="label">{{ planItem.label }}</div>
          <div class="description">{{ planItem.description }}</div>
          <atomic-button label="Choose" :type="planItem.btnType" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const typeBusines = [
  "Bars & Lounges",
  "Fitness Studios",
  "Private Parties",
  "Casinos & Hotels",
  "Retail Stores",
  "Wellness Centers",
];

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
.descr-second {
  margin-left: calc(0px - var(--padding-side-main));
  position: relative;

  .content {
    padding: 41px 38px 38px 46px;
    position: absolute;
    width: calc(100% + var(--padding-side-main));
    height: 100%;
    top: 0;
    left: 0;

    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: max(20px, 6.2%);

      &__title {
        font-family: "Martian Mono";
        font-size: rem(30px);
        font-weight: 700;
        text-transform: uppercase;
        position: relative;

        .txt-dance {
          position: absolute;
          right: -78px;
          bottom: 0;
          transform: translateY(66%);
          text-transform: none;
        }
      }
    }

    .type-of-busines {
      color: var(--txt-secondary-color);
      margin-bottom: max(40px, 12.7%);
    }

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
    }
  }
}
</style>
