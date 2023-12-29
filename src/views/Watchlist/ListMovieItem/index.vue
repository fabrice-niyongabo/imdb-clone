<template>
  <div class="flex items-start justify-between gap-2">
    <div class="border p-[5px] relative">
      <RouterLink
        :to="
          movie.movie_type === 'movie'
            ? '/movie/' + movie.movieId
            : '/tv/' + movie.movieId
        "
      >
        <img
          class="w-[100px]"
          :src="IMDB_BASE_IMAGE_PATH + movie.poster_path"
          :alt="movie.title"
        />
      </RouterLink>
      <div class="absolute top-0 left-0 z-[1]">
        <IMDBBookmarkIcon
          bg-color="#121212b4"
          hover-bg="#121212d5"
          height="40px"
          width="30px"
          :is-loading="isLoading"
          :add-to-watchlist="null"
          :remove-from-wach-list="handleRemoveFromWatchlist"
          :is-favourite="true"
        />
      </div>
    </div>
    <div class="flex-1">
      <RouterLink
        :to="
          movie.movie_type === 'movie'
            ? '/movie/' + movie.movieId
            : '/tv/' + movie.movieId
        "
      >
        <h2 class="text-imdb-blue">{{ movie.title }}</h2>
      </RouterLink>
      <p class="text-xs text-imdb-gray-text">
        {{ movie.release_date }} |
        {{ movie.movie_type === "movie" ? "Movie" : "TV Series" }}
      </p>
      <p class="mt-1">{{ movie.overview }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import type { PropType } from "vue";
import type { IWatchlist } from "../../../interfaces";
import { IMDB_BASE_IMAGE_PATH } from "@/constants";
import IMDBBookmarkIcon from "@/components/IMDBBookmarkIcon/index.vue";
import { useWatchlist } from "@/composables/watchlist";

const props = defineProps({
  movie: { type: Object as PropType<IWatchlist>, required: true },
});

const { isLoading, removeFromWachList } = useWatchlist();

const handleRemoveFromWatchlist = () => {
  removeFromWachList(props.movie.movieId);
};
</script>
