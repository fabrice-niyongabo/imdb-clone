<template>
  <div
    :title="
      isFavourite
        ? 'Click to remove from favourite'
        : 'Click to add to favourite'
    "
    class="inline-block relative cursor-pointer"
    :style="`
      clip-path: polygon(
        0 0,
        0% 20%,
        0 53%,
        0 100%,
        0 100%,
        50% 76%,
        100% 100%,
        100% 100%,
        100% 58%,
        100% 0,
        80% 0%,
        41% 0
      );
    background-color: ${
      isHovered
        ? isFavourite
          ? favouriteHoverBg
          : hoverBg
          ? hoverBg
          : bgColor
        : isFavourite
        ? favoriteBgColor
        : bgColor
    };  
    height:${height};
    width:${width}`"
    @mouseover="onMouseOver()"
    @mouseout="onMouseOut()"
    @click="
      !isLoading
        ? addToWatchlist || removeFromWachList
          ? !isFavourite
            ? addToWatchlist
              ? addToWatchlist()
              : null
            : removeFromWachList
            ? removeFromWachList()
            : null
          : null
        : null
    "
  >
    <div
      class="absolute top-0 bottom-0 left-0 right-0 pb-2 flex items-center justify-center"
    >
      <v-icon
        icon="mdi-dots-circle"
        size="small"
        class="text-white rotate-icon"
        v-if="isLoading"
      />
      <span v-else>
        <v-icon icon="mdi-plus" size="small" v-if="!isFavourite" />
        <v-icon icon="mdi-check-bold" color="white" size="small" v-else />
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, ref } from "vue";
defineProps({
  width: { type: String, required: true },
  height: { type: String, required: true },
  bgColor: { type: String, required: true },
  hoverBg: { type: String },
  favoriteBgColor: { type: String, default: "#94c34d" },
  favouriteHoverBg: { type: String, default: "#b1e967" },
  isLoading: { type: Boolean, default: false },
  addToWatchlist: { type: null, default: undefined },
  removeFromWachList: { type: null, default: undefined },
  isFavourite: { type: Boolean, default: false },
});

//state
const isHovered = ref(false);

const onMouseOver = () => {
  isHovered.value = true;
};
const onMouseOut = () => {
  isHovered.value = false;
};
</script>
<style>
.rotate-icon {
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
