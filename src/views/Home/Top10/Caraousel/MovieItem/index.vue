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
      <div class="flex items-center justify-start mb-2 gap-1">
        <div>
          <v-icon icon="mdi-star" size="small" class="text-imdb-gold" />
          <span class="ml-1">{{ movie.vote_average }}</span>
        </div>
        <v-btn variant="text" size="small" class="!p-0">
          <v-icon icon="mdi-star-outline" class="text-imdb-blue" />
        </v-btn>
      </div>
      <h3 class="line-clamp-1" :title="movie.title">{{ movie.title }}</h3>
      <div class="my-3">
        <v-btn
          @click="handleAddToWatchlist"
          :loading="isLoading"
          variant="text"
          class="w-full !p-0 !normal-case !text-imdb-blue !bg-imdb-light-black"
        >
          <v-icon icon="mdi-plus" size="small" />
          <span class="text-xs">Watchlist</span>
        </v-btn>
      </div>

      <RouterLink :to="'/movie/' + movie.id">
        <v-btn size="small" variant="text" class="!p-0 !normal-case w-full">
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
        :add-to-watchlist="handleAddToWatchlist"
        :remove-from-wach-list="handleRemoveFromWatchlist"
        :is-favourite="isMovieInWatchlist(movie.id)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type {
  ITop10Movies,
  IWatchlistRequest,
} from "../../../../../interfaces";
import { IMDB_BASE_IMAGE_PATH } from "../../../../../constants";
import IMDBBookmarkIcon from "../../../../../components/IMDBBookmarkIcon/index.vue";
import { useWatchlist } from "@/composables/watchlist";

export default defineComponent({
  props: {
    movie: { type: Object as PropType<ITop10Movies>, required: true },
  },
  components: { IMDBBookmarkIcon },
  data() {
    const {
      isLoading,
      addToWatchlist,
      removeFromWachList,
      isMovieInWatchlist,
    } = useWatchlist();
    return {
      IMDB_BASE_IMAGE_PATH,
      isLoading,
      addToWatchlist,
      removeFromWachList,
      isMovieInWatchlist,
    };
  },
  methods: {
    handleAddToWatchlist() {
      const movieRequest: IWatchlistRequest = {
        backdrop_path: this.movie.backdrop_path,
        movie_type: "movie",
        movieId: this.movie.id,
        overview: this.movie.overview,
        poster_path: this.movie.poster_path,
        release_date: this.movie.release_date,
        title: this.movie.title,
      };
      this.addToWatchlist(movieRequest);
    },
    handleRemoveFromWatchlist() {
      this.removeFromWachList(this.movie.id);
    },
  },
});
</script>
