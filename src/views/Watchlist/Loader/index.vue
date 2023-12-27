<template>
  <div
    class="flex items-center justify-between gap-2 mb-2"
    v-for="(loader, index) in loaders"
    :key="index"
  >
    <v-skeleton-loader type="image" class="w-[100px]" />
    <v-skeleton-loader type="article" class="flex-1" />
  </div>
</template>
<script setup lang="ts">
const loaders = new Array(5).fill(0);
</script>
