<template>
  <div class="descr-second">
    <NuxtImg
      class="descr-second__img"
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

      <Plans />
    </div>
  </div>
</template>

<script setup lang="ts">
import Plans from "@/components/molecules/Plans.vue";

const typeBusines = [
  "Bars & Lounges",
  "Fitness Studios",
  "Private Parties",
  "Casinos & Hotels",
  "Retail Stores",
  "Wellness Centers",
];
</script>

<style lang="scss" scoped>
.descr-second {
  margin-left: calc(0px - var(--padding-side-main));
  position: relative;

  &__img {
    max-width: calc(100% + calc(var(--padding-side-main)));
    position: absolute;
    z-index: -1;
  }

  .content {
    padding: 41px var(--padding-side-main) var(--padding-side-main) 46px;
    // position: absolute;
    width: calc(100% + var(--padding-side-main));
    height: 100%;
    top: 0;
    left: 0;

    .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: max(20px, 6.2%);

      &__title {
        font-family: "Martian Mono", monospace;
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
  }

  @media (orientation: portrait) and (max-width: 768px) {
    margin-right: calc(0px - var(--padding-side-main));
    background-image: url("/img/description_2_bg.png");
    background-repeat: no-repeat;
    background-size: 1247px auto;
    background-position: 75% top;
    background-color: black;
    padding-bottom: 80px;

    &__img {
      display: none;
      max-width: unset;
      left: 0;
      top: 0;
      transform: translateX(-50%);
    }

    .content {
      padding: 10px;
      width: auto;

      .header {
        margin-bottom: 100px;
        &__title {
          text-align: center;
          .txt-dance {
            right: 0;
          }
        }
        .copyright {
          display: none;
        }
      }

      .type-of-busines {
        text-align: end;
        margin-bottom: 165px;
      }

      .plans {
        flex-direction: column;
        padding: 0 10px;
        &:deep() {
          .plans__item {
            padding: 24px 40px 27px 40px;
          }
        }
      }
    }
  }
}
</style>
