<template>
  <section class="upload-section">
    <div class="upload-card">
      <div class="upload-card__body">
        <h3 class="card-title">{{ labelTxt[currentState] }}</h3>
        <template v-if="currentState === 'initial'">
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
          <div v-if="fileList.length > 0">
            <p class="file-count">{{ fileList.length }} files selected</p>
            <ul class="file-list">
              <li
                v-for="(file, index) in fileList"
                :key="file.name"
                class="file-item"
              >
                <span class="file-name">{{ file.name }}</span>
                <atomic-icon
                  id="trash"
                  class="delete-btn"
                  @click="deleteIcon(index)"
                ></atomic-icon>
              </li>
            </ul>
          </div>
        </template>

        <template v-else>
          <div class="drag-and-drop-area">{{ subTitleTxt[currentState] }}</div>
        </template>
      </div>

      <div class="card-actions">
        <atomic-button
          label="Create my Mix"
          :is-disabled="currentState !== 'initial' || fileList.length <= 1"
          :type="currentState === 'uploaded' ? 'white' : ''"
          @click="createMix"
        />
        <atomic-button
          label="Download Mix"
          :is-disabled="currentState !== 'ready'"
          :type="currentState === 'ready' ? 'white' : ''"
          @click="downloadMix"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ElUpload, ElMessage } from "element-plus";
import File from "../../api/File";
import useProfileStore from "@/store/useProfileStore";
import useModalStore from "@/store/useModalStore";
const { openModal } = useModalStore();

const { isLogin } = storeToRefs(useProfileStore());

const currentState = ref("initial");
const fileList = ref([]);

const labelTxt = {
  initial: "Upload Your Tracks",
  mixing: "Mixing in progress...",
  ready: "Your mix is ready!",
};
const subTitleTxt = {
  initial: "",
  mixing: "Analyzing tracks and creating your mix...",
  ready: "Enjoy your seamless music flow!",
};

function handleChangeUpload(a, b, c) {}

function deleteIcon(index) {
  fileList.value.splice(index, 1);
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

const downloadUrl = ref("");
const downloadFileName = ref("");

function downloadMix() {
  currentState.value = "initial";
  const link = document.createElement("a");
  link.href = downloadUrl.value;
  link.setAttribute("download", downloadFileName.value);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

async function createMix() {
  if (!isLogin.value) {
    openModal("AuthForm");
    return;
  }
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
  currentState.value = "mixing";
  const response = await File.fileUploadToServer(formData);
  currentState.value = "ready";
  if (!response?.data?.status) {
    console.log("шось пішло не так");
    return;
  }
  fileList.value = [];
  const { data } = response;
  downloadUrl.value = `/api/file/download/${data.fileName}`;
  downloadFileName.value = data.fileName;
  ElMessage({
    duration: 1000 * 5,
    type: "success",
    plain: true,
    showClose: true,
    dangerouslyUseHTMLString: true,
    customClass: "upload__notify__wait",
    message: `Your mix is ready. <br/>
  ${subTitleTxt.ready}`,
  });
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

  @media (orientation: portrait) and (max-width: 768px) {
    .drag-and-drop-text {
      padding: 35px 0;
    }
  }
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
    .el-upload-list {
      display: none;
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
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 90%;
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
  margin-top: 20px;
}
</style>
