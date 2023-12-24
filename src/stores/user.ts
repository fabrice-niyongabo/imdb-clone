import type { IUserStore, TRole } from "@/interfaces";
import { defineStore } from "pinia";

const initialState: IUserStore = {
  token: "",
  refreshToken: "",
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
    persistUserStore(trueOrFalse: boolean) {
      //to do
    },

    setUser(userStore: IUserStore) {
      this.$state = userStore;
    },

    resetUser() {
      this.$state = { ...initialState };
    },
  },
  persist: true,
});
