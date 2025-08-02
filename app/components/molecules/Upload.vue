<template>
  <section class="upload-section">
    <div class="upload-card">
      <div v-if="currentState === 'initial'">
        <h3 class="card-title">Upload Your Tracks</h3>
        <div class="drag-and-drop-area">
          <p class="drag-and-drop-text">
            Drag & drop your audio files here<br />or click to select from your
            computer.
          </p>
        </div>
      </div>

      <div v-if="currentState === 'uploaded'">
        <h3 class="card-title">Upload Your Tracks</h3>
        <p class="file-count">{{ uploadedFiles.length }} files selected</p>
        <ul class="file-list">
          <li v-for="file in uploadedFiles" :key="file.name" class="file-item">
            <span class="file-name">{{ file.name }}</span>
            <button class="delete-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <div v-if="currentState === 'mixing'">
        <h3 class="card-title">Mixing in progress...</h3>
        <div class="mixing-status">
          <p class="mixing-text">Analyzing tracks and creating your mix...</p>
        </div>
      </div>

      <div v-if="currentState === 'ready'">
        <h3 class="card-title">Your mix is ready!</h3>
        <div class="ready-status">
          <p class="ready-text">Enjoy your seamless music flow!</p>
        </div>
      </div>

      <div class="card-actions">
        <atomic-button
          label="Create my Mix"
          :is-disabled="currentState !== 'uploaded'"
          is-full-width
          :type="currentState === 'uploaded' ? 'white' : ''"
        />
        <atomic-button
          label="Download Mix"
          :is-disabled="currentState !== 'ready'"
          is-full-width
          :type="currentState === 'uploaded' ? 'white' : ''"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const currentState = ref("initial");
const uploadedFiles = ref([
  { name: "Midnight_Rhythm.mp3" },
  { name: "Chillwave_Sunset.wav" },
  { name: "DeepGroove_Bassline.mp3" },
]);
</script>

<style lang="scss" scoped>
.upload-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 44px 24px 38px;
  border-radius: 41.668px;
  border: 1.042px solid var(--border-color);
  backdrop-filter: blur(5px);
}

.upload-card {
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-family: "Martian Mono", monospace;
  font-size:rem(24px);
  text-align: center;
  margin: 0;
}

.drag-and-drop-area,
.mixing-status,
.ready-status {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
}

.drag-and-drop-text {
  color: var(--txt-secondary-color);
  line-height: 132.562%;
  margin: 0;
  padding: 59px 0 65px 0;
}

.file-count {
  color: var(--txt-secondary-color);
  margin-bottom: 1rem;
}

.file-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
}

.file-name {
  color: var(--txt-primary-color);
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 16px;
    height: 16px;
  }
}

.card-actions {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}
</style>
