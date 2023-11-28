<template>
  <section
    class="bg-black p-5"
    style="
      background: linear-gradient(
        90deg,
        rgb(31, 31, 31),
        20%,
        rgba(31, 31, 31, 0.6),
        80%,
        rgb(31, 31, 31)
      );
    "
  >
    <div class="container mx-auto">
      <div class="flex items-start justify-between gap-2">
        <div>
          <h2 class="text-4xl font-medium">{{ details?.original_name }}</h2>
        </div>
      </div>
      <div class="flex items-end justify-between gap-1 mt-2 bg-gray-900">
        <div>
          <img
            :src="IMDB_BASE_IMAGE_PATH + details?.poster_path"
            :alt="details?.name"
            class="w-[210px] h-[300px]"
          />
        </div>
        <div class="flex-1"></div>
        <div class="h-full bg-red-800">
          <div
            class="flex flex-col gap-1 justify-between items-center w-[150px]"
          >
            <div
              class="bg-imdb-light-black p-5 flex items-center justify-center flex-1 flex-col w-full"
            >
              <v-icon icon="mdi-play-box-multiple" />
              <p class="mt-2 uppercase text-xs font-semibold">1 video</p>
            </div>
            <div
              class="bg-imdb-light-black p-5 flex items-center justify-center flex-1 flex-col w-full"
            >
              <v-icon icon="mdi-image-multiple" />
              <p class="mt-2 uppercase text-xs font-semibold">1 Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { IMDB_BASE_IMAGE_PATH } from "../../../constants";

import type { ITVDetails } from "../../../interfaces";

export default defineComponent({
  props: {
    details: {
      type: Object as PropType<ITVDetails | null>,
      required: true,
    },
  },
  data() {
    return {
      IMDB_BASE_IMAGE_PATH,
    };
  },
});
</script>
