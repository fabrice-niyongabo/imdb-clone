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
      <div v-if="details">
        <div class="flex items-start justify-between gap-2">
          <div>
            <h2 class="text-4xl font-medium">{{ details?.title }}</h2>
            <p class="text-gray-300 text-sm">{{ details?.release_date }}</p>
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
        <div class="flex items-start justify-between gap-4 mt-5 h-[320px]">
          <div>
            <img
              :src="IMDB_BASE_IMAGE_PATH + details?.poster_path"
              :alt="details?.title"
              class="w-[250px] h-[320px]"
            />
          </div>
          <div class="flex-1">
            <div v-if="!isLoadingVideo && videos.length > 0">
              <iframe
                width="100%"
                height="320"
                :src="`https://www.youtube.com/embed/${videos[0].key}`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div
            class="flex flex-col gap-1 justify-between items-center w-[150px] h-full"
          >
            <div
              class="bg-imdb-light-black p-5 flex items-center justify-center flex-1 flex-col w-full"
            >
              <v-icon icon="mdi-play-box-multiple" />
              <p class="mt-2 uppercase text-xs font-semibold">
                {{ videos.length }} video
              </p>
            </div>
            <div
              class="bg-imdb-light-black p-5 flex items-center justify-center flex-1 flex-col w-full"
            >
              <v-icon icon="mdi-image-multiple" />
              <p class="mt-2 uppercase text-xs font-semibold">
                {{ images.length }} Photos
              </p>
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
                <span>Spoken Language(s)</span>
                <div>
                  <span
                    v-for="(language, index) in details?.spoken_languages"
                    :key="language.name"
                    class="text-imdb-blue px-1"
                    >{{ language.name
                    }}<span
                      v-if="
                        details?.spoken_languages &&
                        index !== details?.spoken_languages.length - 1
                      "
                      >,</span
                    >
                  </span>
                </div>
              </li>
              <li
                class="border-t-[1px] border-gray-300 font-bold py-2 flex items-start justify-start gap-2"
              >
                <span>Production Companies</span>
                <div>
                  <span
                    v-for="(company, index) in details?.production_companies"
                    :key="company.id"
                    class="text-imdb-blue p-1"
                    >{{ company.name
                    }}<span
                      v-if="
                        details?.production_companies &&
                        index !== details?.production_companies.length - 1
                      "
                      >,</span
                    >
                  </span>
                </div>
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
                <span>Budget:</span>
                <span class="text-imdb-blue">{{ details?.budget }} </span>
              </li>
            </ul>
          </div>
          <div class="w-[40%]">
            <div
              class="bg-imdb-gold flex items-center justify-between gap-2 rounded-sm px-2 py-2 hover:opacity-80 hover:cursor-pointer select-none"
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
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { IMDB_BASE_IMAGE_PATH } from "../../../constants";

import type { IMovieDetails, IVideo, IImage } from "../../../interfaces";

export default defineComponent({
  props: {
    details: {
      type: Object as PropType<IMovieDetails | null>,
      required: true,
    },
    videos: { type: Array as PropType<IVideo[]>, required: true },
    images: { type: Array as PropType<IImage[]>, required: true },
    isLoadingVideo: { type: Boolean, required: true },
    isLoading: { type: Boolean, required: true },
  },
  data() {
    return {
      IMDB_BASE_IMAGE_PATH,
    };
  },
});
</script>
