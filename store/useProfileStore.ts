import { defineStore } from "pinia";
import UserApi from "@/api/User";
import { useStorage, StorageSerializers } from "@vueuse/core";

export default defineStore("useProfileStore", {
  state: () => ({
    isLogin: false,
    profile: null,
  }),

  actions: {
    async registration(data) {
      const result = await UserApi.registrationUser(data);
      if (result.status) this.setProfile(result.data);
      return result;
    },

    setProfile(data) {
      this.profile = data;
      this.isLogin = true;
    },

    async checkLogin() {
      const response = await UserApi.getProfile();
      if (response?.status) {
        this.setProfile(response.data);
      } else {
        this.isLogin = false;
      }
    },

    async loginUser(data) {
      const result = await UserApi.loginUser(data);
      if (result.status) this.setProfile(result.data);
      return result.data;
    },
  },
});
