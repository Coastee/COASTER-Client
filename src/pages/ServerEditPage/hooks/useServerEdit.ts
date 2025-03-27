import { enterServer, exitServer } from "@/pages/ServerEditPage/apis/server";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEnterServer = (serverId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => enterServer(serverId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myServerInfo"] });
    },
    onError: (error) => {
      console.error("서버 추가 실패:", error);
    },
  });
};

export const useExitServer = (serverId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => exitServer(serverId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myServerInfo"] });
    },
    onError: (error) => {
      console.error("서버 나가기 실패:", error);
    },
  });
};
