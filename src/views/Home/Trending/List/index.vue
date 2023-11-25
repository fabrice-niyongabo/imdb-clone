<template>
  <h2 class="text-[#F5C518] text-2xl font-medium mb-5">Up next</h2>
  <ul>
    <ListItem
      v-for="(movie, index) in movies"
      :key="index"
      :movie="movie"
      :index="index"
      :totalMovies="movies.length"
      :activeMovieIndex="activeMovieIndex"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { ITrendingMovie } from "../../../../interfaces";
import ListItem from "./ListItem/index.vue";

export default defineComponent({
  props: {
    movies: { type: Array as PropType<ITrendingMovie[]>, required: true },
    activeMovieIndex: { type: Number, required: true },
  },
  components: {
    ListItem,
  },
});
</script>
