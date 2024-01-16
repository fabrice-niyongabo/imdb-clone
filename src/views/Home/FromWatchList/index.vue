<template>
  <section class="bg-black py-5 min-h-[50vh]" ref="section">
    <div class="container mx-auto">
      <section-title
        title="From your Watchlist"
        href="/watchlist"
        class="my-10"
      />
      <IMDBLoader
        v-if="watchlistStore.isLoading && watchlistStore.watchlist.length === 0"
      />
      <NotLoggedIn v-if="userStore.token.trim() === ''" />
      <div v-else>
        <div
          v-if="
            !watchlistStore.isLoading && watchlistStore.watchlist.length === 0
          "
          class="flex items-center justify-center flex-col gap-2 text-imdb-gray-text"
        >
          <v-icon icon="mdi-flask-empty-off-outline" />
          <p>Your watchlist is empty!</p>
        </div>
        <Carausel :movies="watchlistStore.watchlist" v-else />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "../../../components/SectionTitle/index.vue";
import IMDBLoader from "../../../components/IMDBLoader/index.vue";
import NotLoggedIn from "./NotLoggedIn/index.vue";
import type { ITopPickMovie, IUserStore } from "../../../interfaces";
import { useUserStore } from "@/stores/user";
import { useWatchlistStore } from "@/stores/watchlist";
import type { IWachilstStore } from "@/stores/watchlist";
import { useElementVisibility } from "@vueuse/core";
import Carausel from "./Caraousel/index.vue";

interface IReturnData {
  isVisible: any;
  movies: ITopPickMovie[];
  userStore: IUserStore;
  watchlistStore: IWachilstStore;
}

export default defineComponent({
  components: {
    SectionTitle,
    IMDBLoader,
    NotLoggedIn,
    Carausel,
  },
  data(): IReturnData {
    return {
      isVisible: false,
      movies: [],
      userStore: useUserStore(),
      watchlistStore: useWatchlistStore(),
    };
  },
  mounted() {
    this.isVisible = useElementVisibility(this.$refs.section as any);
  },
  watch: {
    isVisible() {
      if (
        this.isVisible &&
        this.userStore.token.trim().length > 0 &&
        this.movies.length === 0
      ) {
        const store = useWatchlistStore();
        store.fetchWatchList();
      }
    },
  },
});
</script>
