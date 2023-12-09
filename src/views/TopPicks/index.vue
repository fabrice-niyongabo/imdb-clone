<template>
  <section class="bg-black min-h-screen">
    <div class="container py-10 mx-auto">
      <h1 class="text-white text-4xl">What to Watch - IMDb</h1>
      <div class="mt-7">
        <v-row>
          <v-col
            xs="6"
            sm="4"
            md="2"
            v-for="(movie, index) in results"
            :key="index"
          >
            <movie-item :movie="movie" />
          </v-col>
        </v-row>
      </div>
    </div>
    <div
      v-if="!isLoading && !stopLoadingMore"
      class="mt-5 pb-10 text-center justify-center"
    >
      <IMDBLoader v-if="isLoadingMore" />
      <v-btn
        v-else
        :elevation="0"
        class="!bg-imdb-blue !capitalize !text-sm !text-white"
        @click="loadMore()"
      >
        Load more
      </v-btn>
    </div>
  </section>
</template>

<script lang="ts">
import { API_TOKEN, IMDB_BASE_IMAGE_PATH } from "@/constants";
import type { ITopPickMovie } from "@/interfaces";
import axios from "axios";
import { defineComponent } from "vue";
import MovieItem from "./MovieItem/index.vue";
import IMDBLoader from "../../components/IMDBLoader/index.vue";

interface IReturnData {
  isLoading: boolean;
  isLoadingMore: boolean;
  stopLoadingMore: boolean;
  IMDB_BASE_IMAGE_PATH: string;
  results: ITopPickMovie[];
  page: number;
}

export default defineComponent({
  components: {
    MovieItem,
    IMDBLoader,
  },
  data(): IReturnData {
    return {
      stopLoadingMore: false,
      isLoading: false,
      isLoadingMore: false,
      IMDB_BASE_IMAGE_PATH,
      results: [],
      page: 1,
    };
  },
  methods: {
    loadMore() {
      this.page = this.page + 1;
      this.fetchData();
    },
    fetchData() {
      if (this.page === 1) {
        this.isLoading = true;
      } else {
        this.isLoadingMore = true;
      }
      axios
        .get(
          `https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=${this.page}&sort_by=popularity.desc`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        )
        .then((res) => {
          this.isLoading = false;
          this.isLoadingMore = false;
          if (res.data.results) {
            if (res.data.results.length > 0) {
              this.results = [...this.results, ...res.data.results];
            } else {
              this.stopLoadingMore = true;
            }
          } else {
            this.stopLoadingMore = true;
          }
        })
        .catch((error) => {
          this.isLoading = false;
          this.isLoadingMore = false;
          console.log({ error });
        });
    },
  },

  created() {
    this.fetchData();
  },
});
</script>
