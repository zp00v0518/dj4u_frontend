<template>
  <div class="main-screen">
    <NuxtImg
      src="img/main-banner.png"
      format="webp"
      class="image"
      alt="main-banner"
      width="543"
      height="362"
      densities="x1 x2"
      :placeholder="[50, 25, 100, 1]"
    />
    <NuxtImg
      src="img/second-banner.png"
      alt="second-banner"
      class="image"
      format="webp"
      width="494"
      height="369"
      densities="x1 x2"
      :placeholder="[50, 25, 100, 1]"
    />
    <div class="txt-content">
      <div class="txt-content--large">Turn Any Playlist</div>
      <div class="txt-content--large">Into</div>
      <div class="txt-content__bottom">
        <span class="description"
          >Upload your tracks. Get back one continuous, professionally mixed
          audio file — ready to play in your bar, event, or business.
        </span>
        <span class="txt-content--large">a Seamless DJ Mix </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.main-screen {
  --padding-content: 43px;

  width: 100%;
  height: 582px;
  display: flex;
  justify-content: space-between;
  gap: 105px;
  position: relative;
  margin-bottom: 165px;

  .image {
    width: 45.21%;
    aspect-ratio: 543/362;
    object-fit: contain;
    height: fit-content;

    &:last-of-type {
      width: 41.2%;
      aspect-ratio: 494.463/369.391;
      margin-right: var(--padding-content);
      margin-top: auto;
    }
  }

  .txt-content {
    display: flex;
    flex-direction: column;
    position: absolute;
    text-align: right;
    width: 100%;
    height: 100%;

    &--large {
      font-size: rem(60px);
      font-family: "Martian Mono";
      text-transform: uppercase;
      font-weight: 700;

      &:first-child {
        margin-right: var(--padding-content);
        margin-bottom: 81px;
        margin-top: 77px;
      }
    }

    &__bottom {
      margin-top: auto;
      display: flex;
      align-items: end;
      gap: 38px;
    }
    .description {
      width: fit-content;
      max-width: 288px;
      display: block;
      text-align: start;
    }
  }
}
</style>
