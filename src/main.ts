import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

//icons
import "@mdi/font/css/materialdesignicons.css";

//toast
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";

//persit pinia state
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify);
// app.use(createPinia()); //without persistance
app.use(createPinia().use(piniaPluginPersistedState)); //with persistance
app.use(router);
app.use(ToastPlugin);

app.mount("#app");
