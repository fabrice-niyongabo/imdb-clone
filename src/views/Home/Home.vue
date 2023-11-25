<template>
  <main>
    <Trending />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Trending from "./Trending/index.vue";

export default defineComponent({
  components: {
    Trending,
  },
});
</script>
