<template>
  <div class="flex items-center justify-start gap-2">
    <div class="w-4 bg-[#F5C518]">&nbsp;</div>
    <h2>{{ title }}</h2>
    <v-icon icon="mdi-chevron-right" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: { type: String, required: true },
    href: { type: String, required: true },
  },
});
</script>
