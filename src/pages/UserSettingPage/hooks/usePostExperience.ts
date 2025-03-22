import { postExperience } from "@/pages/UserSettingPage/apis/postExperience";
import type { ExperienceTypes } from "@/pages/UserSettingPage/types/career";
import { useMutation } from "@tanstack/react-query";

export const usePostExperience = () => {
  const userId = localStorage.getItem("userId");

  return useMutation({
    mutationFn: (data: ExperienceTypes) => postExperience(Number(userId), data),
  });
};
