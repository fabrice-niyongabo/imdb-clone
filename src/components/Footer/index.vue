<template>
  <footer class="bg-black pb-5 pt-2">
    <div class="container mx-auto">
      <div
        class="flex items-center justify-center"
        v-if="userStore.token.trim().length === 0"
      >
        <RouterLink to="/login">
          <v-btn class="!bg-imdb-gold !normal-case" :elevation="0"
            >Sign in for more access</v-btn
          >
        </RouterLink>
      </div>
      <div class="mt-10 flex items-center justify-center">
        <ul class="m-0 p-0 flex gap-5 md:gap-10">
          <li>
            <a href="#"><v-icon icon="mdi-instagram" /></a>
          </li>
          <li>
            <a href="#"><v-icon icon="mdi-twitter" /></a>
          </li>
          <li>
            <a href="#"><v-icon icon="mdi-youtube" /></a>
          </li>
          <li>
            <a href="#"><v-icon icon="mdi-facebook" /></a>
          </li>
        </ul>
      </div>
    </div>
    <p class="text-center pt-5 text-sm text-gray-300">
      &copy;2023 <a href="mailto:ninga.fab@gmail.com">ninga.fab@gmail.com</a>
    </p>
  </footer>
</template>
<script lang="ts" setup>
import { useUserStore } from "@/stores/user";
import { RouterLink } from "vue-router";
const userStore = useUserStore();
</script>
