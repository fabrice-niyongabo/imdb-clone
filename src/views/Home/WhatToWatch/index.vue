<template>
  <section class="bg-black py-5">
    <v-container>
      <div class="flex items-start justify-between">
        <h1 class="capitalize text-imdb-gold text-2xl font-bold">
          What to watch
        </h1>
        <router-link to="#">
          <v-btn
            color="#000"
            class="!text-imdb-blue !normal-case hover:bg-imdb-light-black"
          >
            <span>Get more recommendations</span>
            <v-icon name="mdi-chevron-right" />
          </v-btn>
        </router-link>
      </div>
      <section-title
        title="Top picks"
        href="#"
        sub-title="TV shows and movies just for you"
        class="my-10"
      />
    </v-container>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "../../../components/SectionTitle/index.vue";

export default defineComponent({
  components: {
    SectionTitle,
  },
  data() {
    isVisible: false;
    movies: [];
  },
});
</script>
