<template>
  <v-container>
    <div class="px-5 md:px-16">
      <div class="flex items-center justify-between">
        <router-link to="/">
          <svg
            class="ipc-logo drawer-logo"
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            height="56"
            viewBox="0 0 64 32"
            version="1.1"
          >
            <g fill="#F5C518">
              <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>
            </g>
            <g
              transform="translate(8.000000, 7.000000)"
              fill="#000000"
              fill-rule="nonzero"
            >
              <polygon points="0 18 5 18 5 0 0 0"></polygon>
              <path
                d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"
              ></path>
              <path
                d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"
              ></path>
              <path
                d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"
              ></path>
            </g>
          </svg>
        </router-link>
        <div
          @click="$emit('close-menu')"
          class="h-12 w-12 bg-[#F5C518] rounded-full hover:cursor-pointer flex items-center justify-center"
        >
          <v-icon icon="mdi-close" color="#121212" />
        </div>
      </div>
      <div class="mt-10">
        <v-row>
          <v-col md="4">
            <div class="flex items-start justify-between gap-4">
              <v-icon icon="mdi-filmstrip" size="large" color="#F5C518" />
              <div class="flex-1">
                <h3 class="text-2xl font-medium mb-1">Movies</h3>
                <ul class="m-0 p-0">
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Release Container</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Top 250 Calender Container</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Most popular movies</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Browse movies by genre</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Top box office</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >showtimes & tickets</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Movie News</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >India movie spotlight</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
          <v-col md="4">
            <div class="flex items-start justify-between gap-4">
              <v-icon icon="mdi-television" size="large" color="#F5C518" />
              <div class="flex-1">
                <h3 class="text-2xl font-medium mb-1">TV Shows</h3>
                <ul class="m-0 p-0">
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >What's on TV & streaming</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Top 250 TV shows</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Most popular TV shows</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Browse TV shows by genre</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >TV News</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex items-start justify-between gap-4 mt-4">
              <v-icon
                icon="mdi-play-box-multiple"
                size="large"
                color="#F5C518"
              />
              <div class="flex-1">
                <h3 class="text-2xl font-medium mb-1">Watch</h3>
                <ul class="m-0 p-0">
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >What to watch</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Latest Trailers</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >IMD Originals</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >IMDB picks</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >IMDB Podcasts</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
          <v-col md="4">
            <div class="flex items-start justify-between gap-4">
              <v-icon icon="mdi-star-circle" size="large" color="#F5C518" />
              <div class="flex-1">
                <h3 class="text-2xl font-medium mb-1">Awards & Events</h3>
                <ul class="m-0 p-0">
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Oscars</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Emmys</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Holiday Picks</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >MAMI</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >StarMeter Awards</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Awards Central</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Festival Central</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >All events</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col md="4">
            <div class="flex items-start justify-between gap-4">
              <v-icon
                icon="mdi-account-multiple"
                size="large"
                color="#F5C518"
              />
              <div class="flex-1">
                <h3 class="text-2xl font-medium mb-1">Celebs</h3>
                <ul class="m-0 p-0">
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Born to day</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Most popular Celebs</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Celebrity News</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
          <v-col md="4"></v-col>
          <v-col md="4">
            <div class="flex items-start justify-between gap-4">
              <v-icon icon="mdi-earth" size="large" color="#F5C518" />
              <div class="flex-1">
                <h3 class="text-2xl font-medium mb-1">Community</h3>
                <ul class="m-0 p-0">
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Help center</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Contributor Zone</router-link
                    >
                  </li>
                  <li class="py-1">
                    <router-link to="#" class="hover:underline capitalize block"
                      >Polls</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" setup></script>
