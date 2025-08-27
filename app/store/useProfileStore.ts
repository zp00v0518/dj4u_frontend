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
      console.log(result)
      if (result.status) {
        // useStorage("profile", result.data, undefined, {
        //   mergeDefaults: true,
        // });
        return result.data;
      } else {
      }
    },

    async checkLogin() {
      // const data = useStorage("profile", null, undefined, { serializer: StorageSerializers.object });
      const data = await UserApi.getProfile()
      if (data) {
        console.log(data)
        this.profile = data.value;
        this.isLogin = true;
      }
    },
  },
});
