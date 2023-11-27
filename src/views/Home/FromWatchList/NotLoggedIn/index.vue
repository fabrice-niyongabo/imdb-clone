<template>
  <div class="flex items-center justify-center flex-col">
    <IMDBBookmarkIcon bg-color="#121212" height="40px" width="30px" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IMDBBookmarkIcon from "../../../../components/IMDBBookmarkIcon/index.vue";
export default defineComponent({
  components: { IMDBBookmarkIcon },
});
</script>
