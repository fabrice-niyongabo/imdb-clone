<template>
  <div class="bg-imdb-black">
    <RouterLink :to="'/movie/' + movie.id">
      <img
        :src="IMDB_BASE_IMAGE_PATH + movie.backdrop_path"
        :alt="movie.title"
        class="h-[240px] w-full"
      />
    </RouterLink>
    <div class="p-3 flex items-start justify-between gap-2">
      <IMDBBookmarkIcon
        bg-color="#252525"
        hover-bg="#000"
        height="40px"
        width="30px"
        :is-loading="isLoading"
        :add-to-watchlist="handleAddToWatchlist"
        :remove-from-wach-list="handleRemoveFromWatchlist"
        :is-favourite="isMovieInWatchlist(movie.id)"
      />
      <div class="flex-1">
        <p>
          {{
            new Date(movie.release_date).toLocaleString("en-US", {
              month: "short",
            })
          }}
          {{ new Date(movie.release_date).getDay() }}
        </p>
        <h3 class="line-clamp-1" :title="movie.title">{{ movie.title }}</h3>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type {
  IUpcomingMovies,
  IWatchlistRequest,
} from "../../../../../interfaces";
import { IMDB_BASE_IMAGE_PATH } from "../../../../../constants";
import SectionTitle from "../../../../../components/SectionTitle/index.vue";
import IMDBBookmarkIcon from "../../../../../components/IMDBBookmarkIcon/index.vue";
import { useWatchlist } from "@/composables/watchlist";

export default defineComponent({
  props: {
    movie: { type: Object as PropType<IUpcomingMovies>, required: true },
  },
  components: { SectionTitle, IMDBBookmarkIcon },
  data() {
    const {
      addToWatchlist,
      removeFromWachList,
      isMovieInWatchlist,
      isLoading,
    } = useWatchlist();
    return {
      addToWatchlist,
      isLoading,
      IMDB_BASE_IMAGE_PATH,
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
        release_date: this.movie.first_air_date,
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
