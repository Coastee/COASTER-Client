import { instance } from "@/apis/instance";

export const getLinkedInVerify = async (code: string) => {
  const accessToken = localStorage.getItem("accessToken");

  const response = await instance
    .get(`api/v1/connect/linkedin?code=${code}&redirect_uri=${import.meta.env.VITE_LINKEDIN_REDIRECT_URL}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .json();

  console.log(response);

  return response;
};
