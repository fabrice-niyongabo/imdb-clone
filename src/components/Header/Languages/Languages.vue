<template>
  <v-btn
    rounded="0"
    variant="text"
    color="white"
    class="rounded-l-md !capitalize !p-0"
  >
    EN
    <v-icon v-if="showLanguages" icon="mdi-menu-up" size="x-large" />
    <v-icon v-if="!showLanguages" icon="mdi-menu-down" size="x-large" />

    <v-menu activator="parent">
      <v-list
        class="mt-3 !bg-[#121212]"
        @vue:before-unmount="handleLanguesMenuClick()"
        @vue:before-mount="handleLanguesMenuClick()"
      >
        <v-list-item>
          <v-list-item-title class="text-gray-200 !uppercase !text-xs"
            >fully supported
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item class="hover:bg-[#252525] !text-sm">
          <v-list-item-title
            class="text-gray-200 transition-all duration-100 hover:text-white !text-xs"
          >
            <div class="flex items-center justify-between gap-2">
              <v-icon icon="mdi-circle-double" color="#F5C518" />
              <span class="flex-1">EN</span>
            </div>
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-title class="text-gray-200 !text-xs !uppercase"
            >Partially supported
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item class="hover:bg-[#252525] !text-sm">
          <v-list-item-title class="text-gray-200 !text-xs">
            <div class="flex items-center justify-between gap-2">
              <v-icon icon="mdi-circle-outline" />
              <span class="flex-1">French</span>
            </div>
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="hover:bg-[#252525] !text-sm">
          <v-list-item-title class="text-gray-200 !text-xs">
            <div class="flex items-center justify-between gap-2">
              <v-icon icon="mdi-circle-outline" />
              <span class="flex-1">Kinyarwanda</span>
            </div>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface IReturnData {
  showLanguages: boolean;
}

export default defineComponent({
  data(): IReturnData {
    return {
      showLanguages: false,
    };
  },
  methods: {
    handleLanguesMenuClick() {
      this.showLanguages = !this.showLanguages;
    },
  },
});
</script>
