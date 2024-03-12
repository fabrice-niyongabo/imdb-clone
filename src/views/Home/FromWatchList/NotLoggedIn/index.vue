<template>
  <div class="flex items-center justify-center flex-col">
    <RouterLink to="/login">
      <IMDBBookmarkIcon
        bg-color="#121212"
        height="40px"
        width="30px"
        :is-loading="false"
        :call-back-fn="null"
      />
    </RouterLink>
    <p class="mt-5 font-bold">Sign in to access your Watchlist</p>
    <p>Save shows and movies to keep track of what you want to watch.</p>
    <v-btn
      :elevation="0"
      class="mt-5 !normal-case !bg-imdb-black !text-imdb-blue !text-sm"
      >Sign in to IMDb Clone</v-btn
    >
  </div>
</template>

<script lang="ts" setup>
import IMDBBookmarkIcon from "../../../../components/IMDBBookmarkIcon/index.vue";
</script>
