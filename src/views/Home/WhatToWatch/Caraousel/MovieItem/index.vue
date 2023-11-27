<template>
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
          @click="toggleModal()"
        >
          <v-icon icon="mdi-information-outline" color="#FFF" />
        </v-btn>
      </div>
    </div>
  </div>

  <!-- modal -->
  <v-dialog v-model="showModal" width="50%">
    <div class="relative">
      <div
        class="w-[50px] h-[50px] rounded-full flex items-center justify-center absolute right-0 transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:cursor-pointer"
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
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { ITopPickMovie } from "../../../../../interfaces";
import { IMDB_BASE_IMAGE_PATH } from "../../../../../constants";
import SectionTitle from "../../../../../components/SectionTitle/index.vue";
export default defineComponent({
  props: {
    movie: { type: Object as PropType<ITopPickMovie>, required: true },
  },
  components: { SectionTitle },
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
