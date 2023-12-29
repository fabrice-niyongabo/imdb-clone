import { BACKEND_URL } from "@/constants";
import type { IWatchlistRequest } from "@/interfaces";
import { useUserStore } from "@/stores/user";
import { useWatchlistStore } from "@/stores/watchlist";
import { errorHandler, toastMessage } from "@/utils";
import axios from "axios";
import { ref } from "vue";

export const useWatchlist = () => {
  //store
  const userStore = useUserStore();
  const watchlistStore = useWatchlistStore();

  //state
  const isLoading = ref(false);

  const addToWatchlist = (movie: IWatchlistRequest) => {
    isLoading.value = true;
    axios
      .post(BACKEND_URL + "/watchlist", movie, {
        headers: {
          Authorization: `Bearer ${userStore.token}`,
        },
      })
      .then((res) => {
        isLoading.value = false;
        watchlistStore.addToWatchList(res.data);
        toastMessage("success", "Movie added to your watchlist!");
      })
      .catch((error) => {
        isLoading.value = false;
        errorHandler(error);
      });
  };

  const removeFromWachList = (movieId: number) => {
    isLoading.value = true;
    axios
      .delete(BACKEND_URL + "/watchlist/" + movieId, {
        headers: {
          Authorization: `Bearer ${userStore.token}`,
        },
      })
      .then((res) => {
        isLoading.value = false;
        watchlistStore.removeFromWatchList(movieId);
        toastMessage("success", res.data.message);
      })
      .catch((error) => {
        isLoading.value = false;
        errorHandler(error);
      });
  };

  const isMovieInWatchlist = (movieId: number): boolean => {
    const exists = watchlistStore.watchlist.find(
      (movie) => movie.movieId === movieId
    );
    return exists ? true : false;
  };

  return { addToWatchlist, removeFromWachList, isMovieInWatchlist, isLoading };
};
