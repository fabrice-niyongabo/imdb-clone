<template>
  <main>
    <Trending />
    <WhatToWatch />
    <FromWatchList />
    <Top10 />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Trending from "./Trending/index.vue";
import WhatToWatch from "./WhatToWatch/index.vue";
import FromWatchList from "./FromWatchList/index.vue";
import Top10 from "./Top10/index.vue";

export default defineComponent({
  components: {
    Trending,
    WhatToWatch,
    FromWatchList,
    Top10,
  },
});
</script>
