<template>
  <div class="hiw">
    <h2 class="hiw__title">
      How it works <span class="hiw__subtitle">(Steps)</span>
    </h2>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hiw {
  &__title {
    text-align: center;
    position: relative;
    font-family: "Martian Mono";
    font-size: rem(30px);
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 111px;
  }
  
  &__subtitle {
    position: absolute;
    color: var(--txt-accent-color);
    font-size: rem(20px);
    font-family: "Rock Salt";
    left: 0;
    top: 12px;
    text-transform: capitalize;
    font-weight: normal;
  }
}
</style>
