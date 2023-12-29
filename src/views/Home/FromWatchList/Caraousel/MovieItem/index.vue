<template>
  <div class="bg-imdb-black relative">
    <router-link :to="'/movie/' + movie.id">
      <img
        :src="IMDB_BASE_IMAGE_PATH + movie.poster_path"
        :alt="movie.title"
        class="h-[300px] w-full"
      />
    </router-link>
    <div class="p-3">
      <h3 class="line-clamp-1" :title="movie.title">{{ movie.title }}</h3>

      <RouterLink
        :to="
          movie.movie_type === 'movie'
            ? '/movie/' + movie.movieId
            : '/tv/' + movie.movieId
        "
      >
        <v-btn
          variant="text"
          size="small"
          :elevation="0"
          class="!p-0 !normal-case w-full !bg-imdb-light-black mt-2"
        >
          <div class="px-[5px]">
            <v-icon icon="mdi-play" />
            <span>Trailer</span>
          </div>
        </v-btn>
      </RouterLink>
    </div>
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
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { IWatchlist } from "../../../../../interfaces";
import { IMDB_BASE_IMAGE_PATH } from "../../../../../constants";
import IMDBBookmarkIcon from "../../../../../components/IMDBBookmarkIcon/index.vue";

import { useUserStore } from "@/stores/user";
import { useWatchlistStore } from "@/stores/watchlist";
import { useWatchlist } from "@/composables/watchlist";

export default defineComponent({
  props: {
    movie: { type: Object as PropType<IWatchlist>, required: true },
  },
  components: { IMDBBookmarkIcon },
  data() {
    const { isLoading, removeFromWachList } = useWatchlist();
    return {
      isLoading,
      IMDB_BASE_IMAGE_PATH,
      userStore: useUserStore(),
      watchlistStore: useWatchlistStore(),
      removeFromWachList,
    };
  },
  methods: {
    handleRemoveFromWatchlist() {
      this.removeFromWachList(this.movie.movieId);
    },
  },
});
</script>
