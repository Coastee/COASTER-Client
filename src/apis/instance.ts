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
    Authorization: `Bearer ${accessToken}`,
  },
});
