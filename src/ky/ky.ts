import ky from "ky";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const jsonKy = ky.create({
  prefixUrl: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MASTER_TOKEN}`
  },
});
