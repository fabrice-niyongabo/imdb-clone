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
        setTimeout(() => {
          isLoading.value = false;
        }, 1000);
        errorHandler(error);
      });
  };

  return { addToWatchlist, isLoading };
};
