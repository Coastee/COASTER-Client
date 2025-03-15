import { PATH } from "@/constants/path";
import { postRefreshToken } from "@/pages/OnboardingPage/apis/postRefreshToken";
import { RETRY_COUNT } from "@/pages/OnboardingPage/constants";
import type { BeforeRetryHook } from "ky";
import ky, { HTTPError } from "ky";

export const beforeRetry: BeforeRetryHook = async ({ error, retryCount, request }) => {
  if (error instanceof HTTPError && error.response?.status !== 401) {
    return ky.stop;
  }

  if (retryCount === RETRY_COUNT - 1) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    window.location.href = PATH.ONBOARDING;

    return ky.stop;
  }

  try {
    const newAccessToken = await postRefreshToken();
    if (newAccessToken) {
      localStorage.setItem("accessToken", newAccessToken);
      request.headers.set("Authorization", `Bearer ${newAccessToken}`);
    }
  } catch (error) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    window.location.href = PATH.ONBOARDING;

    return ky.stop;
  }
};
