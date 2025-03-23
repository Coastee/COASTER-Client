import { postExperience } from "@/pages/UserSettingPage/apis/postExperience";
import type { ExperienceTypes } from "@/pages/UserSettingPage/types/career";
import { useUserId } from "@/stores/useUserId";
import { useMutation } from "@tanstack/react-query";

export const usePostExperience = () => {
  const userId = useUserId();

  return useMutation({
    mutationFn: (data: ExperienceTypes) => postExperience(Number(userId), data),
  });
};
