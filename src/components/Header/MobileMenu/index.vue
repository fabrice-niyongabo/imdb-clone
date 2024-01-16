<template>
  <div>
    <v-btn
      elevation="0"
      color="#121212"
      class="hover:cursor-pointer hover:bg-[#252525]"
      @click="toggleShowMenu()"
    >
      <v-icon icon="mdi-menu" size="large" />
    </v-btn>
  </div>
  <div
    :class="[
      showMenu ? 'top-0' : '-top-full',
      'transition-all duration-500 fixed h-screen bg-[#121212] text-white py-5 left-0 right-0 z-10 overflow-auto',
    ]"
  >
    contents
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const showMenu = ref(false);

const toggleShowMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>
