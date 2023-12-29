<template>
  <div class="bg-imdb-black relative">
    <RouterLink :to="'/tv/' + movie.id">
      <img
        :src="IMDB_BASE_IMAGE_PATH + movie.poster_path"
        :alt="movie.name"
        class="h-[300px] w-full"
      />
    </RouterLink>
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
      <h3 class="line-clamp-1" :title="movie.name">{{ movie.name }}</h3>
      <div class="my-3">
        <v-btn
          :loading="isLoading"
          @click="handleAddToWatchlist"
          variant="text"
          class="w-full !p-0 !normal-case !text-imdb-blue !bg-imdb-light-black"
        >
          <v-icon icon="mdi-plus" size="small" />
          <span class="text-xs">Watchlist</span>
        </v-btn>
      </div>
      <div class="flex items-center justify-between gap-2">
        <v-btn size="small" variant="text" class="!p-0 !normal-case">
          <RouterLink :to="'/tv/' + movie.id">
            <div class="px-[5px]">
              <v-icon icon="mdi-play" />
              <span>Trailer</span>
            </div>
          </RouterLink>
        </v-btn>
        <v-btn
          size="small"
          variant="text"
          class="!p-0 !normal-case !text-imdb-blue !bg-imdb-light-black !rounded-full"
          @click="toggleModal()"
        >
          <v-icon icon="mdi-information-outline" color="#FFF" />
        </v-btn>
      </div>
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

  <!-- modal -->
  <v-dialog v-model="showModal" width="50%">
    <div class="relative">
      <div
        class="w-[50px] h-[50px] bg-[rgba(0,0,0,0.5)] rounded-full flex items-center justify-center absolute right-0 transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:cursor-pointer"
        @click="toggleModal()"
      >
        <v-icon icon="mdi-close" class="text-white" />
      </div>
      <div class="bg-imdb-light-black p-5 rounded-sm mt-[60px]">
        <div class="flex items-start justify-between gap-2">
          <div>
            <img
              :src="IMDB_BASE_IMAGE_PATH + movie.poster_path"
              :alt="movie.name"
              width="80"
            />
          </div>
          <div class="flex-1">
            <section-title
              :href="'#'"
              :title="movie.name"
              :show-left-bar="false"
              class="text-white"
            />
            <p class="mt-1 text-gray-400">{{ movie.first_air_date }}</p>
            <div class="inline-flex items-center justify-between gap-2">
              <div class="flex items-center justify-center gap-2">
                <v-icon icon="mdi-star" class="text-imdb-gold" />
                <span class="text-gray-200"
                  >{{ movie.vote_average }}/{{ movie.vote_count }}</span
                >
              </div>
              <v-btn
                variant="text"
                prepend-icon="mdi-star-outline"
                class="!normal-case !text-imdb-blue"
                >Rate</v-btn
              >
            </div>
          </div>
        </div>
        <p class="my-2 text-white text-sm">{{ movie.overview }}</p>
        <div class="flex items-center justify-between mt-5 mb-2 gap-2">
          <div class="flex-1">
            <v-btn
              @click="handleAddToWatchlist"
              :loading="isLoading"
              :elevation="0"
              class="w-full !bg-imdb-light-blue-bg !normal-case !text-imdb-blue"
            >
              <v-icon icon="mdi-plus" />
              <span>Watchlist</span>
            </v-btn>
          </div>
          <v-btn
            :elevation="0"
            class="w-[30%] !text-imdb-blue !bg-imdb-light-blue-bg"
          >
            <v-icon icon="mdi-thumb-down-outline" />
          </v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>
<script lang="ts" setup>
import { defineProps, ref } from "vue";
import type { PropType } from "vue";
import type {
  ITopPickMovie,
  IWatchlistRequest,
} from "../../../../../interfaces";
import { IMDB_BASE_IMAGE_PATH } from "../../../../../constants";
import SectionTitle from "../../../../../components/SectionTitle/index.vue";
import IMDBBookmarkIcon from "../../../../../components/IMDBBookmarkIcon/index.vue";
import { useWatchlist } from "@/composables/watchlist";

const props = defineProps({
  movie: { type: Object as PropType<ITopPickMovie>, required: true },
});

//state
const showModal = ref(false);

//composables
const { addToWatchlist, removeFromWachList, isMovieInWatchlist, isLoading } =
  useWatchlist();

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const handleAddToWatchlist = () => {
  const movieRequest: IWatchlistRequest = {
    backdrop_path: props.movie.backdrop_path,
    movie_type: "tv",
    movieId: props.movie.id,
    overview: props.movie.overview,
    poster_path: props.movie.poster_path,
    release_date: props.movie.first_air_date,
    title: props.movie.name,
  };
  addToWatchlist(movieRequest);
};
const handleRemoveFromWatchlist = () => {
  removeFromWachList(props.movie.id);
};
</script>
