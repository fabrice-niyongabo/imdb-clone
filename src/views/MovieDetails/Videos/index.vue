<template>
  <section>
    <SectionTitle
      :title="`Videos ${videos.length}`"
      href="#"
      :dark-icon="true"
    />
    <Carausel :videos="videos" class="mt-5" />
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "../../../components/SectionTitle/index.vue";
import type { IVideo } from "../../../interfaces";
import type { PropType } from "vue";

import Carausel from "./Caraousel/index.vue";

export default defineComponent({
  components: { SectionTitle, Carausel },
  props: { videos: { type: Array as PropType<IVideo[]>, required: true } },
});
</script>
