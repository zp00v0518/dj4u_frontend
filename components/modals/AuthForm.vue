<template>
  <VueFinalModal
    :click-to-close="false"
    class="modal-auth"
    content-class="modal-auth-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @close="closeModal('AuthForm')"
  >
    <div class="auth-wrapper">
      <div class="auth-header">
        <button
          class="auth-link"
          :class="{ active: isLoginForm }"
          @click="isLoginForm = true"
        >
          Log in
        </button>
        <span class="auth-divider">|</span>
        <button
          class="auth-link"
          :class="{ active: !isLoginForm }"
          @click="isLoginForm = false"
        >
          Sign up
        </button>
      </div>

      <div class="auth-content">
        <h2 class="auth-title">
          {{ isLoginForm ? "Welcome back" : "Create Your Account" }}
        </h2>

        <LoginForm v-if="isLoginForm" @close="closeModal('AuthForm')" />
        <RegisterForm v-else @close="closeModal('AuthForm')" />
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from "vue-final-modal";
import useModalStore from "@/store/useModalStore";
import LoginForm from "@/components/molecules/Auth/LoginForm.vue";
import RegisterForm from "@/components/molecules/Auth/RegisterForm.vue";

const { closeModal } = useModalStore();

const isLoginForm = ref(true);
</script>

<style lang="scss">
.modal-auth {
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
}

.modal-auth-content {
  width: max(65%, 500px);
  height: 56%;
  background-color: var(--bg-color);
  padding: 30px max(14%, 50px);
  border-radius: 30px;
}

.auth-wrapper {
  .auth-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-family: "Martian Mono", monospace;
    font-size: 1rem;
    color: var(--txt-primary-color);
    padding-bottom: 54px;
  }

  .auth-link {
    background: none;
    border: none;
    color: var(--txt-secondary-color);
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;

    &.active {
      color: var(--txt-primary-color);
    }
  }

  .auth-divider {
    color: var(--border-color);
  }

  .auth-title {
    font-size: rem(24px);
    text-align: center;
    margin: 0;
    margin-bottom: 46px;
  }
}

.auth-content {
  .input-group {
    margin-bottom: 6px;
  }

  .app-btn {
    margin: 44px auto 0px auto;
    width: 197px;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
}
</style>
