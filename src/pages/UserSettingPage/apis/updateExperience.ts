import { tokenInstance } from "@/apis/instance";
import type { ExperienceTypes } from "@/pages/UserSettingPage/types/career";

export const updateExperience = async (userId: number, experienceId: number, data: ExperienceTypes) => {
  const response = await tokenInstance
    .patch(`api/v1/users/${userId}/experiences/${experienceId}`, { json: data })
    .json();

  return response;
};
