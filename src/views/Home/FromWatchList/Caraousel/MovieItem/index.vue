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
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { IWatchlist } from "../../../../../interfaces";
import { BACKEND_URL, IMDB_BASE_IMAGE_PATH } from "../../../../../constants";
import IMDBBookmarkedIcon from "../../../../../components/IMDBBookmarkedIcon/index.vue";
import axios from "axios";
import { errorHandler, toastMessage } from "@/utils";
import { useUserStore } from "@/stores/user";
import { useWatchlistStore } from "@/stores/watchlist";

export default defineComponent({
  props: {
    movie: { type: Object as PropType<IWatchlist>, required: true },
  },
  components: { IMDBBookmarkedIcon },
  data() {
    return {
      IMDB_BASE_IMAGE_PATH,
      isLoading: false,
      userStore: useUserStore(),
      watchlistStore: useWatchlistStore(),
    };
  },
  methods: {
    removeFromWachList() {
      this.isLoading = true;
      axios
        .delete(BACKEND_URL + "/watchlist/" + this.movie.movieId, {
          headers: {
            Authorization: `Bearer ${this.userStore.token}`,
          },
        })
        .then((res) => {
          this.isLoading = false;
          this.watchlistStore.removeFromWatchList(this.movie.movieId);
          toastMessage("success", res.data.message);
        })
        .catch((error) => {
          this.isLoading = false;
          errorHandler(error);
        });
    },
  },
});
</script>
