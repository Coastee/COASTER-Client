import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (
  key: string,
  value: string | number,
  options: Record<string, string | number>
) => {
  return cookies.set(key, value, { ...options });
};

export const getCookie = (key: string) => {
  return cookies.get(key);
};

export const removeCookie = (key: string) => {
  return cookies.remove(key, { path: "/" });
};
