<template>
  <div class="container mx-auto">
    <div class="flex items-center justify-center flex-col py-10">
      <RouterLink to="/">
        <svg
          id="home_img"
          class="ipc-logo"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="32"
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
      </RouterLink>
      <div class="mt-5 border p-5 rounded-md w-[80%] md:w-[35%]">
        <div v-if="!isAccountCreated">
          <h2 class="text-2xl font-semibold mb-5">Create Account</h2>
          <form @submit.prevent="handleSignUp">
            <div class="my-2">
              <label class="font-semibold text-sm">Full Name</label>
              <input
                ref="names"
                type="text"
                :disabled="isSubmitting"
                v-model="state.names"
                placeholder="Enter your name"
                class="border rounded-md outline-none w-full block p-2 text-xs focus:!border-imdb-gold transition-all duration-500 disabled:bg-gray-100"
              />
              <span v-if="errors.names !== ''" class="text-xs text-red-500">{{
                errors.names
              }}</span>
            </div>
            <div class="my-2">
              <label class="font-semibold text-sm">Email</label>
              <input
                type="text"
                ref="email"
                :disabled="isSubmitting"
                v-model="state.email"
                placeholder="Enter your email"
                class="border rounded-md outline-none w-full block p-2 text-xs focus:!border-imdb-gold transition-all duration-500 disabled:bg-gray-100"
              />
              <span v-if="errors.email !== ''" class="text-xs text-red-500">{{
                errors.email
              }}</span>
            </div>
            <div class="my-2">
              <label class="font-semibold text-sm">Password </label>
              <input
                type="password"
                ref="password"
                :disabled="isSubmitting"
                v-model="state.password"
                placeholder="Enter your password"
                class="border rounded-md outline-none w-full block p-2 text-xs focus:!border-imdb-gold transition-all duration-500 disabled:bg-gray-100"
              />
              <span
                v-if="errors.password !== ''"
                class="text-xs text-red-500"
                >{{ errors.password }}</span
              >
            </div>
            <div class="my-2">
              <label class="font-semibold text-sm">Re-enter password </label>
              <input
                type="password"
                ref="password2"
                :disabled="isSubmitting"
                v-model="state.password2"
                placeholder="Re-enter your password"
                class="border rounded-md outline-none w-full block p-2 text-xs focus:!border-imdb-gold transition-all duration-500 disabled:bg-gray-100"
              />
              <span
                v-if="errors.password2 !== ''"
                class="text-xs text-red-500"
                >{{ errors.password2 }}</span
              >
            </div>
            <v-btn
              type="submit"
              :loading="isSubmitting"
              @click="handleSignUp"
              :elevation="0"
              class="!bg-imdb-gold block w-full !normal-case my-3 !rounded-lg shadow-lg !text-sm"
            >
              Create Account
            </v-btn>
          </form>

          <div class="relative mt-10 mb-3">
            <p class="border-b h-[10px]">&nbsp;</p>
          </div>
          <p class="text-sm">
            Already have an account?
            <RouterLink to="/login" class="text-blue-400">Sign in</RouterLink>
          </p>
        </div>
        <div v-else class="flex items-center justify-center flex-col gap-2">
          <v-icon
            icon="mdi-check-circle-outline"
            size="70"
            class="text-imdb-gold"
          />
          <p class="text-center">
            Congratulations, your account has been created successful!
          </p>
          <RouterLink to="/imdb-login">
            <v-btn
              :elevation="0"
              class="!bg-imdb-gold block w-full !normal-case my-3 !rounded-lg shadow-lg !text-sm"
            >
              Login Now
            </v-btn>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
import { BACKEND_URL } from "../../constants";
import axios from "axios";
import { isValidEmail, errorHandler, toastMessage } from "@/utils";

interface IState {
  [key: string]: string;
}
const initialState: IState = {
  names: "",
  email: "",
  password: "",
  password2: "",
};

export default defineComponent({
  data() {
    return {
      state: { ...initialState },
      errors: { ...initialState },
      isSubmitting: false,
      isAccountCreated: false,
    };
  },
  methods: {
    handleSignUp() {
      let isEmpty = false;
      this.errors = { ...initialState };
      const stateAttributes = Object.keys(this.state);

      for (let i = 0; i < stateAttributes.length; i++) {
        const attribute = stateAttributes[i];

        if (this.state[attribute].trim() === "") {
          this.errors[attribute] = attribute + " can not be empty";
          //@ts-ignore
          this.$refs[attribute].focus();
          isEmpty = true;
          break;
        }
      }

      if (isEmpty) return;

      if (!isValidEmail(this.state.email)) {
        this.errors.email = "Invalid email address";
        //@ts-ignore
        this.$refs.email.focus();
        return;
      }

      if (this.state.password.length < 5) {
        this.errors.password = "Password can not be less than 5 characters";
        return;
      } else {
        this.errors.password = "";
      }

      if (this.state.password2 !== this.state.password) {
        this.errors.password2 = "Passwords do not match";
        return;
      } else {
        this.errors.password2 = "";
      }

      //submit the form
      this.isSubmitting = true;
      axios
        .post(BACKEND_URL + "/auth/signup", this.state)
        .then((res) => {
          this.isSubmitting = false;
          this.isAccountCreated = true;
          this.state = { ...initialState };
          toastMessage("success", "User account created succesfull!");
        })
        .catch((error) => {
          this.isSubmitting = false;
          errorHandler(error);
        });
    },
  },
});
</script>
