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
        <movie-item :movie="movie" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ITopPickMovie } from "../../../../interfaces";
import type { PropType } from "vue";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import MovieItem from "./MovieItem/index.vue";

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
    MovieItem,
  },
  props: {
    movies: {
      type: Array as PropType<ITopPickMovie[]>,
      required: true,
    },
  },
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
});
</script>
