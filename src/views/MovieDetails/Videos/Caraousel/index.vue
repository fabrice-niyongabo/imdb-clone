<template>
  <div class="imdb-trending-movies-carausel video-carausel">
    <swiper
      :modules="modules"
      :slides-per-view="2"
      :space-between="50"
      navigation
      :pagination="{ enabled: false }"
      :scrollbar="{ draggable: true }"
      autoplay
    >
      <swiper-slide
        v-for="(video, index) in returnSliderMovies()"
        :key="index"
        style="height: 250px"
      >
        <iframe
          width="100%"
          height="250"
          :src="`https://www.youtube.com/embed/${video.key}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </swiper-slide>
      <swiper-slide style="height: 250px">
        <div
          class="flex items-center justify-center flex-col bg-imdb-black w-full h-full text-white gap-2 cursor-pointer"
        >
          <v-icon icon="mdi-play-box-multiple" size="60" />
          <p>Play all {{ videos.length }} videos</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { IVideo } from "../../../../interfaces";
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
    videos: {
      type: Array as PropType<IVideo[]>,
      required: true,
    },
  },
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  methods: {
    returnSliderMovies() {
      if (this.videos.length <= 1) {
        return this.videos;
      } else {
        return this.videos.slice(1, 4);
      }
    },
  },
});
</script>
