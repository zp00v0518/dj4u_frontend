import { defineStore } from "pinia";

export const useProfileStore = defineStore("useProfileStore", {
  state: () => ({
    isLogin: false,
  }),

  actions: {
    async getPopoverNotifications() {},
  },
});
