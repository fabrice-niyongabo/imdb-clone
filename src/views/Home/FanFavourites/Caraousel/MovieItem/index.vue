<template>
  <div class="bg-imdb-black relative">
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

      <v-btn size="small" variant="text" class="!p-0 !normal-case w-full">
        <div class="px-[5px]">
          <v-icon icon="mdi-play" />
          <span>Trailer</span>
        </div>
      </v-btn>
    </div>
    <div class="absolute top-0 left-0 z-[10]">
      <IMDBBookmarkIcon
        bg-color="#121212b4"
        hover-bg="#121212d5"
        height="40px"
        width="30px"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { ITopPickMovie } from "../../../../../interfaces";
import { IMDB_BASE_IMAGE_PATH } from "../../../../../constants";
import SectionTitle from "../../../../../components/SectionTitle/index.vue";
import IMDBBookmarkIcon from "../../../../../components/IMDBBookmarkIcon/index.vue";
export default defineComponent({
  props: {
    movie: { type: Object as PropType<ITopPickMovie>, required: true },
  },
  components: { SectionTitle, IMDBBookmarkIcon },
  data() {
    return {
      IMDB_BASE_IMAGE_PATH,
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
});
</script>
