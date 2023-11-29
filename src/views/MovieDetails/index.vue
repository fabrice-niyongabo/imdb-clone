<template>
  <Details
    :details="movieDetails"
    :videos="movieVideos"
    :is-loading="isLoading"
    :is-loading-video="isLoadingVideos"
    :images="movieImages"
  />
  <div class="container mx-auto mt-5">
    <v-row>
      <v-col md="8">
        <Videos :videos="movieVideos" />
      </v-col>
      <v-col md="4"></v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import type { IMovieDetails, IVideo, IImage } from "../../interfaces";
import { API_TOKEN } from "@/constants";
import Details from "./Details/index.vue";
import Videos from "./Videos/index.vue";
import Images from "./Images/index.vue";

interface IReturnData {
  movieDetails: IMovieDetails | null;
  isLoading: boolean;
  isLoadingVideos: boolean;
  isLoadingImages: boolean;
  movieVideos: IVideo[];
  movieImages: IImage[];
}

export default defineComponent({
  components: {
    Details,
    Images,
    Videos,
  },
  data(): IReturnData {
    return {
      movieDetails: null,
      isLoading: true,
      isLoadingVideos: true,
      isLoadingImages: true,
      movieVideos: [],
      movieImages: [],
    };
  },
  methods: {
    fetchDetails() {
      this.isLoading = true;
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            this.$route.params.id +
            "?language=en-US",
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        )
        .then((res) => {
          this.isLoading = false;
          this.movieDetails = res.data;
          this.fetchVideos();
          this.fetchImages();
        })
        .catch((error) => {
          this.isLoading = false;
          console.log({ error });
        });
    },
    fetchVideos() {
      this.isLoadingVideos = true;
      axios
        .get(
          "http://api.themoviedb.org/3/movie/" +
            this.$route.params.id +
            "/videos",
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        )
        .then((res) => {
          this.isLoadingVideos = false;
          if (res.data.results) {
            this.movieVideos = res.data.results;
          }
        })
        .catch((error) => {
          this.isLoadingVideos = false;
          console.log({ error });
        });
    },
    fetchImages() {
      this.isLoadingImages = true;
      axios
        .get(
          "http://api.themoviedb.org/3/movie/" +
            this.$route.params.id +
            "/images",
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        )
        .then((res) => {
          this.isLoadingImages = false;
          if (res.data.backdrops) {
            this.movieImages = res.data.backdrops;
          }
        })
        .catch((error) => {
          this.isLoadingImages = false;
          console.log({ error });
        });
    },
  },
  mounted() {
    this.fetchDetails();
  },
});
</script>
