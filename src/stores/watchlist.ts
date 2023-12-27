import { BACKEND_URL } from "@/constants";
import type { IUserStore, IWatchlist } from "@/interfaces";
import axios from "axios";
import { defineStore } from "pinia";
import { useUserStore } from "./user";
import { errorHandler } from "@/utils";

interface IWachilstStore {
  isLoading: boolean;
  watchlist: IWatchlist[];
}

const initialState: IWachilstStore = {
  watchlist: [],
  isLoading: false,
};

export const useWatchlistStore = defineStore("watchlist", {
  state: (): IWachilstStore => ({ ...initialState }),
  actions: {
    addToWatchList(watchlist: IWatchlist) {
      this.$state.watchlist.push(watchlist);
    },
    fetchWatchList() {
      const userStore = useUserStore();
      this.$state.isLoading = true;
      axios
        .get(BACKEND_URL + "/watchlist", {
          headers: {
            Authorization: `Bearer ${userStore.token}`,
          },
        })
        .then((res) => {
          this.$state.isLoading = false;
          this.$state.watchlist = res.data;
        })
        .catch((error) => {
          this.$state.isLoading = false;
          errorHandler(error);
        });
    },
  },
  persist: true,
});
