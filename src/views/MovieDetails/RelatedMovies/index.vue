<template>
  <SectionTitle title="More like this" href="#" />
  <v-row class="mt-2">
    <v-col md="4" v-for="movie in movies.slice(0, 12)" :key="movie.id">
      <router-link :to="'/movie/' + movie.id">
        <div class="shadow-md rounded-md">
          <img
            :src="IMDB_BASE_IMAGE_PATH + movie.poster_path"
            class="w-full rounded-t-md"
          />
          <div class="p-3">
            <p class="text-sm font-semibold">{{ movie.title }}</p>
          </div>
        </div>
      </router-link>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { API_TOKEN } from "@/constants";
import axios from "axios";
import { defineComponent } from "vue";
import { IMDB_BASE_IMAGE_PATH } from "../../../constants";
import SectionTitle from "../../../components/SectionTitle/index.vue";

interface IRelatedMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IReturnData {
  isLoading: boolean;
  movies: IRelatedMovie[];
  IMDB_BASE_IMAGE_PATH: string;
}

export default defineComponent({
  components: { SectionTitle },
  data(): IReturnData {
    return {
      isLoading: true,
      movies: [],
      IMDB_BASE_IMAGE_PATH,
    };
  },
  methods: {
    fetchData() {
      this.isLoading = true;
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            this.$route.params.id +
            "/recommendations?language=en-US&page=1",
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        )
        .then((res) => {
          this.isLoading = false;
          if (res.data.results) {
            this.movies = res.data.results;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log({ error });
        });
    },
  },
  created() {
    this.fetchData();
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.fetchData();
      }
    );
  },
});
</script>
