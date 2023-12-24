import type { TToastType } from "@/interfaces";
import { AxiosError } from "axios";
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

export const errorHandler = (error: unknown) => {
  if (error instanceof AxiosError) {
    if (error.response) {
      toastMessage("error", error.response.data?.message || error.message);
    } else {
      toastMessage("error", error.message);
    }
  } else if (error instanceof Error) {
    toastMessage("error", error.message);
  } else {
    toastMessage("error", "Error: something went wrong");
  }
};
