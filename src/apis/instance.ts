import { beforeRetry } from "@/apis/interceptor";
import { RETRY_COUNT } from "@/pages/OnboardingPage/constants";
import ky from "ky";

const accessToken = localStorage.getItem("accessToken");

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
        const token = localStorage.getItem("accessToken");
        
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
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
