import { BACKEND_URL } from "@/constants";
import type { IWatchlist } from "@/interfaces";
import axios from "axios";
import { defineStore } from "pinia";
import { useUserStore } from "./user";
import { errorHandler } from "@/utils";

type TDisplayMode = "Grid" | "List";

export interface IWachilstStore {
  isLoading: boolean;
  watchlist: IWatchlist[];
  displayMode: TDisplayMode;
}

const initialState: IWachilstStore = {
  watchlist: [],
  isLoading: false,
  displayMode: "List",
};

export const useWatchlistStore = defineStore("watchlist", {
  state: (): IWachilstStore => ({ ...initialState }),
  actions: {
    setDispayMode(mode: TDisplayMode) {
      this.$state.displayMode = mode;
    },
    addToWatchList(watchlist: IWatchlist) {
      this.$state.watchlist.push(watchlist);
    },
    removeFromWatchList(movieId: number) {
      this.$state.watchlist = this.$state.watchlist.filter(
        (movie) => movie.movieId !== movieId
      );
    },
    resetWatchlist() {
      this.$state = { ...initialState };
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
