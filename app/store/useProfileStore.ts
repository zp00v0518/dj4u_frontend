import { defineStore } from "pinia";
import UserApi from "@/api/User";
import { useStorage } from "@vueuse/core";

export default defineStore("useProfileStore", {
  state: () => ({
    isLogin: false,
    profile: null
  }),

  actions: {
    async registration(data) {
      const result = await UserApi.registrationUser(data);
      if (result.status) {
        useStorage("profile", result.data, localStorage, {
          mergeDefaults: true,
        });
        return result.data;
      }
    },

    checkLogin() {
      const data = useStorage("profile", null);
      if (data.value) {
        console.log(data.value);
        this.profile = data.value;
        this.isLogin = true;
      }
    },
  },
});
