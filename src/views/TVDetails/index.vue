<template>
  <Details :details="tvDetails" />
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import type { ITVDetails } from "../../interfaces";
import { API_TOKEN } from "@/constants";
import Details from "./Details/index.vue";

interface IReturnData {
  tvDetails: ITVDetails | null;
  isLoading: boolean;
}

export default defineComponent({
  components: {
    Details,
  },
  data(): IReturnData {
    return {
      tvDetails: null,
      isLoading: true,
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
});
</script>
