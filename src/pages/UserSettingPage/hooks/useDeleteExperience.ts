import { deleteExperience } from "@/pages/UserSettingPage/apis/deleteExperience";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteExperience = () => {
  const userId = localStorage.getItem("userId");
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (experienceId: number) => deleteExperience(Number(userId), experienceId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchUserDetail"] });
      console.log("삭제성공");
    },
  });
};
