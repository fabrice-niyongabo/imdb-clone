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
          <p class="text-gray-300 text-sm">{{ details?.last_air_date }}</p>
        </div>
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-center justify-center flex-col">
            <p class="text-sm font-bold text-gray-200">IMDb RATING</p>
            <div>
              <v-icon icon="mdi-star" class="text-imdb-gold" />
              <span class="text-sm ml-1"
                ><b>{{ details?.vote_average }}</b
                >/{{ details?.vote_count }}</span
              >
            </div>
          </div>
          <div class="flex items-center justify-center flex-col">
            <p class="text-sm font-bold text-gray-200">YOUR RATING</p>
            <v-btn
              variant="text"
              prepend-icon="mdi-star-outline"
              class="!normal-case text-sm !text-imdb-blue"
            >
              Rate</v-btn
            >
          </div>
          <div class="flex items-center justify-center flex-col">
            <p class="text-sm font-bold text-gray-200">POPULARITY</p>
            <div>
              <v-icon
                icon="mdi-access-point"
                size="x-large"
                class="text-[#67ad4b]"
              />
              <span class="text-sm ml-1">{{ details?.popularity }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-start justify-between gap-1 mt-5 h-[300px]">
        <div>
          <img
            :src="IMDB_BASE_IMAGE_PATH + details?.poster_path"
            :alt="details?.name"
            class="w-[210px] h-[300px]"
          />
        </div>
        <div class="flex-1"></div>
        <div
          class="flex flex-col gap-1 justify-between items-center w-[150px] h-full"
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
      <div class="flex items-center justify-between gap-8 mt-3">
        <div class="flex-1">
          <div class="flex items-start justify-start gap-2">
            <div
              v-for="genre in details?.genres"
              :key="genre.id"
              class="inline-block py-[2px] px-3 border-gray-300 border-[1px] rounded-full"
            >
              <span class="text-sm font-semibold">{{ genre.name }}</span>
            </div>
          </div>
          <p class="my-3">{{ details?.overview }}</p>
          <ul>
            <li
              class="border-t-[1px] border-gray-300 font-bold py-2 flex items-start justify-start gap-2"
            >
              <span>Language</span>
              <span
                v-for="language in details?.languages"
                :key="language"
                class="text-imdb-blue"
                >{{ language }}
              </span>
            </li>
            <li
              class="border-t-[1px] border-gray-300 font-bold py-2 flex items-start justify-start gap-2"
            >
              <span>Production Companies</span>
              <span
                v-for="company in details?.production_companies"
                :key="company.id"
                class="text-imdb-blue"
                >{{ company.name }}
              </span>
            </li>

            <li
              class="border-t-[1px] border-gray-300 font-bold py-2 flex items-start justify-start gap-2"
            >
              <span>Status</span>
              <span class="text-imdb-blue">{{ details?.status }} </span>
            </li>
            <li
              class="border-t-[1px] border-gray-300 font-bold py-2 flex items-start justify-start gap-2"
            >
              <span>Number of seasons:</span>
              <span class="text-imdb-blue">{{ details?.seasons.length }} </span>
            </li>
          </ul>
        </div>
        <div class="w-[40%]">
          <div
            class="bg-imdb-gold flex items-center justify-between gap-2 rounded-sm px-2 py-2 hover:opacity-80 hover:cursor-pointer"
          >
            <div>
              <v-icon icon="mdi-plus" class="text-black" />
            </div>
            <div class="flex-1">
              <p class="text-black text-xs p-0 m-0">Add to Watchlist</p>
              <p class="text-xs text-gray-500 p-0 m-0">
                Added by {{ details?.popularity }} users
              </p>
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
