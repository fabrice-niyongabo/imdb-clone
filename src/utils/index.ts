import { BACKEND_URL } from "@/constants";
import type { TToastType } from "@/interfaces";
import { useUserStore } from "@/stores/user";
import { useWatchlistStore } from "@/stores/watchlist";
import axios, { AxiosError } from "axios";
import { useToast } from "vue-toast-notification";

export const isValidEmail = (email: string): boolean => {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
};

export const toastMessage = (type: TToastType, message: string) => {
  const toast = useToast();
  if (type === "success") {
    toast.success(message, { position: "bottom" });
  }
  if (type === "error") {
    toast.error(message, { position: "bottom" });
  }

  if (type === "info") {
    toast.info(message, { position: "bottom" });
  }

  if (type === "warning") {
    toast.warning(message, { position: "bottom" });
  }
};

export const getNewRefreshToken = () => {
  const userStore = useUserStore();
  const { token, keepSignedIn } = userStore;
  if (keepSignedIn && token.trim() !== "") {
    axios
      .post(BACKEND_URL + "/auth/refresh", { token })
      .then((res) => {
        const { refreshToken, token } = res.data;
        userStore.setUser({
          ...userStore.$state,
          token,
          refreshToken,
        });
      })
      .catch((error) => {
        if (error instanceof AxiosError && error.response?.status === 400) {
          const userStore = useUserStore();
          const watchlistStore = useWatchlistStore();
          const currentPath = window.location.pathname.replace("/", "");

          userStore.resetUser();
          watchlistStore.resetWatchlist();
          //go to login page
          window.location.replace("/login?redirect=" + currentPath);
        }
      });
  }
};

export const errorHandler = (error: unknown) => {
  if (error instanceof AxiosError) {
    if (error.response) {
      toastMessage("error", error.response.data?.message || error.message);
    } else {
      toastMessage("error", error.message);
    }

    //handling unauthorized case
    if (error.response?.status === 401) {
      const userStore = useUserStore();
      const currentPath = window.location.pathname.replace("/", "");

      userStore.resetUser();

      //go to login page
      setTimeout(
        () => window.location.replace("/login?redirect=" + currentPath),
        600
      );
    }
  } else if (error instanceof Error) {
    toastMessage("error", error.message);
  } else {
    toastMessage("error", "Error: something went wrong");
  }
};
