<template></template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      trendingMovies: [],
      isLoading: false,
    };
  },
  methods: {
    fetchData() {
      this.isLoading = true;
    },
  },
});
</script>
