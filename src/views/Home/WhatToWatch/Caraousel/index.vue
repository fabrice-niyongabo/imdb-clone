<template>
  <div class="imdb-trending-movies-carausel top-arrows">
    <swiper
      :modules="modules"
      :slides-per-view="6"
      :space-between="10"
      navigation
      :pagination="{ enabled: false }"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="(movie, index) in movies" :key="index" lazy>
        <div class="bg-imdb-black">
          <img
            :src="IMDB_BASE_IMAGE_PATH + movie.poster_path"
            :alt="movie.name"
            class="h-[250px] w-full"
          />
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
                variant="text"
                class="w-full !p-0 !normal-case !text-imdb-blue !bg-imdb-light-black"
              >
                <v-icon icon="mdi-plus" size="small" />
                <span class="text-xs">Watchlist</span>
              </v-btn>
            </div>
            <div class="flex items-center justify-between gap-2">
              <v-btn size="small" variant="text" class="!p-0 !normal-case">
                <div class="px-[5px]">
                  <v-icon icon="mdi-play" />
                  <span>Trailer</span>
                </div>
              </v-btn>
              <v-btn
                size="small"
                variant="text"
                class="!p-0 !normal-case !text-imdb-blue !bg-imdb-light-black !rounded-full"
              >
                <v-icon icon="mdi-information-outline" color="#FFF" />
              </v-btn>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IMDB_BASE_IMAGE_PATH } from "../../../../constants";
import type { ITopPickMovie } from "../../../../interfaces";
import type { PropType } from "vue";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    movies: {
      type: Array as PropType<ITopPickMovie[]>,
      required: true,
    },
  },
  data() {
    return {
      IMDB_BASE_IMAGE_PATH,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
});
</script>
