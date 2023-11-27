<template>
  <main>
    <Trending />
    <WhatToWatch />
    <FromWatchList />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Trending from "./Trending/index.vue";
import WhatToWatch from "./WhatToWatch/index.vue";
import FromWatchList from "./FromWatchList/index.vue";

export default defineComponent({
  components: {
    Trending,
    WhatToWatch,
    FromWatchList,
  },
});
</script>
