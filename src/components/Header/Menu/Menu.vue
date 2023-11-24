<template>
  <div>
    <v-btn
      elevation="0"
      color="#121212"
      class="hover:cursor-pointer hover:bg-[#252525]"
    >
      <v-icon icon="mdi-menu" size="large" />
      <span class="capitalize">Menu</span>
    </v-btn>
  </div>
  <div
    class="fixed bg-[#121212] text-white py-5 h-screen top-0 left-0 right-0 z-10 overflow-auto"
  >
    <MenuContents />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuContents from "./MenuContents/MenuContents.vue";

export default defineComponent({
  components: {
    MenuContents,
  },
  data() {
    return {};
  },
});
</script>
