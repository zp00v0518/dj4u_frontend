import { defineStore } from "pinia";
import UserApi from "@/api/User";
import { useStorage, StorageSerializers } from "@vueuse/core";

export default defineStore("useProfileStore", {
  state: () => ({
    isLogin: false,
    profile: null
  }),

  actions: {
    async registration(data) {
      const result = await UserApi.registrationUser(data);
      if (result.status) {
        useStorage("profile", result.data, undefined, {
          mergeDefaults: true,
        });
        return result.data;
      }
    },

    checkLogin() {
      const data = useStorage("profile", null, undefined, { serializer: StorageSerializers.object });
      if (data.value) {
        this.profile = data.value;
        this.isLogin = true;
      }
    },
  },
});
