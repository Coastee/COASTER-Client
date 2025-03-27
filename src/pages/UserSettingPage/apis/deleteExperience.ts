import { tokenInstance } from "@/apis/instance";

export const deleteExperience = async (userId: number, experienceId: number) => {
  const response = await tokenInstance.delete(`api/v1/users/${userId}/experiences/${experienceId}`).json();

  return response;
};
