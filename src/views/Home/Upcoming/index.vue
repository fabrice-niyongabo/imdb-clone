<template>
  <section class="bg-black py-5 min-h-[50vh]" ref="section">
    <div class="container mx-auto">
      <section-title
        title="Comming soon to theaters"
        href="/upcoming"
        sub-title="Trailers for upcomming releases"
        class="my-10"
      />
      <IMDBLoader v-if="isLoading" />
      <Caraousel :movies="movies" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "../../../components/SectionTitle/index.vue";
import IMDBLoader from "../../../components/IMDBLoader/index.vue";
import type { IUpcomingMovies } from "../../../interfaces";
import { API_TOKEN } from "../../../constants";
import axios from "axios";
import { useElementVisibility } from "@vueuse/core";
import Caraousel from "./Caraousel/index.vue";

interface IReturnData {
  isVisible: any;
  movies: IUpcomingMovies[];
  isLoading: boolean;
}

export default defineComponent({
  components: {
    SectionTitle,
    IMDBLoader,
    Caraousel,
  },
  data(): IReturnData {
    return {
      isLoading: false,
      isVisible: false,
      movies: [],
    };
  },
  methods: {
    fetMovies() {
      this.isLoading = true;
      axios
        .get(
          "https://api.themoviedb.org/3/movie/upcoming?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
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
  mounted() {
    this.isVisible = useElementVisibility(this.$refs.section as any);
  },
  watch: {
    isVisible(oldVal, newVal) {
      if (this.isVisible && this.movies.length === 0) {
        this.fetMovies();
      }
    },
  },
});
</script>
