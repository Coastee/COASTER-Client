import { instance } from "@/apis/instance";
import { PATH } from "@/constants/path";
import { HTTPError } from "ky";

interface RefreshResponseTypes {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    accessToken: string;
  };
}

export const postRefreshToken = async (): Promise<string | null> => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    window.location.href = PATH.ONBOARDING;

    return null;
  }

  try {
    const response = await instance
      .post<RefreshResponseTypes>("api/v1/refresh", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          RefreshToken: `Bearer ${refreshToken}`,
        },
      })
      .json();

    return response.result.accessToken;
  } catch (error) {
    if (error instanceof HTTPError && error.response.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      window.location.href = PATH.ONBOARDING;
    } else {
      console.error(error);
    }
    return null;
  }
};
