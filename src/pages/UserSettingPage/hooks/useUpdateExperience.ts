import { updateExperience } from "@/pages/UserSettingPage/apis/updateExperience";
import type { ExperienceTypes } from "@/pages/UserSettingPage/types/career";
import { useMutation } from "@tanstack/react-query";

export const useUpdateExperience = () => {
  const userId = localStorage.getItem("userId");

  return useMutation({
    mutationFn: ({ experienceId, data }: { experienceId: number; data: ExperienceTypes }) =>
      updateExperience(Number(userId), experienceId, data),
  });
};
