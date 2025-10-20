<template>
  <section class="upload-section">
    <div class="upload-card">
      <div v-if="currentState === 'initial'" class="upload-card__body">
        <h3 class="card-title">Upload Your Tracks</h3>

        <el-upload
          v-model:file-list="fileList"
          accept="audio/mpeg"
          class="drag-and-drop-area"
          multiple
          drag
          :auto-upload="false"
          :limit="5"
          :on-change="handleChangeUpload"
          :on-exceed="handleExceed"
        >
          <div class="el-upload__text">
            <p class="drag-and-drop-text">
              Drag & drop your audio files here<br />or click to select from
              your computer.
            </p>
          </div>
        </el-upload>
      </div>

      <div v-if="currentState === 'uploaded'" class="upload-card__body">
        <h3 class="card-title">Upload Your Tracks</h3>
        <p class="file-count">{{ uploadedFiles.length }} files selected</p>
        <ul class="file-list">
          <li v-for="file in uploadedFiles" :key="file.name" class="file-item">
            <span class="file-name">{{ file.name }}</span>
            <button class="delete-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19.6458 8.54565H3.92969C3.7343 8.54565 3.54692 8.46804 3.40877 8.32988C3.27061 8.19173 3.19299 8.00434 3.19299 7.80896C3.19299 7.61358 3.27061 7.4262 3.40877 7.28804C3.54692 7.14988 3.7343 7.07227 3.92969 7.07227H19.6458C19.8412 7.07227 20.0286 7.14988 20.1668 7.28804C20.3049 7.4262 20.3825 7.61358 20.3825 7.80896C20.3825 8.00434 20.3049 8.19173 20.1668 8.32988C20.0286 8.46804 19.8412 8.54565 19.6458 8.54565Z"
                  fill="white"
                />
                <path
                  d="M16.1485 20.3819H7.42608C7.1148 20.4032 6.80238 20.3625 6.50695 20.2621C6.21152 20.1618 5.93895 20.0038 5.70504 19.7973C5.47114 19.5908 5.28055 19.3399 5.14433 19.0592C5.00811 18.7785 4.92897 18.4735 4.9115 18.162V7.8581C4.9115 7.66272 4.98911 7.47534 5.12727 7.33718C5.26543 7.19902 5.45281 7.12141 5.64819 7.12141C5.84358 7.12141 6.03096 7.19902 6.16912 7.33718C6.30727 7.47534 6.38489 7.66272 6.38489 7.8581V18.162C6.38489 18.5647 6.84655 18.9085 7.36715 18.9085H16.0896C16.6397 18.9085 17.0719 18.5647 17.0719 18.162V7.8581C17.0719 7.64709 17.1557 7.44472 17.3049 7.29551C17.4541 7.1463 17.6565 7.06247 17.8675 7.06247C18.0785 7.06247 18.2809 7.1463 18.4301 7.29551C18.5793 7.44472 18.6631 7.64709 18.6631 7.8581V18.162C18.6457 18.4735 18.5665 18.7785 18.4303 19.0592C18.2941 19.3399 18.1035 19.5908 17.8696 19.7973C17.6357 20.0038 17.3631 20.1618 17.0677 20.2621C16.7722 20.3625 16.4598 20.4032 16.1485 20.3819ZM16.2664 7.61254C16.1693 7.61386 16.0729 7.59571 15.9829 7.55915C15.893 7.5226 15.8112 7.46838 15.7425 7.39971C15.6739 7.33104 15.6197 7.2493 15.5831 7.15932C15.5466 7.06934 15.5284 6.97295 15.5297 6.87584V5.41228C15.5297 5.00955 15.0582 4.66576 14.5475 4.66576H9.05663C8.51639 4.66576 8.07437 5.00955 8.07437 5.41228V6.87584C8.07437 7.07123 7.99676 7.25861 7.8586 7.39676C7.72044 7.53492 7.53306 7.61254 7.33768 7.61254C7.1423 7.61254 6.95491 7.53492 6.81676 7.39676C6.6786 7.25861 6.60098 7.07123 6.60098 6.87584V5.41228C6.63902 4.79474 6.91731 4.21664 7.37627 3.80173C7.83524 3.38683 8.4384 3.1681 9.05663 3.19237H14.518C15.1412 3.16014 15.7519 3.37529 16.2173 3.79101C16.6827 4.20673 16.9651 4.78941 17.0031 5.41228V6.87584C17.0044 6.97341 16.9863 7.07026 16.9499 7.16078C16.9134 7.2513 16.8594 7.33367 16.7908 7.40313C16.7223 7.47258 16.6406 7.52772 16.5506 7.56536C16.4606 7.60299 16.364 7.62237 16.2664 7.62236V7.61254Z"
                  fill="white"
                />
                <path
                  d="M10.0386 16.6984C9.84398 16.6959 9.65807 16.6174 9.52047 16.4798C9.38286 16.3422 9.30442 16.1563 9.30188 15.9617V11.5121C9.30188 11.3167 9.3795 11.1293 9.51765 10.9912C9.65581 10.853 9.84319 10.7754 10.0386 10.7754C10.234 10.7754 10.4213 10.853 10.5595 10.9912C10.6977 11.1293 10.7753 11.3167 10.7753 11.5121V15.9519C10.7766 16.0495 10.7585 16.1463 10.722 16.2368C10.6856 16.3274 10.6315 16.4097 10.563 16.4792C10.4945 16.5486 10.4128 16.6038 10.3228 16.6414C10.2328 16.679 10.1362 16.6984 10.0386 16.6984ZM13.5354 16.6984C13.34 16.6984 13.1527 16.6208 13.0145 16.4826C12.8763 16.3445 12.7987 16.1571 12.7987 15.9617V11.5121C12.7987 11.3167 12.8763 11.1293 13.0145 10.9912C13.1527 10.853 13.34 10.7754 13.5354 10.7754C13.7308 10.7754 13.9182 10.853 14.0563 10.9912C14.1945 11.1293 14.2721 11.3167 14.2721 11.5121V15.9519C14.2721 16.1482 14.1948 16.3366 14.0569 16.4763C13.9191 16.616 13.7317 16.6958 13.5354 16.6984Z"
                  fill="white"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>

      <div v-if="currentState === 'mixing'" class="upload-card__body">
        <h3 class="card-title">Mixing in progress...</h3>
        <div class="mixing-status">
          <p class="mixing-text">Analyzing tracks and creating your mix...</p>
        </div>
      </div>

      <div v-if="currentState === 'ready'" class="upload-card__body">
        <h3 class="card-title">Your mix is ready!</h3>
        <div class="ready-status">
          <p class="ready-text">Enjoy your seamless music flow!</p>
        </div>
      </div>

      <div class="card-actions">
        <atomic-button
          label="Create my Mix"
          :is-disabled="currentState !== 'uploaded' && fileList.length === 0"
          :type="currentState === 'uploaded' ? 'white' : ''"
          @click="createMix"
        />
        <atomic-button
          label="Download Mix"
          :is-disabled="currentState !== 'ready'"
          :type="currentState === 'ready' ? 'white' : ''"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ElUpload, ElMessage } from "element-plus";
