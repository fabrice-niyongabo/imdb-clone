<template>
  <div class="bg-imdb-black">
    <img
      :src="IMDB_BASE_IMAGE_PATH + movie.backdrop_path"
      :alt="movie.name"
      class="h-[200px] w-full"
    />
    <div class="p-3 flex items-start justify-between gap-2">
      <IMDBBookmarkIcon
        bg-color="#252525"
        hover-bg="#000"
        height="40px"
        width="30px"
      />
      <div class="flex-1">
        <p>
          {{
            new Date(movie.release_date).toLocaleString("en-US", {
              month: "short",
            })
          }}
          {{ new Date(movie.release_date).getDay() }}
        </p>
        <h3 class="line-clamp-1" :title="movie.name">{{ movie.title }}</h3>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { IUpcomingMovies } from "../../../../../interfaces";
import { IMDB_BASE_IMAGE_PATH } from "../../../../../constants";
import SectionTitle from "../../../../../components/SectionTitle/index.vue";
import IMDBBookmarkIcon from "../../../../../components/IMDBBookmarkIcon/index.vue";
export default defineComponent({
  props: {
    movie: { type: Object as PropType<IUpcomingMovies>, required: true },
  },
  components: { SectionTitle, IMDBBookmarkIcon },
  data() {
    return {
      IMDB_BASE_IMAGE_PATH,
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
});
</script>
