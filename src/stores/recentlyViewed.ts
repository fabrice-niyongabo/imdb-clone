import type { IRecentlyViewed, IRecentlyViewedStore } from "@/interfaces";
import { defineStore } from "pinia";

const initialState: IRecentlyViewedStore = {
  movies: [],
};

export const useRecentlyViewedStore = defineStore("recentlyViewed", {
  state: (): IRecentlyViewedStore => ({ ...initialState }),
  actions: {
    addToRecentlyViewed(movie: IRecentlyViewed) {
      const exists = this.$state.movies.find(
        (item) => item.movieId === movie.movieId
      );
      if (!exists) {
        this.$state.movies.push(movie);
      }
    },
    clearRecentlyViewed() {
      this.$state = { ...initialState };
    },
  },
  persist: true,
});
