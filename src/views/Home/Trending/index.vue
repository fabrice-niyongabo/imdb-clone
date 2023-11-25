<template>
  <section class="bg-black h-[90vh]">
    <v-container>
      <v-row>
        <v-col md="8" class="relative imdb-trending-movies-carausel">
          <Carausel :movies="trendingMovies" />
        </v-col>
        <v-col md="4"></v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { API_TOKEN } from "@/constants";
import type { ITrendingMovie } from "../../../interfaces";
import Carausel from "./Caraousel/index.vue";

interface IReturnData {
  trendingMovies: ITrendingMovie[];
  isLoading: boolean;
  error: string;
}

export default defineComponent({
  components: {
    Carausel,
  },
  data(): IReturnData {
    return {
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
          console.log({ data: res.data });
        })
        .catch((error) => {
          this.isLoading = false;
          console.log("Error while fetching trending movies", error);
        });
    },
  },
  mounted() {
    this.fetchData();
  },
});
</script>

<style>
.imdb-trending-movies-carausel .swiper-button-prev {
  background-color: rgba(20, 20, 20, 0.8);
  padding: 2rem 1.5rem;
  left: 0px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.imdb-trending-movies-carausel .swiper-button-next {
  background-color: rgba(20, 20, 20, 0.8);
  padding: 2rem 1.5rem;
  right: 0px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.imdb-trending-movies-carausel .swiper-button-prev:after,
.imdb-trending-movies-carausel .swiper-button-next:after {
  font-size: 25px !important;
  font-weight: 700;
}
</style>
