<template>
  <div
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
    background-color: ${isHovered && hoverBg ? hoverBg : bgColor}; 
    height:${height};
    width:${width}`"
    @mouseover="onMouseOver()"
    @mouseout="onMouseOut()"
    @click="!isLoading ? callBackFn() : null"
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
      <v-icon icon="mdi-check-bold" size="small" class="text-white" v-else />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    width: { type: String, required: true },
    height: { type: String, required: true },
    bgColor: { type: String, required: true },
    hoverBg: { type: String },
    isLoading: { type: Boolean, required: true },
    callBackFn: { type: null, required: true },
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
