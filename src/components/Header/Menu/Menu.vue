<template>
  <div>
    <v-btn
      elevation="0"
      color="#121212"
      class="hover:cursor-pointer hover:bg-[#252525]"
      @click="toggleShowMenu()"
    >
      <v-icon icon="mdi-menu" size="large" />
      <span class="capitalize">Menu</span>
    </v-btn>
  </div>
  <div
    :class="[
      showMenu ? 'top-0' : '-top-full',
      'transition-all duration-500 fixed h-screen bg-[#121212] text-white py-5 left-0 right-0 z-10 overflow-auto',
    ]"
  >
    <MenuContents @close-menu="toggleShowMenu()" />
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
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    },
  },
});
</script>
