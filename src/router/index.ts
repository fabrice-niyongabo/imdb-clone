import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/index.vue";
import MovieDetails from "../views/MovieDetails/index.vue";
import TVDetails from "../views/TVDetails/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/movie/:id",
      name: "movieDetails",
      component: MovieDetails,
    },
    {
      path: "/tv/:id",
      name: "tvDetails",
      component: TVDetails,
    },
  ],
});

export default router;
