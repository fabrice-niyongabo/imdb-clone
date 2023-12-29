<template>
  <div class="container py-5 mx-auto">
    <div class="flex items-center gap-2">
      <h1 class="text-4xl">Upcoming releases</h1>
      <select
        class="p-2 text-4xl text-blue-600 hover:bg-blue-100 outline-none border-[1px] border-dashed border-white focus:border-blue-600"
      >
        <option value="en-US">English US</option>
        <option value="fr">France</option>
        <option value="ru">Russia</option>
        <option value="ng">Nigeria</option>
        <option value="no">Norway</option>
      </select>
    </div>
    <div class="flex items-center gap-2 mt-2">
      <div
        @click="setType('movie')"
        :class="[
          type === 'movie' && 'bg-gray-300',
          'border border-gray-300 rounded-full py-1 px-3 hover:bg-gray-300 hover:cursor-pointer duration-500',
        ]"
      >
        Movie
      </div>
      <div
        @click="setType('tv')"
        :class="[
          type === 'tv' && 'bg-gray-300',
          'border border-gray-300 rounded-full py-1 px-3 hover:bg-gray-300 hover:cursor-pointer transition-all duration-500',
        ]"
      >
        Tv
      </div>
    </div>
    <div class="mt-5">
      <div v-for="date in dates" :key="date" class="my-5">
        <h3 class="text-xl font-semibold">{{ date }}</h3>
        <div class="border p-5 rounded-md mt-2">
          <ul>
            <MovieItem
              v-for="result in results.filter(
                (item) =>
                  item.release_date === date || item?.first_air_date === date
              )"
              :key="result.id"
              :result="result"
              :type="type === 'tv' ? 'tv' : 'movie'"
            />
          </ul>
        </div>
      </div>
    </div>
    <div
      v-if="!isLoading && !stopLoadingMore"
      class="my-10 text-center justify-center"
    >
      <IMDBBlackLoader v-if="isLoadingMore" />
      <v-btn
        v-else
        :elevation="0"
        class="!bg-imdb-blue !capitalize !text-sm !text-white"
        @click="loadMore()"
      >
        Load more results
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { API_TOKEN } from "@/constants";
import type { IUpcomingMovies } from "@/interfaces";
import IMDBBlackLoader from "@/components/IMDBBlackLoader/index.vue";
import axios from "axios";
import { defineComponent } from "vue";
import MovieItem from "./MovieItem/index.vue";

interface IReturnData {
  lang: string;
  type: string;
  results: IUpcomingMovies[];
  isLoading: boolean;
  dates: string[];
  stopLoadingMore: boolean;
  isLoadingMore: boolean;
  page: number;
}
export default defineComponent({
  components: {
    IMDBBlackLoader,
    MovieItem,
  },
  data(): IReturnData {
    return {
      page: 1,
      stopLoadingMore: false,
      isLoadingMore: false,
      lang: this.$route.query.lang
        ? (this.$route.query.lang as string)
        : "en-US",
      type: this.$route.query.type
        ? (this.$route.query.type as string)
        : "movie",
      isLoading: false,
      dates: [],
      results: [],
    };
  },
  methods: {
    loadMore() {
      this.page = this.page + 1;
      this.handleFetchData();
    },
    setType(type: string) {
      this.type = type;
      this.$router.push(`/upcoming?type=${type}&lang=${this.lang}`);
    },
    handleFetchData() {
      if (this.page === 1) {
        this.isLoading = true;
      } else {
        this.isLoadingMore = true;
      }
      const url =
        this.type === "movie"
          ? `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${this.page}`
          : `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${this.page}`;
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        })
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
    this.handleFetchData();
    this.$watch(
      () => this.$route.query,
      (toParams, previousParams) => {
        this.handleFetchData();
        this.stopLoadingMore = false;
      }
    );
  },
  watch: {
    results() {
      const dt: string[] = [];
      this.results.forEach((element) => {
        if (!dt.includes(element.release_date || element.first_air_date)) {
          dt.push(element.release_date || element.first_air_date);
        }
      });
      this.dates = dt;
    },
  },
});
</script>
<style scoped>
select option {
  font-size: 14px;
  color: black;
}
select:hover option {
  background-color: #fff;
}
</style>
