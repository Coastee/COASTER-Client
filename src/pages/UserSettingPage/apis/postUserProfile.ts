import { formDataInstance } from "@/apis/instance";
import type { UserProfileTypes } from "@/pages/UserSettingPage/types/profile";

export const postUserProfile = async (userId: number, data: UserProfileTypes) => {
  const response = await formDataInstance
    .post(`api/v1/users/${userId}`, {
      json: { ...data },
    })
    .json();

  console.log(response);

  return response;
};
