<template>
  <div class="mt-5">
    <h2 class="text-2xl font-semibold mb-3">Images</h2>
    <v-row>
      <v-col
        v-for="(image, key) in images.slice(0, 9)"
        :key="key"
        sm="6"
        md="4"
      >
        <img
          :src="IMDB_BASE_IMAGE_PATH + image.file_path"
          class="img w-full rounded-md transition-all duration-500 shadow-md"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { IImage } from "../../../interfaces";
import { IMDB_BASE_IMAGE_PATH } from "../../../constants";
export default defineComponent({
  props: {
    images: {
      type: Array as PropType<IImage[]>,
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
<style scoped>
.img:hover {
  transform: scale(2);
  cursor: pointer;
}
</style>
