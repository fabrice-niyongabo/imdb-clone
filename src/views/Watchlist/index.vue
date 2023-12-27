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
            <v-icon icon="mdi-grid" title="Grid view" class="cursor-pointer" />
          </div>
        </div>
      </div>
      <div class="bg-white p-5">
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
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { useWatchlistStore } from "../../stores/watchlist";
import Loader from "./Loader/index.vue";

const watchlistStore = useWatchlistStore();

onMounted(() => {
  watchlistStore.fetchWatchList();
});
</script>
