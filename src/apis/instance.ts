import ky from "ky";

export const instance = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const accessToken = localStorage.getItem("accessToken");

export const tokenInstance = ky.create({
  prefixUrl: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MASTER_TOKEN}`, // 로그인 전까지 마스터 토큰 사용
  },
});
