<template>
  <v-dialog width="500" v-model="props.showAlert" :persistent="true">
    <v-card title="Confirmation">
      <v-card-text>
        <p class="text-sm">{{ props.message }}</p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Not sure"
          @click="props.setShowAlert(false)"
          color="red"
          active
        />
        <v-btn
          text="Yeah, sure!"
          @click="
            props.setShowAlert(false);
            props.callbackFn();
          "
          color="blue"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  showAlert: {
    type: Boolean,
    required: true,
  },
  setShowAlert: {
    type: null,
    required: true,
  },
  callbackFn: {
    type: null,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
</script>
