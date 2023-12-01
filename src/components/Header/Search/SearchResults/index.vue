<template>
  <div class="bg-imdb-search-bg absolute top-0 left-0 right-0 z-[1] mt-[30px]">
    <ul class="mt-2">
      <li
        v-for="(result, index) in resultsToShow"
        :key="index"
        class="flex items-start justify-between gap-2 border-b-[1px] border-b-gray-200 p-3"
      >
        <div>
          <v-icon
            icon="mdi-file"
            size="50"
            class="text-imdb-light-blue-bg"
            v-if="!result.profile_path && !result.poster_path"
          />
          <img
            v-if="result.profile_path || result.poster_path"
            :src="
              result.profile_path
                ? IMDB_BASE_IMAGE_PATH + result.profile_path
                : IMDB_BASE_IMAGE_PATH + result.poster_path
            "
            :alt="result.name || result.title"
            class="w-[50px]"
          />
        </div>
        <div class="flex-1">
          <p class="text-white">{{ result.name || result.title }}</p>
          <p class="text-gray-400 text-xs">{{ result.first_air_date }}</p>
          <p class="text-gray-400 text-xs line-clamp-1">
            {{ result.overview }}
          </p>
        </div>
      </li>
      <li class="p-2">
        <router-link to="#"
          ><p class="text-white text-sm">
            See all results for "{{ keyword }}"
          </p></router-link
        >
      </li>
    </ul>

    <IMDBLoader v-if="isLoading" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { ISearchResult } from "../../../../interfaces";
import IMDBLoader from "../../../IMDBLoader/index.vue";
import { IMDB_BASE_IMAGE_PATH } from "@/constants";

interface IReturnData {
  resultsToShow: ISearchResult[];
  IMDB_BASE_IMAGE_PATH: string;
}

export default defineComponent({
  components: { IMDBLoader },
  props: {
    isLoading: { type: Boolean, required: true },
    showMenu: { type: Boolean, required: true },
    searchType: { type: String, required: true },
    keyword: { type: String, required: true },
    results: { type: Array as PropType<ISearchResult[]>, required: true },
  },
  data(): IReturnData {
    return {
      resultsToShow: [],
      IMDB_BASE_IMAGE_PATH,
    };
  },
  watch: {
    results() {
      if (this.searchType !== "multi") {
        this.resultsToShow = this.results.slice(0, 7);
      } else {
        let res = [];
        //movies
        const movies = this.results.filter(
          (item) => item.media_type === "movie"
        );
        res = [...movies.slice(0, 5)];

        //tv series
        const tvSeries = this.results.filter((item) => item.media_type == "tv");
        res = [...res, ...tvSeries.slice(0, 2)];
      }
    },
  },
});
</script>
