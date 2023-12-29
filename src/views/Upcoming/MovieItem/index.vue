<template>
  <li class="flex items-center justify-between border-b py-1 gap-2">
    <RouterLink
      :to="type === 'movie' ? '/movie/' + result.id : '/tv/' + result.id"
    >
      <img
        :src="IMDB_BASE_IMAGE_PATH + result.poster_path"
        width="50"
        height="100"
      />
    </RouterLink>
    <div class="flex-1">
      <RouterLink
        :to="type === 'movie' ? '/movie/' + result.id : '/tv/' + result.id"
      >
        <p class="font-bold">{{ result.title }}</p>
        <p class="line-clamp-1 text-gray-400">
          {{ result.overview }}
        </p>
      </RouterLink>
    </div>
    <IMDBBookmarkIcon
      bg-color="#f2f2f2"
      hover-bg="#CCC"
      height="40px"
      width="30px"
      :is-loading="isLoading"
      :add-to-watchlist="handleAddToWatchlist"
      :remove-from-wach-list="handleRemoveFromWatchlist"
      :is-favourite="isMovieInWatchlist(result.id)"
    />
  </li>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import IMDBBookmarkIcon from "@/components/IMDBBookmarkIcon/index.vue";
import type {
  IWatchlistRequest,
  IUpcomingMovies,
  TMovieType,
} from "@/interfaces";
import { useWatchlist } from "@/composables/watchlist";
import { IMDB_BASE_IMAGE_PATH } from "@/constants";

export default defineComponent({
  components: { IMDBBookmarkIcon },
  props: {
    result: {
      type: Object as PropType<IUpcomingMovies>,
      required: true,
    },
    type: { type: String as PropType<TMovieType>, required: true },
  },
  data() {
    const {
      isLoading,
      addToWatchlist,
      removeFromWachList,
      isMovieInWatchlist,
    } = useWatchlist();
    return {
      isLoading,
      addToWatchlist,
      removeFromWachList,
      isMovieInWatchlist,
      IMDB_BASE_IMAGE_PATH,
    };
  },
  methods: {
    handleAddToWatchlist() {
      const movieRequest: IWatchlistRequest = {
        backdrop_path: this.result.backdrop_path,
        movie_type: this.type,
        movieId: this.result.id,
        overview: this.result.overview,
        poster_path: this.result.poster_path,
        release_date: this.result.first_air_date,
        title: this.result.title,
      };
      this.addToWatchlist(movieRequest);
    },
    handleRemoveFromWatchlist() {
      this.removeFromWachList(this.result.id);
    },
  },
});
</script>
