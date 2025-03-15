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

const accessToken = localStorage.getItem("accessToken");

export const tokenInstance = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [
      (request) => {
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

// formData 전용 인스턴스 추가
export const formDataInstance = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const formDataInstance = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
