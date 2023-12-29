<template>
  <div>
    <div class="border p-[5px] relative">
      <RouterLink
        :to="
          movie.movie_type === 'movie'
            ? '/movie/' + movie.movieId
            : '/tv/' + movie.movieId
        "
      >
        <img
          class="w-full"
          :src="IMDB_BASE_IMAGE_PATH + movie.poster_path"
          :alt="movie.title"
        />
      </RouterLink>
      <div class="absolute top-0 left-0 z-[1]">
        <IMDBBookmarkedIcon
          bg-color="#94c34d"
          hover-bg="#b1e967"
          height="40px"
          width="30px"
          title="Click to remove from favourite"
          :is-loading="isLoading"
          :call-back-fn="handleRemoveFromWatchlist"
        />
      </div>
    </div>
    <RouterLink
      :to="
        movie.movie_type === 'movie'
          ? '/movie/' + movie.movieId
          : '/tv/' + movie.movieId
      "
    >
      <h1 class="text-xs text-imdb-blue mt-1 line-clamp-1 text-center">
        {{ movie.title }}
      </h1>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import type { PropType } from "vue";
import type { IWatchlist } from "../../../interfaces";
import { IMDB_BASE_IMAGE_PATH } from "@/constants";
import IMDBBookmarkedIcon from "@/components/IMDBBookmarkedIcon/index.vue";

import { useWatchlist } from "@/composables/watchlist";

const props = defineProps({
  movie: { type: Object as PropType<IWatchlist>, required: true },
});

const { isLoading, removeFromWachList } = useWatchlist();

const handleRemoveFromWatchlist = () => {
  removeFromWachList(props.movie.movieId);
};
</script>
