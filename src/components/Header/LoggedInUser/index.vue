<template>
  <v-btn
    rounded="0"
    variant="text"
    color="white"
    class="rounded-l-md !capitalize !py-0"
  >
    <div class="flex items-center justify-center gap-1">
      <v-icon icon="mdi-account-circle" size="large" />
      <span> {{ userStore.userDetails.names.split(" ")[0] }}</span>
      <span>
        <v-icon v-if="showLanguages" icon="mdi-menu-up" size="x-large" />
        <v-icon v-if="!showLanguages" icon="mdi-menu-down" size="x-large" />
      </span>
    </div>

    <v-menu activator="parent">
      <v-list
        class="mt-3 !bg-[#121212]"
        @vue:before-unmount="handleMenuClick()"
        @vue:before-mount="handleMenuClick()"
      >
        <v-list-item @click="router.push('#')">
          <v-list-item-title
            class="text-gray-200 !capitalize !text-xs cursor-pointer hover:text-imdb-gold"
          >
            Your activity
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item @click="router.push('/watchlist')">
          <v-list-item-title
            class="text-gray-200 !capitalize !text-xs cursor-pointer hover:text-imdb-gold"
          >
            Your watchlist
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-title
            class="text-gray-200 !capitalize !text-xs cursor-pointer hover:text-imdb-gold"
          >
            Your ratings
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item>
          <v-list-item-title
            class="text-gray-200 !capitalize !text-xs cursor-pointer hover:text-imdb-gold"
          >
            Account settings
          </v-list-item-title>
        </v-list-item>
        <v-divider />
        <v-list-item @click="setShowAlert(true)">
          <v-list-item-title
            class="text-gray-200 !capitalize !text-xs cursor-pointer hover:text-imdb-gold"
          >
            Sign out
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>

  <Confirmation
    :show-alert="showAlert"
    :set-show-alert="setShowAlert"
    message="Do you want to sign out now?"
    :callback-fn="handleSignout"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../../stores/user";

import Confirmation from "../../Confirmation/index.vue";
//user store
const userStore = useUserStore();
const router = useRouter();

//state
const showLanguages = ref(false);
const showAlert = ref(false);

const setShowAlert = (value: boolean) => {
  showAlert.value = value;
};

const handleMenuClick = () => {
  showLanguages.value = !showLanguages.value;
};

const handleSignout = () => {
  userStore.resetUser();
  router.replace("/login");
};
</script>
