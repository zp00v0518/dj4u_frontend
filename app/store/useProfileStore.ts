import { defineStore } from "pinia";
import UserApi from "@/api/User";
import { useStorage } from "@vueuse/core";

export default defineStore("useProfileStore", {
  state: () => ({
    isLogin: false,
  }),

  actions: {
    async registration(data) {
      const result = await UserApi.registrationUser(data);
      if (result.status) {
        useStorage("profile", result.data);
        return result.data;
      }
    },

    checkLogin() {
      const data = useStorage("profile", {});
      if (data.value) this.isLogin = true;
    },
  },
});
