<template>
  <router-link :to="href" class="block">
    <div
      class="inline-flex items-center justify-between gap-2 hover:cursor-pointer"
      @mouseover="onMouseOver()"
      @mouseout="onMouseOut()"
    >
      <div class="w-1 rounded-md bg-[#F5C518]" v-if="showLeftBar">&nbsp;</div>
      <h2 class="text-xl font-bold m-0 p-0">{{ title }}</h2>
      <v-icon
        v-if="showIcon"
        icon="mdi-chevron-right"
        :class="
          isHovered
            ? 'text-imdb-gold'
            : `${darkIcon ? 'text-black' : 'text-white'}`
        "
        size="x-large"
      />
    </div>
    <p class="text-gray-400">{{ subTitle }}</p>
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: { type: String, required: true },
    subTitle: { type: String },
    showLeftBar: { type: Boolean, default: true },
    showIcon: { type: Boolean, default: true },
    darkIcon: { type: Boolean, default: false },
    href: { type: String, required: true },
  },
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    onMouseOver() {
      this.isHovered = true;
    },
    onMouseOut() {
      this.isHovered = false;
    },
  },
});
</script>
