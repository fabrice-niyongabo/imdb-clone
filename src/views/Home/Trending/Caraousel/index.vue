<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ enabled: false }"
    :scrollbar="{ draggable: true }"
    @slideChange="onSlideChange"
    autoplay
  >
    <swiper-slide
      v-for="(movie, index) in movies"
      :key="index"
      lazy
      style="height: 500px"
    >
      <img
        :src="IMDB_BASE_IMAGE_PATH + movie.backdrop_path"
        class="w-full h-full"
      />
      <div
        class="absolute left-0 bottom-0 h-full w-full"
        style="
          background: linear-gradient(
            transparent 0%,
            transparent 65%,
            rgba(0, 0, 0, 0.7) 77%,
            rgb(0, 0, 0) 85%,
            rgb(0, 0, 0) 100%
          );
        "
      >
        <div class="flex items-end justify-between w-full pl-5 h-full">
          <div>
            <img
              :src="IMDB_BASE_IMAGE_PATH + movie.poster_path"
              height="150"
              width="100"
              class="h-[150px] w-[100px]"
            />
          </div>
          <div class="flex-1 px-5">
            <div class="flex items-start justify-between gap-2">
              <div>
                <v-icon
                  icon="mdi-play-circle-outline"
                  size="80"
                  color="#F5C518"
                />
              </div>
              <div class="flex-1">
                <h3
                  class="text-2xl font-medium line-clamp-1"
                  :title="movie.title"
                >
                  {{ movie.title }} - {{ movie.release_date.split("-")[0] }}
                </h3>
                <p class="line-clamp-2 text-gray-300">{{ movie.overview }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IMDB_BASE_IMAGE_PATH } from "../../../../constants";
import type { ITrendingMovie } from "../../../../interfaces";
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
      type: Array as PropType<ITrendingMovie[]>,
      required: true,
    },
  },
  data() {
    return {
      IMDB_BASE_IMAGE_PATH,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  methods: {
    onSlideChange(e: any) {
      this.$emit("update-movie", e.activeIndex);
    },
  },
  emits: ["update-movie"],
});
</script>
