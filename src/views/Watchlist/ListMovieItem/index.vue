<template>
  <div class="flex items-start justify-between gap-2">
    <div class="border p-[5px] relative">
      <img
        class="w-[100px]"
        :src="IMDB_BASE_IMAGE_PATH + movie.poster_path"
        :alt="movie.title"
      />
      <div class="absolute top-0 left-0 z-[10]">
        <IMDBBookmarkedIcon
          bg-color="#94c34d"
          hover-bg="#b1e967"
          height="40px"
          width="30px"
          title="Click to remove from favourite"
          :is-loading="isLoading"
          :call-back-fn="removeFromWachList"
        />
      </div>
    </div>
    <div class="flex-1">
      <h2 class="text-imdb-blue">{{ movie.title }}</h2>
      <p class="text-xs text-imdb-gray-text">
        {{ movie.release_date }} |
        {{ movie.movie_type === "movie" ? "Movie" : "TV Series" }}
      </p>
      <p class="mt-1">{{ movie.overview }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { PropType } from "vue";
import type { IWatchlist } from "../../../interfaces";
import { BACKEND_URL, IMDB_BASE_IMAGE_PATH } from "@/constants";
import IMDBBookmarkedIcon from "@/components/IMDBBookmarkedIcon/index.vue";
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { useWatchlistStore } from "@/stores/watchlist";
import { errorHandler, toastMessage } from "@/utils";

const props = defineProps({
  movie: { type: Object as PropType<IWatchlist>, required: true },
});

const userStore = useUserStore();
const watchlistStore = useWatchlistStore();

//state
const isLoading = ref(false);

const removeFromWachList = () => {
  isLoading.value = true;
  axios
    .delete(BACKEND_URL + "/watchlist/" + props.movie.movieId, {
      headers: {
        Authorization: `Bearer ${userStore.token}`,
      },
    })
    .then((res) => {
      isLoading.value = false;
      watchlistStore.removeFromWatchList(props.movie.movieId);
      toastMessage("success", res.data.message);
    })
    .catch((error) => {
      isLoading.value = false;
      errorHandler(error);
    });
};
</script>
