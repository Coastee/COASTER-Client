import { formDataInstance } from "@/apis/instance";
import type { UserProfileTypes } from "@/pages/UserSettingPage/types/profile";

export const postUserProfile = async (userId: number, data: UserProfileTypes) => {
  const formData = new FormData();
  formData.append("request", JSON.stringify(data));

  const response = await formDataInstance
    .post(`api/v1/users/${userId}`, {
      body: formData,
    })
    .json();

  console.log(response);

  return response;
};
