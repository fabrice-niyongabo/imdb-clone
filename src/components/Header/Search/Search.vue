<template>
  <div class="flex-1 relative">
    <div class="flex items-center justify-between">
      <div class="h-[30px] bg-white border-r rounded-l-md">
        <v-btn
          height="30"
          rounded="0"
          variant="text"
          class="rounded-l-md !capitalize"
        >
          {{ selectedFilterCategory.label }}
          <v-icon v-if="showCategories" icon="mdi-menu-up" size="x-large" />
          <v-icon v-if="!showCategories" icon="mdi-menu-down" size="x-large" />

          <v-menu activator="parent">
            <v-list
              class="mt-3 !bg-[#121212]"
              @vue:before-unmount="handleMenuClick()"
              @vue:before-mount="handleMenuClick()"
            >
              <v-list-item
                v-for="(item, index) in filterCategories"
                :key="index"
                :value="item.value"
                class="hover:bg-[#252525]"
              >
                <v-list-item-title
                  @click="handleChangeFilter(item)"
                  :class="[
                    item.value === selectedFilterCategory.value
                      ? 'text-[#F5C518]'
                      : 'text-gray-200',
                    'transition-all duration-100 hover:text-white',
                  ]"
                >
                  <div class="flex items-center justify-between gap-2">
                    <v-icon :icon="item.icon" />
                    <span class="flex-1">{{ item.label }}</span>
                  </div>
                </v-list-item-title>
              </v-list-item>
              <v-divider />
              <v-list-item class="hover:bg-[#252525]">
                <v-list-item-title
                  class="text-gray-200 transition-all duration-100 hover:text-white"
                >
                  <div class="flex items-center justify-between gap-2">
                    <v-icon icon="mdi-magnify-expand" />
                    <span class="flex-1">Advanced search</span>
                    <v-icon icon="mdi-chevron-right" />
                  </div>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </div>
      <input
        type="text"
        placeholder="Search IMDB"
        v-model="keyword"
        class="w-full bg-white h-[30px] outline-none px-3 text-sm"
        @focus="onFocus()"
        @focusout="onFocusOut()"
      />

      <div
        class="flex items-center justify-center bg-white h-[30px] pr-2 rounded-r-md hover:cursor-pointer"
      >
        <v-icon icon="mdi-magnify" />
      </div>
    </div>
    <search-results
      :is-loading="isLoading"
      :results="results"
      :show-menu="showResults"
      :search-type="selectedFilterCategory.value"
      :keyword="keyword"
      @close-menu="showResults = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchResults from "./SearchResults/index.vue";
import axios from "axios";
import { API_TOKEN } from "@/constants";
import type { ISearchResult } from "../../../interfaces";

interface IFilterCategory {
  label: string;
  value: string;
  icon: string;
}

interface IReturnData {
  filterCategories: IFilterCategory[];
  selectedFilterCategory: IFilterCategory;
  showCategories: boolean;
  showResults: boolean;
  isLoading: boolean;
  keyword: string;
  results: ISearchResult[];
}

const filterCategories: IFilterCategory[] = [
  {
    icon: "mdi-magnify",
    label: "All",
    value: "multi",
  },
  {
    icon: "mdi-filmstrip",
    label: "Titles",
    value: "movie",
  },
  {
    icon: "mdi-television",
    label: "Tv Episodes",
    value: "tv",
  },
  {
    icon: "mdi-account-multiple",
    label: "Celebs",
    value: "person",
  },
  {
    icon: "mdi-domain",
    label: "Companies",
    value: "company",
  },
  {
    icon: "mdi-tag",
    label: "Keywords",
    value: "keyword",
  },
];

export default defineComponent({
  components: { SearchResults },
  data(): IReturnData {
    return {
      filterCategories,
      selectedFilterCategory: filterCategories[0],
      showCategories: false,
      isLoading: false,
      showResults: false,
      keyword: "",
      results: [],
    };
  },
  methods: {
    handleChangeFilter(filter: IFilterCategory) {
      this.selectedFilterCategory = filter;
    },
    handleMenuClick() {
      this.showCategories = !this.showCategories;
    },
    handleSearch() {
      this.isLoading = true;
      axios
        .get(
          `https://api.themoviedb.org/3/search/${this.selectedFilterCategory.value}?query=${this.keyword}&include_adult=true&page=1`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        )
        .then((res) => {
          this.isLoading = false;
          if (res.data.results) {
            const results = res.data.results as ISearchResult[];
            const sortedResults = results.sort((a, b) =>
              a.vote_count > b.vote_count
                ? 1
                : b.vote_count > a.vote_count
                ? -1
                : 0
            );
            this.results = sortedResults;
          } else {
            this.results = [];
          }
        })
        .catch((error) => {
          this.isLoading = false;
          console.log({ error });
        });
    },
    onFocus() {
      if (this.keyword.trim().length > 0) {
        this.showResults = true;
      } else {
        this.showResults = false;
      }
    },
    onFocusOut() {
      setTimeout(() => {
        this.showResults = false;
      }, 300);
    },
  },
  watch: {
    keyword() {
      if (this.keyword.trim().length > 0) {
        this.handleSearch();
        this.showResults = true;
      } else {
        this.isLoading = false;
        this.results = [];
      }
    },
    selectedFilterCategory() {
      if (this.keyword.trim().length > 0) {
        this.handleSearch();
      }
    },
  },
});
</script>
