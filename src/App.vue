<template>
  <!-- <header>
    <div class="wrapper"> 
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->


  <Header />

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router' 
import Header from './components/Header/Header.vue'
</script>

<style scoped>
 
</style>
