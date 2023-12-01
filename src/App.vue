<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
</script>
