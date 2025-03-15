import { postUserProfile } from "@/pages/UserSettingPage/apis/postUserProfile";
import type { UserProfileTypes } from "@/pages/UserSettingPage/types/profile";
import { useMutation } from "@tanstack/react-query";

export const usePostUserProfile = () => {
  const userId = localStorage.getItem("userId");

  return useMutation({
    mutationFn: ({ file, data }: { file: File | null; data: UserProfileTypes }) =>
      postUserProfile(Number(userId), data, file),
  });
};
