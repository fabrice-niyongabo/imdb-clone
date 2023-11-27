<template>
  <div
    :class="`inline-block bg-[${bgColor}] h-[${height}] w-[${width}] hover:bg-[${hoverBg}] relative cursor-pointer`"
    style="
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
    "
  >
    <div
      class="absolute top-0 bottom-0 left-0 right-0 pb-2 flex items-center justify-center"
    >
      <v-icon icon="mdi-plus" size="small" />
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
  },
});
</script>
