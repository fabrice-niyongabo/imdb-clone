<template>
  <li
    :class="[isVisible ? 'visible' : 'hidden', 'my-2 hover:cursor-pointer']"
    @mouseover="onMouseOver()"
    @mouseout="onMouseOut()"
  >
    <div class="flex items-start justify-between gap-2">
      <img
        :src="IMDB_BASE_IMAGE_PATH + movie.poster_path"
        width="100"
        height="150"
        :alt="movie.title"
      />
      <div class="flex-1">
        <div class="mb-1">
          <v-icon
            icon="mdi-play-circle-outline"
            size="x-large"
            :class="isHovered ? 'text-[#F5C518]' : 'text-white'"
          />
        </div>
        <h3>{{ movie.title }}</h3>
        <p class="line-clamp-1 text-gray-400">{{ movie.overview }}</p>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ITrendingMovie } from "../../../../../interfaces";
import { IMDB_BASE_IMAGE_PATH } from "../../../../../constants";
import type { PropType } from "vue";
export default defineComponent({
  props: {
    movie: {
      type: Object as PropType<ITrendingMovie>,
      required: true,
    },
    activeMovieIndex: { type: Number, required: true },
    index: { type: Number, required: true },
    totalMovies: { type: Number, required: true },
  },
  data() {
    return {
      IMDB_BASE_IMAGE_PATH,
      isHovered: false,
      isVisible: false,
    };
  },
  methods: {
    onMouseOut() {
      this.isHovered = false;
    },
    onMouseOver() {
      this.isHovered = true;
    },
    returnVisibleIndexes() {
      const nextRound = this.activeMovieIndex + 3;
      if (nextRound < this.totalMovies - 1) {
        const res = [];
        for (let i = this.activeMovieIndex + 1; i <= nextRound; i++) {
          res.push(i);
        }
        return res;
      } else {
        const res = [];
        const extra = nextRound - (this.totalMovies - 1);
        const realRound = nextRound - extra;

        //fill in prev movies
        for (let i = this.activeMovieIndex - extra; i <= extra; i--) {
          res.push(i);
        }

        //remaining
        for (let i = this.activeMovieIndex + 1; i <= realRound; i++) {
          res.push(i);
        }

        return res;
      }
    },
  },
  mounted() {
    if (this.index <= 3 && this.index !== 0) {
      this.isVisible = true;
    }
  },
  watch: {
    activeMovieIndex() {
      const visibleList = this.returnVisibleIndexes();
      if (visibleList.includes(this.index)) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    },
  },
});
</script>
