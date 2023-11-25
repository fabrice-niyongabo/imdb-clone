<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
  >
    <swiper-slide v-for="movie in movies" :key="movie.id">
      <v-img
        :src="'https://images.tmdb.org/t/p/original' + movie.backdrop_path"
      />
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
});
</script>
