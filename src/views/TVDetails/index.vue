<template>
  <Details :details="tvDetails" />
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import type { ITVDetails } from "../../interfaces";
import { API_TOKEN } from "@/constants";
import Details from "./Details/index.vue";
import { useRecentlyViewedStore } from "@/stores/recentlyViewed";

interface IReturnData {
  tvDetails: ITVDetails | null;
  isLoading: boolean;
  isLoadingVideos: boolean;
}

export default defineComponent({
  components: {
    Details,
  },
  data(): IReturnData {
    return {
      tvDetails: null,
      isLoading: true,
      isLoadingVideos: true,
    };
  },
  methods: {
    fetchDetails() {
      this.isLoading = true;
      axios
        .get(
          "https://api.themoviedb.org/3/tv/" +
            this.$route.params.id +
            "?language=en-US",
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        )
        .then((res) => {
          this.isLoading = false;
          this.tvDetails = res.data;
          this.fetchVideos();
        })
        .catch((error) => {
          this.isLoading = false;
          console.log({ error });
        });
    },
    fetchVideos() {
      this.isLoadingVideos = true;
      axios
        .get(
          "http://api.themoviedb.org/3/tv/" + this.$route.params.id + "/videos",
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        )
        .then((res) => {
          this.isLoadingVideos = false;
          console.log({ videos: res.data });
        })
        .catch((error) => {
          this.isLoading = false;
          console.log({ error });
        });
    },
  },
  mounted() {
    this.fetchDetails();
  },
  watch: {
    tvDetails() {
      if (this.tvDetails) {
        const recentlyViewedStore = useRecentlyViewedStore();
        recentlyViewedStore.addToRecentlyViewed({
          movieType: "tv",
          movieId: this.tvDetails.id,
          poster_path: this.tvDetails.poster_path,
          title: this.tvDetails.name,
        });
      }
    },
  },
});
</script>
