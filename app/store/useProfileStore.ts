import { defineStore } from "pinia";

export default defineStore("useProfileStore", {
  state: () => ({
    isLogin: false,
  }),

  actions: {
    async getPopoverNotifications() {},
  },
});
