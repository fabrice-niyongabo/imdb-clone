<template>
  <section class="bg-[#eeeeee] p-5">
    <div class="flex items-start justify-between">
      <h3 class="text-lg text-imdb-gray-text">Recently viewed</h3>
      <v-btn
        @click="recentlyViewedStore.clearRecentlyViewed()"
        :elevation="0"
        variant="text"
        class="!text-xs !normal-case !text-imdb-blue"
      >
        <span>Clear your history</span>
      </v-btn>
    </div>
    <div class="grid grid-cols-12 gap-2">
      <div v-for="movie in recentlyViewedStore.movies" :key="movie.movieId">
        <RouterLink
          :to="
            movie.movieType === 'movie'
              ? '/movie/' + movie.movieId
              : '/tv/' + movie.movieId
          "
        >
          <img
            :src="IMDB_BASE_IMAGE_PATH + movie.poster_path"
            :alt="movie.title"
            :title="movie.title"
            class="w-full rounded-md"
          />
        </RouterLink>
      </div>
    </div>
    <div
      class="flex items-center justify-center flex-col text-imdb-gray-text"
      v-if="recentlyViewedStore.movies.length === 0"
    >
      <v-icon icon="mdi-flask-empty-off-outline" />
      <p class="text-center">Your view history is empty</p>
    </div>
  </section>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useRecentlyViewedStore } from "@/stores/recentlyViewed";
import { IMDB_BASE_IMAGE_PATH } from "@/constants";

const recentlyViewedStore = useRecentlyViewedStore();
</script>