import File from "../../api/File";

const currentState = ref("initial");
const fileList = ref([]);

function handleChangeUpload(a, b, c) {
  console.log(a, b, c);
}

function handleExceed(files, uploadFiles) {
  ElMessage({
    duration: 4000,
    type: "error",
    message: `The limit is 5, you selected ${
      files.length
    } files this time, add up to ${files.length + uploadFiles.length} totally`,
  });
}

async function createMix() {
  // TODO: треба перевірка на логін
  const formData = new FormData();
  fileList.value.forEach((i) => formData.append("files", i.raw));
  ElMessage({
    duration: 1000 * 10,
    type: "warning",
    plain: true,
    showClose: true,
    dangerouslyUseHTMLString: true,
    customClass: "upload__notify__wait",
    message: `
    Please wait. Do not close the browser window.</br>
Files uploaded. The mix is ​​being created </br>
This may take <strong>1-4 minutes</strong>.
`,
  });
  const response = await File.fileUploadToServer(formData);
  if (!response?.data?.status) {
    console.log("шось пішло не так");
    return;
  }
  const { data } = response;
  const downloadUrl = `/api/file/download/${data.fileName}`;
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.setAttribute("download", data.fileName);
  document.body.appendChild(link);
  link.click();
  console.log(link);
  document.body.removeChild(link);
}
</script>

<style lang="scss">
.upload__notify__wait {
  &.el-message--warning {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    border: none;
    .el-message__content {
      line-height: 125%;
      font-size: 0.8rem;
    }
  }
}
</style>
<style lang="scss" scoped>
.upload-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 44px 24px 38px;
  border-radius: 41.668px;
  border: 1.042px solid var(--border-color);
  backdrop-filter: blur(5px);
  min-height: 325px;
}

.upload-card {
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  &__body {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
  }
}

.card-title {
  font-size: rem(24px);
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
}
.drag-and-drop-area {
  &:deep() {
    .el-upload {
      width: 100%;

      .el-upload-dragger {
        background: transparent;
      }
    }
  }
}

.drag-and-drop-area,
.mixing-status,
.ready-status {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  flex-grow: 4;
  color: var(--txt-secondary-color);
}

.drag-and-drop-text {
  font-size: 1rem;
  color: var(--txt-secondary-color);
  line-height: 132.562%;
  margin: 0;
  padding: 59px 0 65px 0;
}

.file-count {
  color: var(--txt-secondary-color);
  margin-bottom: 4px;
}

.file-list {
  list-style: none;
  flex-grow: 2;
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
  overflow: auto;
  max-height: 100px;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0px;
  }
}

.file-name {
  color: var(--txt-primary-color);
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
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
