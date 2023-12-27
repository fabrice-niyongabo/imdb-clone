import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/index.vue";
import MovieDetails from "../views/MovieDetails/index.vue";
import TVDetails from "../views/TVDetails/index.vue";
import Find from "../views/Find/index.vue";
import Login from "../views/Login/index.vue";
import Register from "../views/Register/index.vue";
import TopPicks from "../views/TopPicks/index.vue";
import Fan from "../views/Fan/index.vue";
import Upcoming from "../views/Upcoming/index.vue";
import ImdbLogin from "../views/ImdbLogin/index.vue";
import Watchlist from "../views/Watchlist/index.vue";

import { useUserStore } from "../stores/user";

//here we dont have access to pinia
//because it is not finished being initialized
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
    {
      path: "/find",
      name: "find",
      component: Find,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: (to, from, next) => {
        //user store => here we have access to the store bcz pinia has loaded
        const userStore = useUserStore();
        if (userStore.token.trim() !== "") {
          next({ name: "home" }); // go to home page if we are already logged in
        } else {
          next(); // continue to login page
        }
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      beforeEnter: (_, __, next) => {
        //user store => here we have access to the store bcz pinia has loaded
        const userStore = useUserStore();
        if (userStore.token.trim() !== "") {
          next({ name: "home" });
        } else {
          next();
        }
      },
    },
    {
      path: "/toppicks",
      name: "toppicks",
      component: TopPicks,
    },
    {
      path: "/fan",
      name: "fan",
      component: Fan,
    },
    {
      path: "/upcoming",
      name: "upcoming",
      component: Upcoming,
    },
    {
      path: "/imdb-login",
      name: "imdb-login",
      component: ImdbLogin,
      beforeEnter: (_, __, next) => {
        //user store => here we have access to the store bcz pinia has loaded
        const userStore = useUserStore();
        if (userStore.token.trim() !== "") {
          next({ name: "home" });
        } else {
          next();
        }
      },
    },
    {
      path: "/watchlist",
      name: "watchlist",
      component: Watchlist,
      beforeEnter: (_, __, next) => {
        const userStore = useUserStore();
        if (userStore.token.trim() === "") {
          next({ name: "login" });
        } else {
          next();
        }
      },
    },
  ],
});

export default router;
