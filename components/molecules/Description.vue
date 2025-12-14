<template>
  <div class="descr-first">
    <div class="header">
      <div class="header__title">Perfect Music Flow</div>
      <div class="header__title">
        Without a DJ
        <span class="header__subtitle txt-dance">(Why use us)</span>
      </div>
    </div>

    <div class="content">
      <div v-for="why in whyList" :key="why.label" class="content__item">
        <div class="content__item__label">{{ why.label }}</div>
        <div class="content__item__description">{{ why.description }}</div>
      </div>

      <atomic-button label="Choose your plan" type="grey" />
    </div>
  </div>
</template>

<script setup lang="ts">
const whyList = [
  {
    label: "Zero DJ Skills Required",
    description:
      "Just upload your tracks - we handle the beatmatching and transitions.",
  },
  {
    label: "Save Time & Money",
    description: "No need to hire a DJ or spend hours editing playlists.",
  },
  {
    label: "Made for Businesses",
    description:
      "Ideal for bars, restaurants, casinos, gyms, events, and more.",
  },
  {
    label: "Fully Customizable",
    description:
      "Choose your mixing style, tempo feel, and transition effects.",
  },
];
</script>

<style lang="scss" scoped>
.descr-first {
  background-image: url("/img/description_1_bg.png");
  background-repeat: no-repeat;
  background-size: 41%;
  background-position: center 31px;
  height: fit-content;
  margin-bottom: 75px;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 358px;

    &__title {
      font-family: "Martian Mono", monospace;
      font-size: rem(53.118px);
      font-weight: 700;
      text-transform: uppercase;
      position: relative;
    }

    &__subtitle {
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translateY(100%);
    }
  }

  .content {
    --gap: 40px;

    margin: 0 auto;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap);

    &__item {
      text-align: center;
      max-width: 326px;

      &__label {
        font-size: rem(24px);
        font-weight: 500;
        margin-bottom: 13px;
      }

      &__description {
        color: var(--txt-secondary-color);
      }
    }

    .app-btn {
      margin-top: calc(75px - var(--gap));
      --btn-width: min(260px, 80%);
    }
  }

  @media (orientation: portrait) and (max-width: 768px) {
    margin: 0 calc(0px - var(--padding-side-main));
    background-size: 100%;
    background-position: center 50px;
    padding-bottom: 100px;

    .header {
      display: block;
      text-align: center;
      margin-bottom: 300px;

      &__title {
        font-size: 28px;
        display: inline;
      }

      &__subtitle {
        left: unset;
        transform: translateY(100%) translateX(-55%);
        font-size: 16px;
        padding-right: 10px;
        white-space: nowrap;
      }
    }

    .content {
      .app-btn {
        font-size: 20px;
      }
    }
  }
}
</style>
