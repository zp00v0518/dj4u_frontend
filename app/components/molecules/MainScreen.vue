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
      <div>Turn Any Playlist</div>
      <div>Into</div>
      <span>a Seamless DJ Mix </span>
      <span
        >Upload your tracks. Get back one continuous, professionally mixed audio
        file — ready to play in your bar, event, or business.
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const imgSizes = {
  width: 543,
  height: 362,
};
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

  .image {
    width: 47%;
    aspect-ratio: 543/362;
    object-fit: contain;
    height: fit-content;

    &:last-of-type {
      width: 43%;
      aspect-ratio: 494.463/369.391;
      margin-right: var(--padding-content);
      margin-top: auto;
    }
  }

  .txt-content {
    display: flex;
    flex-direction: column;
    position: absolute;
  }
}
</style>
