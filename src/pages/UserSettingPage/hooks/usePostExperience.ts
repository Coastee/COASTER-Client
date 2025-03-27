import { postExperience } from "@/pages/UserSettingPage/apis/postExperience";
import type { ExperienceTypes } from "@/pages/UserSettingPage/types/career";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostExperience = () => {
  const userId = localStorage.getItem("userId");

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ExperienceTypes) => postExperience(Number(userId), data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchUserDetail"] });
    },
  });
};
