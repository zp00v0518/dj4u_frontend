<template>
  <div class="hiw">
    <h2 class="hiw__title">
      How it works <span class="hiw__subtitle txt-dance">(Steps)</span>
    </h2>

    <div class="steps">
      <div v-for="step in steps" :key="step.label" class="steps__item">
        <div>{{ step.label }}</div>
        <div>{{ step.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const steps = [
  {
    label: "1.Upload Your Tracks",
    description: "Drag and drop any number of audio files - MP3, WAV, or FLAC.",
  },
  {
    label: "2.We Mix Them Like a Real DJ",
    description:
      "Our engine analyzes tempo, key, and structure to create smooth transitions.",
  },
  {
    label: "3.Download a Seamless Mix",
    description:
      "You get one single, professionally blended file - ready for any venue.",
  },
  {
    label: "4.Enjoy the Music - Effortlessly",
    description:
      "Press play and let your perfectly mixed soundtrack set the mood.",
  },
];
</script>

<style lang="scss" scoped>
.hiw {
  margin-bottom: 124px;

  &__title {
    text-align: center;
    position: relative;
    font-family: "Martian Mono", monospace;
    font-size: rem(30px);
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 111px;
  }

  &__subtitle {
    position: absolute;
    left: 0;
    top: 12px;
    text-transform: capitalize;
  }

  .steps {
    width: 100%;
    height: 480px;
    display: flex;
    align-items: start;
    gap: 20px;
    background-image: url("/img/hiw-bg.png");
    background-repeat: no-repeat;
    background-size: 325px;
    background-position: center;
    &__item {
      padding: 28px 28px 42px 28px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: max(23%, 283px);
      aspect-ratio: 1;
      border-radius: 30px;
      background: var(--bg-secondary-color);

      &:nth-child(2) {
        align-self: flex-end;
      }
      &:nth-child(3) {
        align-self: center;
      }
    }
  }

  @media (orientation: portrait) and (max-width: 768px) {
    &__subtitle {
      left: unset;
      right: 40px;
    }

    .steps {
      flex-direction: column;
      height: unset;
      background-size: 176%;
      background-position: -25%;

      &__item {
        width: 100%;
        max-height: 245px;
      }
    }
  }
}
</style>
