import { defineStore } from "pinia";

export default defineStore("layoutStore", {
  state: () => {
    return {
      menu: [],
    };
  },
  getters: {
    getMenu() {
      const route = useRoute();
      if (route.path === "/") {
        return [
          { label: "About", path: "/#about" },
          { label: "Pricing", path: "/#pricing" },
          { label: "Contact", path: "/#contacts" },
        ];
      } else {
        return [
          { label: "Home", path: "/" },
          { label: "Subscription", path: "/subscription" },
          { label: "Account settings", path: "/settings" },
          { label: "Support", path: "/support" },
        ];
      }
    },
  },
  actions: {},
});
