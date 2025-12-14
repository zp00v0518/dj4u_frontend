<template>
  <div class="try">
    <div class="label">Try for free now</div>
    <MoleculesUpload />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.try {
  padding: 66px 0 50px 0;
  display: flex;
  justify-content: space-between;
  gap: 66px;

  @media (orientation: portrait) and (max-width: 768px) {
    flex-direction: column;
    gap: 46px;

    .label {
      text-align: center;
    }
  }
}

.label {
  font-family: "Martian Mono", monospace;
  font-size: rem(30px);
  font-weight: 700;
  text-transform: uppercase;
}

.upload-section {
  flex-grow: 2;
}
</style>
