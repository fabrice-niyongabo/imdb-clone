<template>
  <div class="flex items-center justify-between flex-1">
    <div class="h-[30px] bg-white border-r rounded-l-md">
      <v-btn
        height="30"
        rounded="0"
        variant="text"
        class="rounded-l-md !capitalize"
      >
        {{ selectedFilterCategory.label }}
        <v-icon v-if="showCategories" icon="mdi-menu-up" size="x-large" />
        <v-icon v-if="!showCategories" icon="mdi-menu-down" size="x-large" />

        <v-menu activator="parent">
          <v-list
            class="mt-3 !bg-[#121212]"
            @vnode-before-unmount="handleMenuClick()"
            @vnode-before-mount="handleMenuClick()"
          >
            <v-list-item
              v-for="(item, index) in filterCategories"
              :key="index"
              :value="item.value"
              class="hover:bg-[#252525]"
            >
              <v-list-item-title
                @click="handleChangeFilter(item)"
                :class="[
                  item.value === selectedFilterCategory.value
                    ? 'text-[#F5C518]'
                    : 'text-gray-200',
                  'transition-all duration-100 hover:text-white',
                ]"
              >
                <div class="flex items-center justify-between gap-2">
                  <v-icon :icon="item.icon" />
                  <span class="flex-1">{{ item.label }}</span>
                </div>
              </v-list-item-title>
            </v-list-item>
            <v-divider />
            <v-list-item class="hover:bg-[#252525]">
              <v-list-item-title
                class="text-gray-200 transition-all duration-100 hover:text-white"
              >
                <div class="flex items-center justify-between gap-2">
                  <v-icon icon="mdi-magnify-expand" />
                  <span class="flex-1">Advanced search</span>
                  <v-icon icon="mdi-chevron-right" />
                </div>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </div>
    <input
      type="text"
      placeholder="Search IMDB"
      class="w-full bg-white h-[30px] outline-none px-3 text-sm"
    />

    <div
      class="flex items-center justify-center bg-white h-[30px] pr-2 rounded-r-md hover:cursor-pointer"
    >
      <v-icon icon="mdi-magnify" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface IFilterCategory {
  label: string;
  value: string;
  icon: string;
}

interface IReturnData {
  filterCategories: IFilterCategory[];
  selectedFilterCategory: IFilterCategory;
  showCategories: boolean;
}

const filterCategories: IFilterCategory[] = [
  {
    icon: "mdi-magnify",
    label: "All",
    value: "",
  },
  {
    icon: "mdi-filmstrip",
    label: "Titles",
    value: "Titles",
  },
  {
    icon: "mdi-television",
    label: "Tv Episodes",
    value: "Tv Episodes",
  },
  {
    icon: "mdi-account-multiple",
    label: "Celebs",
    value: "Celebs",
  },
  {
    icon: "mdi-domain",
    label: "Companies",
    value: "Companies",
  },
  {
    icon: "mdi-tag",
    label: "Keywords",
    value: "Keywords",
  },
];

export default defineComponent({
  data(): IReturnData {
    return {
      filterCategories,
      selectedFilterCategory: {
        icon: "mdi-magnify",
        label: "All",
        value: "",
      },
      showCategories: false,
    };
  },
  methods: {
    handleChangeFilter(filter: IFilterCategory) {
      this.selectedFilterCategory = filter;
    },
    handleMenuClick() {
      this.showCategories = !this.showCategories;
    },
  },
});
</script>
