import { tokenInstance } from "@/apis/instance";
import type { ExperienceTypes } from "@/pages/UserSettingPage/types/career";

export const postExperience = async (userId: number, data: ExperienceTypes) => {
  const response = await tokenInstance.post(`api/v1/users/${userId}/experiences`, { json: data }).json();

  return response;
};
