import { getCookie } from "@/cookies/cookies";
import ky from "ky";

export const instance = ky.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const accessToken = getCookie("accessToken");

export const tokenInstance = ky.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
