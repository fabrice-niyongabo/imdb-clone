<template>
  <section class="bg-black py-5" ref="section">
    <div class="container mx-auto">
      <section-title title="From your Watchlist" href="#" class="my-10" />
      <IMDBLoader v-if="isLoading" />
      <NotLoggedIn />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "../../../components/SectionTitle/index.vue";
import IMDBLoader from "../../../components/IMDBLoader/index.vue";
import NotLoggedIn from "./NotLoggedIn/index.vue";
import type { ITopPickMovie } from "../../../interfaces";

interface IReturnData {
  isVisible: any;
  movies: ITopPickMovie[];
  isLoading: boolean;
}

export default defineComponent({
  components: {
    SectionTitle,
    IMDBLoader,
    NotLoggedIn,
  },
  data(): IReturnData {
    return {
      isLoading: false,
      isVisible: false,
      movies: [],
    };
  },
});
</script>
