<template>
  <main>
    <Trending />
    <WhatToWatch />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Trending from "./Trending/index.vue";
import WhatToWatch from "./WhatToWatch/index.vue";

export default defineComponent({
  components: {
    Trending,
    WhatToWatch,
  },
});
</script>
