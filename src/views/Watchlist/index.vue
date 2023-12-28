<template>
  <div class="bg-[#cececa]">
    <div class="container mx-auto">
      <div class="bg-[#eeeeee]">
        <div class="flex items-center justify-between gap-2 p-5">
          <div>
            <h2 class="text-3xl">Your Watchlist</h2>
            <p
              class="font-semibold text-imdb-gray-text flex items-center text-md"
            >
              <v-icon icon="mdi-lock" size="small" /> <span>PRIVATE</span>
            </p>
          </div>
          <div class="flex items-center justify-between gap-4">
            <div
              class="flex items-center justify-center flex-col text-imdb-gray-text"
            >
              <v-icon icon="mdi-pencil" />
              <span>Edit</span>
            </div>
            <div
              class="flex items-center justify-center flex-col text-imdb-gray-text"
            >
              <v-icon icon="mdi-share-variant" />
              <span>Share</span>
            </div>
          </div>
        </div>
        <div
          class="px-5 py-2 border-t border-b flex items-center justify-between gap-2 text-imdb-gray-text"
        >
          <div class="flex-1">
            <span>{{ watchlistStore.watchlist.length }} Titles</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center justify-center gap-2">
              <p>Sort by:</p>
              <select
                class="bg-white p-2 text-xs rounded-md outline-none cursor-pointer border"
              >
                <option value="List order">List order</option>
                <option value="Alphabetical">Alphabetical</option>
                <option value="Release date">Release date</option>
              </select>
            </div>
            <div class="cursor-pointer" @click="handleChangeDisplayMode">
              <v-icon
                icon="mdi-grid"
                title="Grid view"
                v-if="watchlistStore.displayMode == 'List'"
              />
              <v-icon icon="mdi-view-list" title="List view" v-else />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white p-5">
        <div
          v-if="!watchlistStore.isLoading"
          :class="
            watchlistStore.displayMode === 'Grid'
              ? 'grid grid-cols-2 md:grid-cols-6 gap-3'
              : ''
          "
        >
          <ListMovieItem
            v-if="watchlistStore.displayMode === 'List'"
            v-for="movie in watchlistStore.watchlist"
            :key="movie.id"
            class="mb-3"
            :movie="movie"
          />
          <GridMovieItem
            v-if="watchlistStore.displayMode === 'Grid'"
            v-for="movie in watchlistStore.watchlist"
            :key="movie.id"
            class="mb-3"
            :movie="movie"
          />
        </div>
        <Loader v-if="watchlistStore.isLoading" />
        <p
          class="text-center"
          v-if="
            watchlistStore.watchlist.length === 0 && !watchlistStore.isLoading
          "
        >
          Your watchlist is empty.
        </p>
      </div>
      <RecentlyViewed />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { useWatchlistStore } from "../../stores/watchlist";
import Loader from "./Loader/index.vue";
import ListMovieItem from "./ListMovieItem/index.vue";
import GridMovieItem from "./GridMovieItem/index.vue";
import RecentlyViewed from "@/components/RecentlyViewed/index.vue";

const watchlistStore = useWatchlistStore();

const handleChangeDisplayMode = () => {
  const mode = watchlistStore.displayMode === "Grid" ? "List" : "Grid";
  watchlistStore.setDispayMode(mode);
};

onMounted(() => {
  watchlistStore.fetchWatchList();
});
</script>
