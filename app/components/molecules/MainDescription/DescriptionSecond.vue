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

    <div class="content"></div>
  </div>
</template>

<script setup lang="ts"></script>

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
  }
}
</style>
