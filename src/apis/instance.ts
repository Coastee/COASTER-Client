import { beforeRetry } from "@/apis/interceptor";
import { RETRY_COUNT } from "@/pages/OnboardingPage/constants";
import ky from "ky";

export const instance = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRetry: [beforeRetry],
  },
});

export const tokenInstance = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [
      (request) => {
        const accessToken = localStorage.getItem("accessToken");

        if (accessToken) {
          request.headers.set("Authorization", `Bearer ${accessToken}`);
        }
      },
    ],
    beforeRetry: [beforeRetry],
  },
  retry: {
    limit: RETRY_COUNT,
  },
});

export const formDataInstance = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
