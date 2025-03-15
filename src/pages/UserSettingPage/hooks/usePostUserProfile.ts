import { postUserProfile } from "@/pages/UserSettingPage/apis/postUserProfile";
import type { UserProfileTypes } from "@/pages/UserSettingPage/types/profile";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePostUserProfile = () => {
  const userId = localStorage.getItem("userId");
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ file, data }: { file: File | null; data: UserProfileTypes }) =>
      postUserProfile(Number(userId), data, file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchUserDetail"] });
    },
  });
};
