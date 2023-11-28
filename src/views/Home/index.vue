<template>
  <main>
    <Trending />
    <WhatToWatch />
    <FromWatchList />
    <Top10 />
    <FanFavourites />
    <Upcoming />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Trending from "./Trending/index.vue";
import WhatToWatch from "./WhatToWatch/index.vue";
import FromWatchList from "./FromWatchList/index.vue";
import Top10 from "./Top10/index.vue";
import FanFavourites from "./FanFavourites/index.vue";
import Upcoming from "./Upcoming/index.vue";

export default defineComponent({
  components: {
    Trending,
    WhatToWatch,
    FromWatchList,
    Top10,
    FanFavourites,
    Upcoming,
  },
});
</script>
