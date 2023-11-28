<template>
  <section class="bg-black h-[90vh] lg:h-auto mt-3">
    <div class="container mx-auto">
      <v-row>
        <v-col md="8" class="relative imdb-trending-movies-carausel">
          <Carausel :movies="trendingMovies" @update-movie="updateMovieIndex" />
        </v-col>
        <v-col md="4">
          <List :movies="trendingMovies" :activeMovieIndex="activeMovieIndex" />
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { API_TOKEN } from "@/constants";
import type { ITrendingMovie } from "../../../interfaces";
import Carausel from "./Caraousel/index.vue";
import List from "./List/index.vue";

interface IReturnData {
  trendingMovies: ITrendingMovie[];
  activeMovieIndex: number;
  isLoading: boolean;
  error: string;
}

export default defineComponent({
  components: {
    Carausel,
    List,
  },
  data(): IReturnData {
    return {
      activeMovieIndex: 0,
      trendingMovies: [],
      isLoading: false,
      error: "",
    };
  },
  methods: {
    fetchData() {
      this.isLoading = true;
      axios
        .get("https://api.themoviedb.org/3/trending/movie/day?language=en-US", {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        })
        .then((res) => {
          this.isLoading = false;
          if (res.data.results) {
            this.trendingMovies = res.data.results;
          }
          // console.log({ data: res.data });
        })
        .catch((error) => {
          this.isLoading = false;
          console.log("Error while fetching trending movies", error);
        });
    },
    updateMovieIndex(index: number) {
      this.activeMovieIndex = index;
    },
  },
  mounted() {
    this.fetchData();
  },
});
</script>
