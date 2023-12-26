import type { IUserStore } from "@/interfaces";
import { defineStore } from "pinia";

const initialState: IUserStore = {
  token: "",
  refreshToken: "",
  keepSignedIn: false,
  userDetails: {
    id: null,
    names: "",
    email: "",
    role: null,
  },
};

export const useUserStore = defineStore("user", {
  state: (): IUserStore => ({ ...initialState }),
  actions: {
    setUser(userStore: IUserStore) {
      this.$state = userStore;
    },
    resetUser() {
      this.$state = { ...initialState };
    },
  },
  persist: true,
});
