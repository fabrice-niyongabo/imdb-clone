<template>
  <section class="container py-10 mx-auto">
    <v-alert
      text="Invalid search query format"
      v-if="!$route.query.q || !$route.query.t"
      type="info"
    />
    <div v-else>
      <h1 class="text-4xl font-semibold">Search "{{ $route.query.q }}"</h1>
      <div v-if="$route.query.t === 'multi'">
        <v-row>
          <!-- movies -->
          <v-col
            md="6"
            class="mt-5"
            v-if="
              results.filter((item) => item.media_type === 'movie').length > 0
            "
          >
            <SectionTitle title="Movies" href="#" :show-icon="false" />
            <div class="mt-5 border p-5 rounded-sm">
              <div
                v-for="(result, index) in results.filter(
                  (item) => item.media_type === 'movie'
                )"
                :key="index"
              >
                <router-link :to="{ path: '/movie/' + result.id }">
                  <div
                    class="flex items-center justify-between gap-4 mb-3 border-b pb-2"
                  >
                    <v-icon
                      icon="mdi-file"
                      size="70"
                      class="text-imdb-light-blue-bg"
                      v-if="!result.profile_path && !result.poster_path"
                    />
                    <img
                      v-if="result.profile_path || result.poster_path"
                      :src="IMDB_BASE_IMAGE_PATH + result.poster_path"
                      :alt="result.name || result.title"
                      class="h-[100px] w-[70px]"
                    />
                    <div class="flex-1">
                      <h3 class="text-xl font-semibold">
                        {{ result.name || result.title }}
                      </h3>
                      <p class="text-sm text-gray-500">
                        {{ result.first_air_date || result.release_date }}
                      </p>
                      <p class="line-clamp-2 text-sm text-gray-500">
                        {{ result.overview }}
                      </p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </v-col>
          <v-col
            md="6"
            class="mt-5"
            v-if="results.filter((item) => item.media_type === 'tv').length > 0"
          >
            <SectionTitle title="TV Series" href="#" :show-icon="false" />
            <div class="mt-5 border p-5 rounded-sm">
              <div
                v-for="(result, index) in results.filter(
                  (item) => item.media_type === 'tv'
                )"
                :key="index"
              >
                <router-link :to="{ path: '/tv/' + result.id }">
                  <div
                    class="flex items-center justify-between gap-4 mb-3 border-b pb-2"
                  >
                    <v-icon
                      icon="mdi-file"
                      size="100"
                      class="text-imdb-light-blue-bg"
                      v-if="!result.profile_path && !result.poster_path"
                    />
                    <img
                      v-if="result.profile_path || result.poster_path"
                      :src="IMDB_BASE_IMAGE_PATH + result.poster_path"
                      :alt="result.name || result.title"
                      class="h-[100px] w-[70px]"
                    />
                    <div class="flex-1">
                      <h3 class="text-xl font-semibold">
                        {{ result.name || result.title }}
                      </h3>
                      <p class="text-sm text-gray-500">
                        {{ result.first_air_date || result.release_date }}
                      </p>
                      <p class="line-clamp-2 text-sm text-gray-500">
                        {{ result.overview }}
                      </p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </v-col>
        </v-row>
        <br />
        <hr />
        <br />
        <!-- other results -->
        <v-row>
          <v-col
            md="6"
            v-for="(result, index) in results.filter(
              (item) => item.media_type !== 'movie' && item.media_type !== 'tv'
            )"
            :key="index"
          >
            <div
              class="border p-5 rounded-sm flex items-center justify-between gap-4 mb-3 border-b pb-2"
            >
              <v-icon
                icon="mdi-file"
                size="70"
                class="text-imdb-light-blue-bg"
                v-if="!result.profile_path && !result.poster_path"
              />
              <img
                v-if="result.profile_path || result.poster_path"
                :src="IMDB_BASE_IMAGE_PATH + result.poster_path"
                :alt="result.name || result.title"
                class="h-[100px] w-[70px]"
              />
              <div class="flex-1">
                <h3 class="text-xl font-semibold">
                  {{ result.name || result.title }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ result.first_air_date || result.release_date }}
                </p>
                <p class="line-clamp-2 text-sm text-gray-500">
                  {{ result.overview }}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="mt-5" v-else>
        <v-row>
          <v-col
            xs="6"
            sm="6"
            md="6"
            v-for="(result, index) in results.filter(
              (item) => item.media_type !== 'movie' && item.media_type !== 'tv'
            )"
            :key="index"
          >
            <router-link
              :to="{
                path:
                  $route.params.t === 'tv'
                    ? '/tv/' + result.id
                    : '/movie/' + result.id,
              }"
            >
              <div
                class="border p-5 rounded-sm flex items-center justify-between gap-4 mb-3 border-b pb-2"
              >
                <v-icon
                  icon="mdi-file"
                  size="70"
                  class="text-imdb-light-blue-bg"
                  v-if="!result.profile_path && !result.poster_path"
                />
                <img
                  v-if="result.profile_path || result.poster_path"
                  :src="IMDB_BASE_IMAGE_PATH + result.poster_path"
                  :alt="result.name || result.title"
                  class="h-[100px] w-[70px]"
                />
                <div class="flex-1">
                  <h3 class="text-xl font-semibold">
                    {{ result.name || result.title }}
                  </h3>
                  <p class="text-sm text-gray-500">
                    {{ result.first_air_date || result.release_date }}
                  </p>
                  <p class="line-clamp-2 text-sm text-gray-500">
                    {{ result.overview }}
                  </p>
                </div>
              </div>
            </router-link>
          </v-col>
        </v-row>
      </div>
    </div>

    <div
      v-if="!isLoading && !stopLoadingMore"
      class="mt-5 text-center justify-center"
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
  </section>
</template>

<script lang="ts">
import { API_TOKEN, IMDB_BASE_IMAGE_PATH } from "@/constants";
import type { ISearchResult } from "@/interfaces";
import axios from "axios";
import { defineComponent } from "vue";
import SectionTitle from "../../components/SectionTitle/index.vue";
import IMDBBlackLoader from "../../components/IMDBBlackLoader/index.vue";

interface IReturnData {
  isLoading: boolean;
  isLoadingMore: boolean;
  stopLoadingMore: boolean;
  IMDB_BASE_IMAGE_PATH: string;
  results: ISearchResult[];
  page: number;
}

export default defineComponent({
  components: {
    SectionTitle,
    IMDBBlackLoader,
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
      this.handleSearch();
    },
    handleSearch() {
      if (!this.$route.query.q || !this.$route.query.t) {
        return;
      }

      if (this.page === 1) {
        this.isLoading = true;
      } else {
        this.isLoadingMore = true;
      }
      axios
        .get(
          `https://api.themoviedb.org/3/search/${this.$route.query.t}?query=${this.$route.query.q}&include_adult=true&page=${this.page}`,
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
    this.handleSearch();
    this.$watch(
      () => this.$route.query,
      (toParams, previousParams) => {
        this.handleSearch();
      }
    );
  },
});
</script>
